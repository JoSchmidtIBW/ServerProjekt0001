# Datenbank_Einfügtext für versuch
# nur noch passwort andern in lib/db.mjs, name der db muss fleich sein
#Einfügtext, zu testzwecken, könnte sich noch ändern

//mariaDB:
MYSQL -u root -p
password: .......

SHOW DATABASES;

CREATE DATABASE loginDBX;

USE loginDBX;

CREATE TABLE IF NOT EXISTS userMubeaX (
ID_User int AUTO:INCREMENT,
MA_Nummer VARCHAR(100),
Vorname VARCHAR(100),
Nachname VARCHAR(100),
Passwort_User VARCHAR(100),
IstChef VARCHAR(100),
IstUnterhalt VARCHAR(100),
PRIMARY KEY (ID_USER)
);

SHOW TABLES;

INSERT INTO userMubeaX
(MA_Nummer, Vorname, Nachname, Passwort_User, IstChef, istUnterhalt)
VALUES
('0001','Admin','Administrator','123'.'Admin','Admin'),
('70220','Ueli','CHEF+ChefU','ibw','istChef','istU'),
('70223','Ueli',ChefUnterhalt','iloveGR','keinChef','istU'),
('70224','Ueli','Bediener','123','keinChef','keinU'),
('70225','Güööääundogan','MééàèŕčTurc','1','keinChef','keinU');

DESCRIBE userMubeaX;

SELECT * FROM userMubeaX;