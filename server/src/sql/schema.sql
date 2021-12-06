-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.

-- TABLE genre
CREATE TABLE genre
(
	genre_id INT PRIMARY KEY,
	genre_description VARCHAR(255) NOT NULL
);

-- TABLE album
CREATE TABLE album
(
	album_id INT PRIMARY KEY,
	album_title VARCHAR(255) NOT NULL,
	year_released INT NOT NULL
);

-- TABLE artist
CREATE TABLE artist
(
	artist_id INT PRIMARY KEY,
	artist_name VARCHAR(100) NOT NULL
);

-- TABLE songs
CREATE TABLE songs
(
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,

	-- Added attributes
	fk_genreid INT,
	fk_albumid INT,
	fk_artistid INT,
	song_length INT
	-- 	foreign_keys (genre) references genre(genre_id)
	-- 	ON DELETE SET NULL ON UPDATE CASCADE,
	-- 	foreign_keys (album) references album(album_id)
	-- 	ON DELETE SET NULL ON UPDATE CASCADE,
	-- 	foreign_keys (artist) references artist(artist_id)
	-- 	ON DELETE SET NULL ON UPDATE CASCADE
);

-- INSERT Statements
INSERT INTO songs
VALUES
	(1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', 1, 1, 1, 1);

INSERT INTO songs
VALUES
	(2, 'Happy Birthday', 'G4 G4 A4 G4 C4 B4 G4 G4 G4 E4 C4 F4 F4 E4 C4 D4 C4', 2, 2, 2, 1);

INSERT INTO songs
VALUES
	(3, 'Twinkel Twinkel', 'C4 C4 G4 G4 A4 A4 G4 F4 F4 E4 E4 D4 D4 C4', 3, 3, 3, 1);






--  Song 1 Details
INSERT INTO genre
VALUES
	(1, 'GENRE : Poem');

INSERT INTO album
VALUES
	(1, 'ALBUM : Wilco', 2010);

INSERT INTO artist
VALUES
	(1, ' ARTIST : Ludwig van Beethoven');

-- Song 2 Details
INSERT INTO genre
VALUES
	(2, 'GENRE : Childrens Music');

INSERT INTO album
VALUES
	(2, 'ALBUM : Cage', 2011);

INSERT INTO artist
VALUES
	(2, ' ARTIST : RR Forman');

-- Song 3 Details
INSERT INTO genre
VALUES
	(3, 'GENRE : Lullaby');

INSERT INTO album
VALUES
	(3, 'ALBUM : The Star', 1806);

INSERT INTO artist
VALUES
	(3, 'ARTIST : Jane Taylor');


INSERT INTO genre
VALUES
	(4, 'GENRE : Rhyme');

INSERT INTO album
VALUES
	(4, 'ALBUM : Unknown', 2016);

INSERT INTO artist
VALUES
	(4, 'ARTIST : Charles);
