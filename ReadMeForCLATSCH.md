# Datenbank_Einfügtext für versuch
# nur noch passwort andern in lib/db.mjs, name der db muss fleich sein
#Einfügtext, zu testzwecken, könnte sich noch ändern

//mariaDB:
MYSQL -u root -p
password: .......

pw admin:   123
pw 70220:   1234
pw 70223:   abcd
pw 70225:   1


DROP DATABASE mubeaVerkaufDataBase;
CREATE DATABASE mubeaVerkaufDataBase;
SHOW DATABASES;
USE mubeaVerkaufDataBase;

 
CREATE TABLE IF NOT EXISTS userVerkaufMubea (
ID_User int AUTO_INCREMENT,
ErfasstU VARCHAR(100),
MA_Nummer VARCHAR(100),
Vorname varchar(100),
Nachname VARCHAR(100),
Passwort_User VARCHAR(100),
RolleUser VARCHAR(100),
PRIMARY KEY (ID_User)
);

SHOW TABLES;

INSERT INTO userVerkaufMubea
(ErfasstU, MA_Nummer, Vorname, Nachname, Passwort_User, RolleUser)
VALUES 
('01.01.1970','0001','Admin','Administrator','rTtGwkAwxI6ajLjBmMtZ3w==','Admin'),
('02.01.1970','70220','Hans','Meier','QsS4jOwHxRt7ztLW6rFOkw==','Chef'),
('03.01.1970','70223','Max','Mustermann','TKToMaJyQLLbXE0n7Bx2fQ==','Mitarbeiter'),
('04.01.1970','70225','Güööääuendogan','MééàèaeTurc','v9fOXIvcjOuJeDRAnY2+Mw==','Mitarbeiter');

DESCRIBE userVerkaufMubea;
#SELECT * FROM userVerkaufMubea;

#------------------------------------------------------------------------------------------------



DROP TABLE versandListeMubea;

CREATE TABLE IF NOT EXISTS versandListeMubea (
ID_E int AUTO_INCREMENT,
VnameE VARCHAR(100),
NnameE VARCHAR(100),
DatumE VARCHAR(100),
UhrzeitE VARCHAR(100),
WunschDatum VARCHAR(100),
KundeV VARCHAR(100) NOT NULL,
MengeTo VARCHAR(100),
ArtikelAnLager VARCHAR(100),
LSimLeitsystem VARCHAR(100),
R_K VARCHAR(100),
ArtikelNichtProd VARCHAR(100)  DEFAULT 'open',
#FOREIGN KEY(KundeV) REFERENCES kundeMubea(KundeK),
PRIMARY KEY (ID_E)
);

SHOW TABLES;

DESCRIBE versandListeMubea;

INSERT INTO versandListeMubea
(VnameE, NnameE, DatumE, UhrzeitE, WunschDatum, KundeV, MengeTo, ArtikelAnLager,LSimLeitsystem, R_K, ArtikelNichtProd)
VALUES
('Maxli','SeppäToni','01.01.1999','11.23','02.02.2022','Kunde A','101.51','X','X','X','10181234'),
('Sabrina','Hilde','05.07.1985','23.01','03.03.2022','Kunde B','20.62','X','','','1018883'),
('Herbert','vonundzu','25.12.1956','15.34','04.04.2022','Kunde C','0.62','','X','X','1018822');

#SELECT * FROM versandListeMubea;
#------------------------------------------------------------------------------------------------
DROP TABLE kundeMubea;

CREATE TABLE IF NOT EXISTS kundeMubea (
ID_K int AUTO_INCREMENT,
ErfasstK VARCHAR(100),
KundeK VARCHAR(100) NOT NULL,
KundenNummer VARCHAR(100) DEFAULT 'open',
OrtK VARCHAR(100),
AdresseK VARCHAR(100),
LandK VARCHAR(100),
#FOREIGN KEY(KundeK) REFERENCES versandListeMubea(KundeV),
FOREIGN KEY (ID_K) REFERENCES versandListeMubea (ID_E),
PRIMARY KEY (ID_K)
);

SHOW TABLES;

DESCRIBE kundeMubea;

INSERT INTO kundeMubea
(ErfasstK, KundeK, KundenNummer, OrtK, AdresseK, LandK)
VALUES
('01.01.1980','Kunde A','0123456789','Chur','Rabengasse 2','Schweiz'),
('02.01.1980','Kunde B','0103124545','Arbon','Rebenstrasse 3','Schweiz'),
('03.01.1980','Kunde C','9876543210','Valsot','Banhofstrasse 34','Österreich');

SHOW TABLES;
#--------------------------------------------------------------------------------------------
#---------------------***************************+funktioniert
DROP DATABASE mubeaVerkauf1DataBase;
CREATE DATABASE mubeaVerkauf1DataBase;
SHOW DATABASES;
USE mubeaVerkauf1DataBase;

CREATE TABLE author (
id int AUTO_INCREMENT,
name VARCHAR(100),
PRIMARY KEY (id)
);

CREATE TABLE book (
id int AUTO_INCREMENT,
title VARCHAR(200),
author_id int,
FOREIGN KEY (author_id) REFERENCES author (id)
ON DELETE CASCADE
ON UPDATE RESTRICT,
PRIMARY KEY (id)
);

SHOW TABLES;
DESCRIBE author;
DESCRIBE book;