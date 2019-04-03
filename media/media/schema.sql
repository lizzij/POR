DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS survey;
DROP TABLE IF EXISTS activity;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER UNIQUE NOT NULL,
  day INTEGER NOT NULL,
  wechat_id TEXT UNIQUE NOT NULL,
  treatment TEXT NOT NULL
);

CREATE TABLE survey (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  day INTEGER,
  result TEXT NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  question_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE activity (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER UNIQUE NOT NULL,
  day INTEGER NOT NULL,
  start TIMESTAMP,
  finish TIMESTAMP,
  status TEXT NOT NULL,
  current_url TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES survey (user_id)
);

INSERT INTO user (user_id, day, wechat_id, treatment)
VALUES
  (1, 1, 'wechat_id1', 'treatment1'),
  (2, 2, 'wechat_id2', 'treatment2'),
  (3, 1, 'wechat_id3', 'treatment3'),
  (4, 1, 'wechat_id4', 'treatment1'),
  (100, 1, 'wechat_id5', 'treatment1'),
  (101, 1, 'wechat_id6', 'treatment2');

-- INSERT INTO survey (user_id, result, created)
-- VALUES
--   (3, 'Fudan Uni', '2018-01-01 00:00:00'),
--   (2, 'Fudan Uni', '2018-01-04 00:03:02');
