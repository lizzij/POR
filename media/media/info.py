import functools
from datetime import datetime
from cryptography.fernet import Fernet

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from media.db import get_db
from werkzeug.exceptions import abort

bp = Blueprint('info', __name__)
now = datetime.now()

@bp.route('/<int:user_id>/<int:day>/info', methods=['GET', 'POST'])
def get_info(user_id, day):
    """Send information.

    To a user on a certain day
    Hash user_id and day

    :param user_id: user_id of the user
    :param day: number of day
    """
    info = get_db().execute(
        'SELECT u.user_id, u.day, wechat_id, treatment'
        ' FROM user u'
        ' WHERE u.user_id = ? AND u.day = ?',
        (user_id, day,)
    ).fetchone()

    if info is None:
        abort(404, "Info for user_id {0} on day {1} doesn't exist.".format(user_id, day))

    # if request.method == 'POST':
    #     if request.form['to_survey'] == 'Next':
    #         return redirect(url_for('survey'))
    # return render_template('info.html', user_id=user_id, day=day)

    return render_template('info.html', info=info)

@bp.route('/<int:user_id>/<int:day>/survey', methods=['GET', 'POST'])
def get_survey(user_id, day):
    """Send survey

    According to a user's id and treatment group.
    Hash the user_id and day.
    """
    # survey = get_db().execute(
    #     'SELECT u.user_id, u.day, result, created'
    #     ' FROM survey s JOIN user u ON s.user_id = u.user_id'
    #     ' WHERE s.user_id = ? AND u.day = ?',
    #     (user_id, day,)
    # ).fetchone()
    #
    # if survey is None:
    #     abort(404, "Survey for user_id {0} on day {1} doesn't exist.".format(user_id, day))
    if request.method == 'POST':
        # if request.form['survey'] == 'submit_survey':
        uni = request.form['uni']
        error = None

        if not uni:
            error = 'Please fill in your university.'

        if error is not None:
            flash(error)
        else:
            db = get_db()
            db.execute(
                'INSERT INTO survey (user_id, result, created)'
                ' VALUES (?, ?, ?)',
                (user_id, uni, now)
            )
            db.commit()
            return render_template('finished.html')
    return render_template('survey.html', user_id=user_id, day = day)

@bp.route('/<int:user_id>/<int:day>/complete', methods=['GET', 'POST'])
def submit(user_id, day):
    """Submit survey result to db"""
    if request.method == 'POST':
        # if request.form['survey'] == 'submit_survey':
        uni = request.form['uni']
        error = None

        if not uni:
            error = 'Please fill in your university.'

        if error is not None:
            flash(error)
        else:
            db = get_db()
            db.execute(
                'INSERT INTO survey (user_id = ?, result = ?)'
                ' VALUES (?, ?)',
                (user_id, uni)
            )
            db.commit()
            return render_template('finished.html')
    return render_template('survey.html', user_id=user_id, day=day)

@bp.route('/')
def index():
    """Show all the users, and all resultss."""
    db = get_db()
    users = db.execute(
        'SELECT u.id, u.user_id, day, wechat_id, treatment, result, created'
        ' FROM user u JOIN survey s ON u.user_id = s.user_id'
        ' ORDER BY created DESC'
    ).fetchall()
    return render_template('home.html', users=users)
