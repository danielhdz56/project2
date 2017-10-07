### Schema
DROP DATABASE IF EXISTS chalkboardplus_db;
CREATE DATABASE chalkboardplus_db;
USE chalkboardplus_db;

CREATE TABLE students
(
	id INT(11) NOT NULL AUTO_INCREMENT,
	s_fname VARCHAR(255) NOT NULL,
    s_lname VARCHAR(255) NOT NULL,
    s_sex VARCHAR(255) NOT NULL,
    GPA DECIMAL(5,2) NOT NULL,
    s_cohort INT(11) NOT NULL,
    s_add VARCHAR(255) NOT NULL,
    s_email VARCHAR(255) NOT NULL,
    s_password VARCHAR(255) NOT NULL,
    s_photo VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE teachers
(
	id INT(11) NOT NULL AUTO_INCREMENT,
	t_fname VARCHAR(255) NOT NULL,
    t_lname VARCHAR(255) NOT NULL,
    t_sex VARCHAR(255) NOT NULL,
    t_subj VARCHAR(255) NOT NULL,
    t_dept VARCHAR(255) NOT NULL,
    t_cohort INT(11) NOT NULL,
    t_add VARCHAR(255) NOT NULL,
    t_email VARCHAR(255) NOT NULL,
    t_password VARCHAR(255) NOT NULL,
    t_photo VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE stupost
(
	id INT(11) NOT NULL AUTO_INCREMENT,
	s_id INT(11) NOT NULL,
    s_msg VARCHAR(255) NOT NULL,
    s_att VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (s_id) REFERENCES students(id)
);

CREATE TABLE teapost
(
	id INT(11) NOT NULL AUTO_INCREMENT,
	t_id INT(11) NOT NULL,
    t_mag VARCHAR(255) NOT NULL,
    t_att VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (t_id) REFERENCES teachers(id)
);