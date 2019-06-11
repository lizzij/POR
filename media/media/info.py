# !/usr/bin/env python
# -*- coding: utf-8 -*-
import functools

from datetime import datetime, timedelta

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from media.db import get_db
from werkzeug.exceptions import abort

bp = Blueprint('info', __name__)

@bp.route('/<string:user_id_hashid>/<string:day_hashid>/info', methods=['GET', 'POST'])
def get_info(user_id_hashid, day_hashid):
    """Contains information.

    To a user on a certain day
    Hash user_id and day

    :param user_hashid: hashed user_id of the user
    :param day_hashid: hashed number of day
    """

    # unhash user_id, day and treatment
    user = get_db().execute(
        'SELECT user_id, day, treatment, cohort'
        ' FROM user u'
        ' WHERE u.user_id_hashid = ? AND u.day_hashid = ?',
        (user_id_hashid, day_hashid,)
    ).fetchone()
    if user is None:
        abort(404, "User {0}/{1} doesn't exist.".format(user_id_hashid, day_hashid))
    user_id = user[0]
    day = user[1]
    treatment = user[2]
    cohort = user[3]

    # get day 1 hashid on day 0
    if day < 8:
        next = get_db().execute(
            'SELECT user_id_hashid, day_hashid'
            ' FROM user u'
            ' WHERE u.user_id = ? AND u.day = ?',
            (user_id, (day+1),)
        ).fetchone()
        next_user_id_hashid = next[0]
        next_day_hashid = next[1]
    else:
        next_user_id_hashid = None
        next_day_hashid = None

    # if competed direct to last saved survey page (skip info)
    last_survey_page = get_db().execute(
        'SELECT survey_page, day'
        ' FROM activity a'
        ' WHERE a.user_id = ?',
        (user_id,)
    ).fetchone()
    if last_survey_page is None: # not added
        lastpage = 0
    else:
        lastday = last_survey_page[1]
        lastpage = last_survey_page[0]
        if lastpage <= 0: # sent consent, not submitted
            lastpage = 0
        elif day == 0 and lastday >= 0: # completed consent, not survey => redirect to survey 1
            return redirect(url_for('info.get_info', user_id_hashid=next_user_id_hashid, day_hashid=next_day_hashid))
        elif day <= lastday: # completed or partially completed
            return redirect(url_for('info.get_survey', user_id_hashid=user_id_hashid, day_hashid=day_hashid))
        else:
            pass

    # direct to survey for day 7, 8
    if day > 6:
        return redirect(url_for('info.get_survey', user_id_hashid=user_id_hashid, day_hashid=day_hashid))

    # consent collect, redirect to day 1
    if day == 0:
        if request.method == 'POST':
            now = datetime.now()
            consent = request.form['consent']
            db = get_db()
            db.execute(
                'INSERT INTO survey (user_id, day, result, created, question_id)'
                ' VALUES (?, ?, ?, ?, ?)',
                (user_id, 0, consent, now, 'consent')
            )
            db.commit()
            if consent == 'proceed':
                db = get_db()
                db.execute(
                    'UPDATE activity SET day=?, day_complete = ?, curr_time = ? WHERE user_id = ?',
                    (1, 0, now, user_id)
                )
                db.commit()
                return redirect(url_for('info.get_info', user_id_hashid=next_user_id_hashid, day_hashid=next_day_hashid))
            elif consent == 'notProceed':
                flash(u'如果您不想参与此次调研，只需关闭窗口并删除此联系人即可。如果误点“我不同意”，请点击“我同意参与”。')
        return render_template('consentForm.html', next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid)

    # retrieve info by event_id
    if treatment == "T3":
        T3_day_event_id_dict = {1:1, 2:2, 3:3, 4:6, 5:7, 6:4}
        event_id = T3_day_event_id_dict[day]
    else:
        event_id = day

    # modify source of air quality (text and logo) depending on event_id
    air_quality_sources = { 'T1' : {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', },
                            'T2' : {1:'', 2:'', 3:'', 4:u'（来自：上海市环境监测中心）', 5:u'（来自：上海市环境监测中心）', 6:'', },
                            'T3' : {1:'', 2:'', 3:'', 4:'', 5:'', 6:u'（来自：新闻晨报）', },
                            'T4' : {1:'', 2:'', 3:'', 4:u'（来自：新闻晨报）', 5:u'（来自：新闻广播FM93.4）', 6:'', },
                            'T5' : {1:'', 2:'', 3:'', 4:u'（来自：新闻晨报）', 5:u'（来自：新闻广播FM93.4）', 6:'', }}
    air_quality_source_logos = { 'T1' : {1:'img/transparent.png', 2:'img/transparent.png', 3:'img/transparent.png', 4:'img/transparent.png', 5:'img/transparent.png', 6:'img/transparent.png', },
                                 'T2' : {1:'img/transparent.png', 2:'img/transparent.png', 3:'img/transparent.png', 4:'img/SourceSHEnvironmentLogo.jpg', 5:'img/SourceSHEnvironmentLogo.jpg', 6:'img/transparent.png', },
                                 'T3' : {1:'img/transparent.png', 2:'img/transparent.png', 3:'img/transparent.png', 4:'img/transparent.png', 5:'img/transparent.png', 6:'img/SourceMorningPostLogo.jpg', },
                                 'T4' : {1:'img/transparent.png', 2:'img/transparent.png', 3:'img/transparent.png', 4:'img/SourceMorningPostLogo.jpg', 5:'img/SourceNewsRadioLogo.jpg', 6:'img/transparent.png', },
                                 'T5' : {1:'img/transparent.png', 2:'img/transparent.png', 3:'img/transparent.png', 4:'img/SourceMorningPostLogo.jpg', 5:'img/SourceNewsRadioLogo.jpg', 6:'img/transparent.png', }}
    curr_air_quality_source = air_quality_sources[treatment][day]
    curr_air_quality_source_logo = air_quality_source_logos[treatment][day]

    info = get_db().execute(
        'SELECT i.event_id,title,subtitle,info_date,info_time,location,image_file,short_description,low_temp,high_temp,suitable_for_family,suitable_for_friends,suitable_for_lover,suitable_for_baby,suitable_for_elderly,suitable_for_pet,event_details,phrase_for_week, phrase_for_day, phrase_for_header'
        ' FROM infos i'
        ' WHERE i.event_id = ? AND cohort = ?',
        (event_id, cohort,)
    ).fetchone()

    # retrieve user info from user table, for printing to check pages
    user = get_db().execute(
        'SELECT u.user_id, u.day, wechat_id, treatment, user_id_hashid, day_hashid, cohort'
        ' FROM user u'
        ' WHERE u.user_id = ? AND u.day = ? AND cohort = ?',
        (user_id, day, cohort,)
    ).fetchone()

    # depending on treatment: infoPage (only temperature), infoPageAQ (air quality), infoPageCO (crowdout)
    template = { 'T1' : {4:'infoPage.html', 5:'infoPage.html', 6:'infoPage.html', },
                 'T2' : {4:'infoPageAQ.html', 5:'infoPageAQ.html', 6:'infoPage.html', },
                 'T3' : {4:'infoPage.html', 5:'infoPage.html', 6:'infoPageAQ.html', },
                 'T4' : {4:'infoPageAQ.html', 5:'infoPageAQ.html', 6:'infoPage.html', },
                 'T5' : {4:'infoPageCO.html', 5:'infoPageCO.html', 6:'infoPage.html', }}
    if day <= 3:
        return render_template('infoPage.html', user=user, info=info, air_quality_source=curr_air_quality_source, air_quality_source_logo=curr_air_quality_source_logo)
    else:
        curr_template = template[treatment][day]
        return render_template(curr_template, user=user, info=info, air_quality_source=curr_air_quality_source, air_quality_source_logo=curr_air_quality_source_logo)

@bp.route('/<string:user_id_hashid>/<string:day_hashid>/survey', methods=['GET', 'POST'])
def get_survey(user_id_hashid, day_hashid):
    """Send survey

    According to a user's id and treatment group.
    Hash the user_id and day.
    """

    # unhash user_id and day
    user = get_db().execute(
        'SELECT user_id, day, treatment, cohort'
        ' FROM user u'
        ' WHERE u.user_id_hashid = ? AND u.day_hashid = ?',
        (user_id_hashid, day_hashid,)
    ).fetchone()
    if user is None:
        abort(404, "User {0}/{1} doesn't exist.".format(user_id_hashid, day_hashid))
    user_id = user[0]
    day = user[1]
    treatment = user[2]
    cohort = user[3]

    # get next page for connected link (for testing)
    if day < 8:
        next = get_db().execute(
            'SELECT user_id_hashid, day_hashid'
            ' FROM user u'
            ' WHERE u.user_id = ? AND u.day = ?',
            (user_id, (day+1),)
        ).fetchone()
        next_user_id_hashid = next[0]
        next_day_hashid = next[1]
    else:
        next_user_id_hashid = None
        next_day_hashid = None

    # start on where use left off
    last_survey_page = get_db().execute(
        'SELECT survey_page, day'
        ' FROM activity a'
        ' WHERE a.user_id = ?',
        (user_id,)
    ).fetchone()
    lastpages = [5, 5, 2, 1, 1, 9, 4, 2] # second last page of survey 1-8
    if last_survey_page is None:
        lastpage = 0
    else:
        lastday = last_survey_page[1]
        if day < lastday: # completed
            lastpage = lastpages[day-1]
        elif day == lastday: # partially completed
            lastpage = last_survey_page[0]
        elif day > lastday: # not started
            lastpage = 0

    # collect survey reponse
    if request.method == 'POST':
        now = datetime.now()
        f = request.form
        db = get_db()

        # default do not go to next page on refresh or submit
        global to_next_page
        to_next_page = False

        # save answer
        for question in f.keys():
            for result in f.getlist(question):
                # check if answer already exists (prevent duplication)
                previous_result = db.execute(
                    'SELECT result'
                    ' FROM survey s'
                    ' WHERE s.user_id = ? AND s.day = ? AND s.question_id = ?',
                    (user_id, day, question)
                ).fetchone()

                # save result if not duplicated
                if previous_result is None:
                    # and go to next page
                    to_next_page = True
                    db.execute(
                        'INSERT INTO survey (user_id, day, result, created, question_id)'
                        ' VALUES (?, ?, ?, ?, ?)',
                        (user_id, day, result, now, question)
                    )

        # update last page, activity (for day completion)
        if to_next_page:
            lastpage += 1
            day_complete = 0
            if lastpage >= lastpages[day-1]:
                lastpage = lastpages[day-1]
                day_complete = 1

            db.execute(
                'UPDATE activity SET survey_page = ?, curr_time = ?, day_complete = ? WHERE user_id = ? AND day = ?',
                (lastpage, now, day_complete, user_id, day)
            )
            db.commit()

    # set day 6 second_event, third_event based on treatment
    if day == 6:
        if treatment == 'T3':
            second_event_id = 5
        else:
            second_event_id = 7
        second_event = get_db().execute(
            'SELECT i.event_id,title,subtitle,info_date,info_time,location,image_file,air_quality_source,air_quality_source_logo,short_description,low_temp,high_temp,suitable_for_family,suitable_for_friends,suitable_for_lover,suitable_for_baby,suitable_for_elderly,suitable_for_pet,event_details, phrase_for_week, phrase_for_day, phrase_for_header'
            ' FROM infos i'
            ' WHERE i.event_id = ? AND cohort = ?',
            (second_event_id, cohort,)
        ).fetchone()
        third_event = get_db().execute(
            'SELECT i.event_id,title,subtitle,info_date,info_time,location,image_file,air_quality_source,air_quality_source_logo,short_description,low_temp,high_temp,suitable_for_family,suitable_for_friends,suitable_for_lover,suitable_for_baby,suitable_for_elderly,suitable_for_pet,event_details, phrase_for_week, phrase_for_day, phrase_for_header'
            ' FROM infos i'
            ' WHERE i.event_id = ? AND cohort = ?',
            (8, cohort,)
        ).fetchone()
        if treatment == 'T3':
            return render_template('survey6T3.html', user_id=user_id, second_event=second_event, third_event=third_event, lastpage=lastpage, next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid)
        elif treatment == 'T5':
            return render_template('survey6T5.html', user_id=user_id, second_event=second_event, third_event=third_event, lastpage=lastpage, next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid)
        else:
            return render_template('survey6.html', user_id=user_id, second_event=second_event, third_event=third_event, lastpage=lastpage, next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid)

    # get walkathon day for survey 7
    if day == 7:
        walkathon_date = get_db().execute('SELECT phrase_for_day, phrase_for_week FROM infos WHERE event_id = ? AND cohort = ?', (8, cohort)).fetchone()
        return render_template('survey7.html', walkathon_date=walkathon_date, lastpage=lastpage, next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid)

    # get walkathon day for survey 7
    if day == 1:
        week = get_db().execute('SELECT phrase_for_week FROM infos WHERE event_id = ? AND cohort = ?', (1, cohort)).fetchone()
        return render_template('survey1.html', week=week, lastpage=lastpage, next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid, user_id=user_id)

    if day == 8:
        return render_template('survey' + str(day) + '.html', lastpage=lastpage, user_id=user_id)
    return render_template('survey' + str(day) + '.html', lastpage=lastpage, next_user_id_hashid=next_user_id_hashid, next_day_hashid=next_day_hashid)

@bp.route('/test/<string:hashed_user_id>/<string:hashed_treatment>/info')
def info_test(hashed_user_id, hashed_treatment):
    user_id = '10' + hashed_user_id[12] + hashed_user_id[3]
    treatment = hashed_treatment[7]

    # check if user already read the info page
    read = get_db().execute(
        'SELECT result'
        ' FROM survey s'
        ' WHERE s.user_id = ? AND s.day = ? AND s.question_id = ?',
        (user_id, 10, "readInfo")
    ).fetchone()

    # not read yet
    if read is None:

        # get test info and sources
        info = get_db().execute(
            'SELECT i.event_id,title,subtitle,info_date,info_time,location,image_file,short_description,low_temp,high_temp,suitable_for_family,suitable_for_friends,suitable_for_lover,suitable_for_baby,suitable_for_elderly,suitable_for_pet,event_details,phrase_for_week, phrase_for_day, phrase_for_header'
            ' FROM infos i'
            ' WHERE i.event_id = ? AND cohort = ?',
            (9, 1,)
        ).fetchone()
        curr_air_quality_source = u'（来自：北京晚报）'
        curr_air_quality_source_logo = 'img/SourceBJEN.png'
        return render_template('infoPage' + treatment + '.html', hashed_user_id=hashed_user_id, hashed_treatment=hashed_treatment, info=info, air_quality_source=curr_air_quality_source, air_quality_source_logo=curr_air_quality_source_logo)

    # read info already, skip to survey
    else:
        return redirect(url_for('info.info_test_survey', hashed_user_id=hashed_user_id, hashed_treatment=hashed_treatment))

@bp.route('/test/<string:hashed_user_id>/<string:hashed_treatment>/survey', methods=['GET', 'POST'])
def info_test_survey(hashed_user_id, hashed_treatment):
    user_id = '10' + hashed_user_id[12] + hashed_user_id[3]
    treatment = hashed_treatment[7]

    # record info page as read by user
    db = get_db()
    now = datetime.now()
    db.execute(
        'INSERT INTO survey (user_id, day, result, created, question_id)'
        ' VALUES (?, ?, ?, ?, ?)',
        (user_id, 10, "read", now, "readInfo")
    )
    db.commit()

    if request.method == 'POST':
        questions = ['eventName', 'eventNameOrder', 'airQuality', 'source', 'sourceOrder']
        now = datetime.now()
        db = get_db()
        for question in questions:
            answer = request.form[question]
            db.execute(
                'INSERT INTO survey (user_id, day, result, created, question_id)'
                ' VALUES (?, ?, ?, ?, ?)',
                (user_id, 10, answer, now, question)
            )
        db.commit()
        return render_template('completionPage.html')
    return render_template('surveyInfo.html')

@bp.route('/allResults')
def user_results():
    """Show all the surveys, and all results."""
    db = get_db()
    surveys = db.execute(
        'SELECT user_id, day, question_id, result, created'
        ' FROM survey s'
        ' ORDER BY created ASC'
    ).fetchall()
    return render_template('surveyList.html', surveys=surveys)

@bp.route('/allUsers')
def users():
    """Show all the surveys, and all results."""
    db = get_db()
    users = db.execute(
        'SELECT user_id, day, wechat_id, treatment, cohort, user_id_hashid, day_hashid'
        ' FROM user s'
        ' ORDER BY user_id ASC'
    ).fetchall()
    return render_template('userList.html', users=users)

@bp.route('/allActivities')
def user_activities():
    """Show all the surveys, and all results."""
    db = get_db()
    users = db.execute(
        'SELECT user_id, day, day_complete, survey_page, day_started, curr_time'
        ' FROM activity s'
        ' ORDER BY user_id ASC'
    ).fetchall()
    return render_template('activityList.html', users=users)

@bp.route('/allEvents')
def all_events():
    """Show all the events."""
    db = get_db()
    events = db.execute(
        'SELECT * FROM infos ORDER BY info_id ASC'
    ).fetchall()
    return render_template('infoList.html', events=events)

@bp.route('/eventUpdate', methods=['GET', 'POST'])
def update_events():
    info = None

    if request.method == 'POST':
        # search for event_id and cohort
        event_id = request.form['event_id']
        cohort = request.form['cohort']
        db = get_db()
        info = db.execute('SELECT * FROM infos i WHERE i.event_id = ? AND cohort = ?',(event_id, cohort,)).fetchone()
        # not in db
        if info is None:
            db.execute('INSERT INTO infos (event_id, cohort) VALUES (?, ?)',(event_id, cohort))
            info = db.execute('SELECT * FROM infos i WHERE i.event_id = ? AND cohort = ?',(event_id, cohort,)).fetchone()
            db.commit()
            flash('event_id %s and cohort %s combination not found, fill-in the rest to insert into db.' % (event_id, cohort))

        f = request.form
        db = get_db()
        for field in f.keys():
            for value in f.getlist(field):
                db.execute(
                    'UPDATE infos SET ' +field+ ' = ? WHERE event_id = ? AND cohort = ?',
                    (value, event_id, cohort))
        db.commit()
    return render_template('updateEvent.html', info=info)

@bp.route('/userInsert/<user_id>/<day>/<wechat_id>/<cohort>/<treatment>/<user_id_hashid>/<day_hashid>', methods=['POST'])
def user_insert(user_id, day, wechat_id, cohort, treatment, user_id_hashid, day_hashid):
    db = get_db()
    db.execute(
        'INSERT INTO user (user_id, day, wechat_id, cohort, treatment, user_id_hashid, day_hashid)'
        ' VALUES (?, ?, ?, ?, ?, ?, ?)',
        (user_id, day, wechat_id, cohort, treatment, user_id_hashid, day_hashid)
    )
    db.commit()
    return 'complete'

@bp.route('/activityInsert/<user_id>', methods=['POST'])
def activity_insert(user_id):
    now = datetime.now()
    db = get_db()
    db.execute(
        'INSERT INTO activity (user_id, day, day_complete, survey_page, day_started, curr_time)'
        ' VALUES (?, ?, ?, ?, ?, ?)',
        (user_id, 1, False, 0, now, now)
    )
    db.commit()
    return 'complete'

@bp.route('/activityUpdate/<user_id>/<day>/<day_complete>/<survey_page>/<h1>/<h2>', methods=['POST'])
def activity_update(user_id,day, day_complete, survey_page, h1, h2):
    now = datetime.now()
    db = get_db()
    db.execute(
        'REPLACE INTO activity (user_id, day, day_complete, survey_page, day_started, curr_time)'
        ' VALUES (?, ?, ?, ?, ?, ?)',
        (user_id, day, day_complete, survey_page, now - timedelta(hours = int(h1)), now - timedelta(hours = int(h2)))
    )
    db.commit()
    return 'complete'
