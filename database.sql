CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path VARCHAR(100),
	description VARCHAR(100),
	likes INT
);

INSERT INTO images (path, description) 
VALUES ('images/aubrey.jpeg', 'Aubrey the Golden Doodle');
INSERT INTO images (path, description) 
VALUES ('images/crossword.PNG', 'The NYT Crossword');
INSERT INTO images (path, description) 
VALUES ('images/espresso.jpg', 'Espresso');
INSERT INTO images (path, description) 
VALUES ('images/family.jpeg', 'Family!');
INSERT INTO images (path, description) 
VALUES ('images/gardening.jpeg', 'Gardening');
INSERT INTO images (path, description) 
VALUES ('images/iris_cuddles.jpeg', 'Iris (ft. Cuddles the bear)');
INSERT INTO images (path, description) 
VALUES ('images/italy.jpg', 'Italy');
INSERT INTO images (path, description) 
VALUES ('images/loons.jpeg', 'Minnesota United!');
INSERT INTO images (path, description) 
VALUES ('images/playtime.jpeg', 'Play Time!');
INSERT INTO images (path, description) 
VALUES ('images/reading.jpg', 'A good book');
INSERT INTO images (path, description) 
VALUES ('images/spaghetti.JPG', 'Spaghetti');
INSERT INTO images (path, description) 
VALUES ('images/tennis.png', 'Tennis');
