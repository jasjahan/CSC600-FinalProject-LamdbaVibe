-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.

-- TABLE genre
CREATE TABLE genre (
	genre_id INT PRIMARY KEY,
	genre_description VARCHAR(255) NOT NULL
);

-- TABLE album
CREATE TABLE album (
	album_id INT PRIMARY KEY,
	album_title VARCHAR(255) NOT NULL,
	year_released INT NOT NULL
);

-- TABLE artist
CREATE TABLE artist (
	artist_id INT PRIMARY KEY,
	artist_name VARCHAR(100) NOT NULL
);

-- TABLE songs
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,

	-- Added attributes
	fk_genreid INT, 
	fk_albumid INT, 
	fk_artistid INT,
	song_length INT
	-- foreign_keys (genre) references genre(genre_id)
	-- ON DELETE SET NULL ON UPDATE CASCADE,
	-- foreign_keys (album) references album(album_id)
	-- ON DELETE SET NULL ON UPDATE CASCADE,
	-- foreign_keys (artist) references artist(artist_id)
	-- ON DELETE SET NULL ON UPDATE CASCADE
);

-- INSERT Statements
INSERT INTO songs 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4',1,1,1,1);

INSERT INTO songs
VALUES (2, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4',1,1,1,1);

INSERT INTO genre
VALUES (1, 'Test Genre');

INSERT INTO album
VALUES (1,'Test album', 2010);

INSERT INTO artist
VALUES (1, 'Test Artist');
