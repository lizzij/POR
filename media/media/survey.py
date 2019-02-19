# import functools
#
# from flask import (
#     Blueprint, flash, g, redirect, render_template, request, session, url_for
# )
#
# from media.db import get_db
#
# bp = Blueprint('survey', __name__)
#
# @bp.route('/<int:user_id>/<int:day>/survey', methods=['GET', 'POST'])
# def get_survey(user_id, day):
#     """Send survey
#
#     According to a user's id and treatment group.
#     Hash the user_id and day.
#     """
#     return render_template('survey.html', user_id=user_id, day=day)
