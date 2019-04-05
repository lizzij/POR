import os

from flask import Flask, request, url_for, redirect, render_template, g
from hashids import Hashids


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # home page
    @app.route('/')
    @app.route('/home')
    def home():
        return render_template('home.html')

    # # information page
    # @app.route('/<int:user_id>/<int:day>/info')
    # def info(user_id, day):
    #     # return render_template('info.html', user_id=decrypt_val(user_id), day=decrypt_val(day))
    #     return render_template('info.html', user_id=user_id, day=day)

    # information page

    hashids = Hashids()
    @app.route('/<int:user_id>/<int:day>/info', methods=['GET', 'POST'])
    def info(user_id, day):
        if request.method == 'POST':
            if request.form['to_survey'] == 'Next':
                return redirect(url_for('survey'))
        return render_template('info.html', user_id=user_id, day=user_id)

    # survey page
    @app.route('/<int:user_id>/<int:day>/survey', methods=['GET', 'POST'])
    def survey(user_id, day):
            return render_template('survey.html', user_id=user_id, day=day)

    return app
