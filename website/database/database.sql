CREATE TABLE test (wechatName VARCHAR(20), study_id VARCHAR(20));
DESCRIBE test;
INSERT INTO test ( wechatName, study_id )  VALUES ( "person1", "id1" );
SHOW TABLES;
show index from test;
SELECT * FROM test;
INSERT INTO test ( wechatName, study_id ) VALUES ( "person2", "id2");
DELETE FROM test WHERE wechatName='person1';
DELETE FROM test WHERE wechatName='person2';
ALTER TABLE test
    -> ADD COLUMN input VARCHAR(15) AFTER study_id;
UPDATE mysql.user SET user='username' WHERE User = 'root';
UPDATE mysql.user SET authentication_string = password('password') WHERE User = 'root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'powerofrep';
USE test;
GRANT SUPER ON *.* TO root@localhost
FLUSH PRIVILEGES;
INSERT INTO mysql.user (Host, User, Password) VALUES ('%', 'root', password('powerofrep'));
GRANT ALL ON *.* TO 'root'@'%' WITH GRANT OPTION;
