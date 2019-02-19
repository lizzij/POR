import functools
# import hashlib

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from media.db import get_db
from werkzeug.exceptions import abort

bp = Blueprint('info', __name__)

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
    survey = get_db().execute(
        'SELECT u.user_id, u.day, result, created'
        ' FROM survey s JOIN user u ON s.user_id = u.user_id'
        ' WHERE s.user_id = ? AND u.day = ?',
        (user_id, day,)
    ).fetchone()

    if survey is None:
        abort(404, "Survey for user_id {0} on day {1} doesn't exist.".format(user_id, day))

    # if request.method == 'POST':
    #     if request.form['to_survey'] == 'Next':
    #         return redirect(url_for('survey'))
    # return render_template('info.html', user_id=user_id, day=day)

    # if request.method == 'POST':
    #     if request.form['submit_survey'] == 'Next':
    #         return render_template('finished.html')
            # db = get_db()
            # db.execute(
            #     'INSERT INTO survey (user_id, result, created)'
            #     ' VALUES (?, ?, ?)',
            #     (g.user_id['user_id'], result, created)
            # )
            # db.commit()

    return render_template('survey.html', user_id=user_id)

@bp.route('/complete', methods=['GET', 'POST'])
def submit():
    """Submit survey result to db"""
    return render_template('finished.html')
    # if request.method == 'POST':
    #     if request.form['submit_survey'] == 'Next':
            # db = get_db()
            # db.execute(
            #     'INSERT INTO survey (user_id, result, created)'
            #     ' VALUES (?, ?, ?)',
            #     (g.user_id['user_id'], result, created)
            # )
            # db.commit()
            # return render_template('finished.html')
