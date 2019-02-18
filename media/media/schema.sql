DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS survey;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER UNIQUE NOT NULL,
  day INTEGER NOT NULL,
  wechat_id TEXT UNIQUE NOT NULL,
  treatment TEXT NOT NULL
);

CREATE TABLE survey (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER UNIQUE NOT NULL,
  result TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);

INSERT INTO user (user_id, day, wechat_id, treatment)
VALUES
  (1, 1, 'wechat_id1', 'treatment1'),
  (2, 2, 'wechat_id2', 'treatment2'),
  (3, 1, 'wechat_id3', 'treatment3');

INSERT INTO survey (user_id, result, created)
VALUES
  (3, 'Fudan Uni', '2018-01-01 00:00:00');
