DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS survey;
DROP TABLE IF EXISTS activity;
DROP TABLE IF EXISTS treatments;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER UNIQUE NOT NULL,
  day INTEGER NOT NULL,
  wechat_id TEXT NOT NULL,
  treatment TEXT NOT NULL
);

CREATE TABLE survey (
  survey_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  day INTEGER,
  result TEXT NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  question_id TEXT,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE activity (
  activity_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  day INTEGER NOT NULL,
  curr_time TIMESTAMP,
  status TEXT NOT NULL,
  current_url TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE treatments (
  treatment_id INTEGER PRIMARY KEY AUTOINCREMENT,
  treatment TEXT NOT NULL,
  day INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  FOREIGN KEY (treatment) REFERENCES user (treatment)
);

INSERT INTO user (user_id, day, wechat_id, treatment)
VALUES
  (1, 1, 'b83120371', 'T1'),
  (2, 1, 'wzx0501153533', 'T1'),
  (3, 1, 'citizen0411', 'T1');
