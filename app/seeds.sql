-- Seeds for the tables students, teachers, stuposts, teaposts in chalkboardplus_db

INSERT INTO users (firstname,lastname,sex,assignment,dailygrade,quizgrade,testgrade,address,email,password,photo) 
VALUES
('Kevon','Robinson','Male','Mathematics','B+','A','A-','2554 Wolf Creek Rd','kr77@hhs.edu','fdgvhgdrst12!','https://i.pinimg.com/originals/8f/57/2d/8f572d3fced9780ce7003ac94bae6e14.jpg'),
('Erin','Conway','Female','Chemistry','B-','B+','C+','3100 Shepherd Dr','ec55@hhs.edu','wvhqfqdewqf!','https://i.pinimg.com/736x/4f/69/b4/4f69b4c959027702f8f07ac813c3cdd5--beautiful-eyes-beautiful-women.jpg'),
('Emily','Landes','Female','English','A-','B+','B+','2140 Stonecrest Pkwy','el45@hhs.edu','gwugtw1sf244!','https://farm5.static.flickr.com/4116/4819903224_ce9a6b02f8_b.jpg'),
('George','Moes','Male','Computer Science','A+','A','A-','3550 Enclave Rd','gm99@hhs.edu','A23rqefqasdhai4!','https://i.pinimg.com/736x/8f/58/b5/8f58b536e07872b7b111d214c0c3860f--blonde-guys-blond-male.jpg'),
('Daniel','Hernandez','Male','Mathematics',null,null,null,'1254 Briar Forest Rd','dh12@hhs.edu','prfanjkltrh6944!','https://i.pinimg.com/736x/2c/68/da/2c68dab74a94d424c038900c6846462f--chris-delia-father.jpg'),
('David','Wright','Male','Computer Science',null,null,null,'3250 Greenbriar Dr','dw40@hhs.edu','$%569fqdefsf!','https://promisehouse.org/wp-content/uploads/2014/01/Young-Adult-Male-Blue-Button-Up-cropped.jpg'),
('Grant','Chan','Male','Chemistry',null,null,null,'1436 Whittington Ave','gc16@hhs.edu','gASsf32732579!','https://pavlovdogtraining.com/wp-content/uploads/2013/12/Asian-Puppy-Training.jpg'),
('Abigail','Brooks','Female','Biology',null,null,null,'6242 Shepherd Dr','ab19@hhs.edu','A298720sfai4!','https://i.pinimg.com/736x/1e/a4/c7/1ea4c7cf2e551d83ba0da9570a8828d4.jpg'),
('Juliette','Jones','Female','English Literature',null,null,null,'1500 Rice Blvd','jj87@hhs.edu','A2Du7ni3414!','http://coolspotters.com/files/photos/1087248/grace-phipps-profile.jpg?1375805602'),
('Katie','Schilinger','Female','Physical Education',null,null,null,'5363 Albans Ave','ks34@hhs.edu','23rfkht4f3y!','http://i.dailymail.co.uk/i/pix/2016/08/24/17/378D056D00000578-3756509-image-m-6_1472055512211.jpg');

INSERT INTO groupes (short_slug,description)
VALUES
('student','Students'),
('teacher','Teachers');

INSERT INTO group_user
(groupeId, userId)
VALUES
(1,1),
(2,2);

INSERT INTO posts(userId,content,attachment)
VALUES
(2,'Hi teach, can you help me with a math problem?','https://image.slidesharecdn.com/mathandgoogledrawing-cmcfn2015-151012025808-lva1-app6891/95/math-and-google-drawing-8-638.jpg?cb=1444620770'),
(1,'Sure, but just so you know, you are wrong.','http://blog.startwithwhy.com/.a/6a00d834525fff69e201bb08887fa8970d-pi');

INSERT INTO att_codes(slug,description)
VALUES
('Present','Present'),
('Absent','Needed to attend a funeral'),
('Truancy','Truancy');

INSERT INTO attendance(attCodeId,userId)
VALUES
(1,1);

INSERT INTO classes(class_name,description,title)
VALUES
('AP Calculus','Fundamental Theorem of Calculus and Riemann\'s Theorem','Fundamental Theorem of Calculus and Riemann\'s Theorem'),
('AP Chemistry','Chemical Energetics and Molecular Orbital Theory','Chemical Energetics and Molecular Orbital Theory');

INSERT INTO class_user
(userId, classId)
values
(1, 1),
(2, 1);

INSERT INTO departments(short_slug,dept_name)
VALUES
('math','Mathematics'),
('chem','Chemistry');

INSERT INTO department_user
(userId, departmentId)
VALUES
(2, 1);