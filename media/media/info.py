import functools

from datetime import datetime
from utils import create_user_id_hashid, decode_user_id_hashid, create_day_hashid, decode_day_hashid

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from media.db import get_db
from werkzeug.exceptions import abort

bp = Blueprint('info', __name__)
now = datetime.now()

@bp.route('/<int:user_id>/<int:day>/hash', methods=['GET', 'POST'])
def hash_info(user_id, day):
    """Hash information.

    Hash user_id and day

    :param user_id: user_id of the user
    :param day: number of day
    """
    user_id_hashid = create_user_id_hashid(user_id)
    day_hashid = create_day_hashid(day)
    return '/%s/%s/info' % (user_id_hashid, day_hashid)

@bp.route('/<user_id_hashid>/<day_hashid>/info', methods=['GET', 'POST'])
def get_info(user_id_hashid, day_hashid):
    """Send information.

    To a user on a certain day
    Hash user_id and day

    :param user_hashid: hashed user_id of the user
    :param day_hashid: hashed number of day
    """
    user_id = decode_user_id_hashid(user_id_hashid)[0]
    day = decode_day_hashid(day_hashid)[0]
    info = get_db().execute(
        'SELECT u.user_id, u.day, wechat_id, treatment'
        ' FROM user u'
        ' WHERE u.user_id = ? AND u.day = ?',
        (user_id, day,)
    ).fetchone()

    if info is None:
        abort(404, "Info for user_id {0} on day {1} doesn't exist.".format(user_id, day))

    return render_template('info.html', info=info)

@bp.route('/<int:user_id>/<int:day>/survey', methods=['GET', 'POST'])
def get_survey(user_id, day):
    """Send survey

    According to a user's id and treatment group.
    Hash the user_id and day.
    """
    if request.method == 'POST':
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

@bp.route('/surveys', methods=['GET', 'POST'])
def surveys():
    """Show all the users, and all results"""
    db = get_db()
    users = db.execute(
        'SELECT u.id, u.user_id, day, wechat_id, treatment, result, created'
        ' FROM user u JOIN survey s ON u.user_id = s.user_id'
        ' ORDER BY created DESC'
    ).fetchall()
    return render_template('home.html', users=users)

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

@bp.route('/questions', methods=['GET', 'POST'])
def questions():
    """Display all questions"""
    return render_template('questions.html')

@bp.route('/new', methods=['GET', 'POST'])
def new():
    """Display all questions"""
    return render_template('new.html')

@bp.route('/new1', methods=['GET', 'POST'])
def new1():
    """Display all questions"""
    return render_template('new1.html')

@bp.route('/new2', methods=['GET', 'POST'])
def new2():
    """Display all questions"""
    return render_template('new2.html')

@bp.route('/new3', methods=['GET', 'POST'])
def new3():
    """Display all questions"""
    return render_template('new3.html')

@bp.route('/new4', methods=['GET', 'POST'])
def new4():
    """Display all questions"""
    return render_template('new4.html')
