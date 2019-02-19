import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from media.db import get_db

bp = Blueprint('info', __name__, url_prefix='/')

@bp.route('/<int:id>/<int:day>/info', methods=['GET', 'POST'])
def get_info(id, day):
    """Send information.

    To a user on a certain day
    Hash id and day

    :param id: id of the user
    :param day: number of day
    """
    info = get_db().execute(
        'SELECT p.id, day, wechat_id, treatment'
        ' FROM user'
        ' WHERE p.id = ?',
        (id,)
    ).fetchone()

    if info is None:
        abort(404, "User id {0} doesn't exist.".format(id))

    # if request.method == 'POST':
    #     if request.form['to_survey'] == 'Next':
    #         return redirect(url_for('survey'))
    # return render_template('info.html', id=id, day=day)

    return info
