--For Best Results, define schema in the CLI, in this particular order so that no reference
--errors are thrown

DROP DATABASE nodela;

CREATE DATABASE nodela;

USE nodela;

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(20) NOT NULL UNIQUE,
PRIMARY KEY (id)
)

CREATE TABLE hood(
  id INT NOT NULL AUTO_INCREMENT,
  up_dwn VARCHAR(10) NOT NULL,
  hood_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE post_type (
  id INT NOT NULL AUTO_INCREMENT,
  help_gen VARCHAR(20) NOT NULL,
  PRIMARY KEY(id)
)

CREATE TABLE post (
  id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  CONSTRAINT `post_id_ref` FOREIGN KEY (post_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  post_hood_id INT NOT NULL,
  CONSTRAINT `post_hood_ref` FOREIGN KEY (post_hood_id) REFERENCES hood (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  post_type_id INT NOT NULL,
  CONSTRAINT `post_type_id_ref` FOREIGN KEY (post_type_id) REFERENCES post_type (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  post_body VARCHAR(500) NOT NULL,
  post_votes INT NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE comment(
  id INT NOT NULL AUTO_INCREMENT,
  user_comment_id INT NOT NULL,
  CONSTRAINT `user_comment_id_reference` FOREIGN KEY (user_comment_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  post_comment_id INT NOT NULL,
  CONSTRAINT `post_comment_id_reference` FOREIGN KEY (post_comment_id) REFERENCES post (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  comment_body VARCHAR(500) NOT NULL,
  comment_votes INT NOT NULL,
  PRIMARY KEY (id)
)