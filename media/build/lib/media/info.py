#!/usr/bin/env python
# -*- coding: utf-8 -*-
import functools

from datetime import datetime
from media.utils import create_user_id_hashid, decode_user_id_hashid, create_day_hashid, decode_day_hashid

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
    user_id_hashid = create_user_id_hashid(user_id, day)
    day_hashid = create_day_hashid(user_id, day)
    return '/%s/%s/info' % (user_id_hashid, day_hashid)

@bp.route('/<user_id_hashid>/<day_hashid>/info', methods=['GET', 'POST'])
def get_info(user_id_hashid, day_hashid):
    """Contains information.

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

    # title = unicode("漫步上海", "utf-8")
    # subtitle = unicode("边走边拍", "utf-8")
    # low_temp = 29
    # high_temp = 15
    #
    # user_id = decode_user_id_hashid(user_id_hashid)[0]
    # day = decode_day_hashid(day_hashid)[0]
    # info = get_db().execute(
    #     'SELECT u.user_id, u.day, wechat_id, treatment'
    #     ' FROM user u'
    #     ' WHERE u.user_id = ? AND u.day = ?',
    #     (user_id, day,)
    # ).fetchone()
    #
    # if info is None:
    #     abort(404, "Info for user_id {0} on day {1} doesn't exist.".format(user_id, day))
    #
    # return render_template('infoPage.html', info=info,
    # title=title, subtitle=subtitle, low_temp=low_temp, high_temp=high_temp)

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

@bp.route('/')
def index():
    return '谢谢参与'

@bp.route('/completion/detail')
def completion():
    """Show all the users, and all results."""
    db = get_db()
    users = db.execute(
        'SELECT u.id, u.user_id, u.day, created'
        ' FROM user u JOIN survey s ON u.user_id = s.user_id'
        # TODO change to curr_time in activity
        ' ORDER BY created ASC'
    ).fetchall()
    return render_template('completion.html', users=users)
    # return 'secrete'

@bp.route('/survey1')
def survey1():
    return render_template('survey1.html')
    # """Show all the users, and all results."""
    # db = get_db()
    # user = db.execute(
    #     'SELECT u.id, u.user_id, u.day, created'
    #     ' FROM user u JOIN survey s ON u.user_id = s.user_id'
    #     ' ORDER BY created DESC'
    # ).fetchall()
    # return render_template('completion.html', user=user)
    # # return 'secrete'

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

@bp.route('/new5', methods=['GET', 'POST'])
def new5():
    """Display all questions"""
    return render_template('new5.html')

@bp.route('/new6', methods=['GET', 'POST'])
def new6():
    """Display all questions"""
    return render_template('new6.html')

@bp.route('/test_display', methods=['GET', 'POST'])
def test_display():
    """Display all questions"""
    return render_template('test.html')
#
# @bp.route('/infoPage', methods=['GET', 'POST'])
# def info_page():
#     """Display information page
#
#     With given parameters
#     """
#     title = unicode("漫步老上海", "utf-8")
#     low_temp = 31
#     high_temp = 25
#     return render_template('infoPage.html', title = title, low_temp = low_temp, high_temp = high_temp)
