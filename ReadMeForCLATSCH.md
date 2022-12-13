# Datenbank_Einfügtext für versuch
# nur noch passwort andern in lib/db.mjs, name der db muss fleich sein
#Einfügtext, zu testzwecken, könnte sich noch ändern

//mariaDB:
MYSQL -u root -p
password: .......


DROP DATABASE mubeaVerkaufDataBase;
CREATE DATABASE mubeaVerkaufDataBase;
SHOW DATABASES;
USE mubeaVerkaufDataBase;

 
CREATE TABLE IF NOT EXISTS userVerkaufMubea (
ID_User int AUTO_INCREMENT,
MA_Nummer VARCHAR(100),
Vorname varchar(100),
Nachname VARCHAR(100),
Passwort_User VARCHAR(100),
IstChef VARCHAR(100),
PRIMARY KEY (ID_User)
);

 
SHOW TABLES;

INSERT INTO userVerkaufMubea
(MA_Nummer, Vorname, Nachname, Passwort_User, IstChef)
VALUES 
('0001','Admin','Administrator','rTtGwkAwxI6ajLjBmMtZ3w==','Admin'),
('70220','Hans','Meier','QsS4jOwHxRt7ztLW6rFOkw==','istChef'),
('70223','Max','Mustermann','TKToMaJyQLLbXE0n7Bx2fQ==','keinChef'),
('70225','Güööääuendogan','Mééàè??aeTurc','v9fOXIvcjOuJeDRAnY2+Mw==','keinChef');

 
DESCRIBE userVerkaufMubea;

SELECT * FROM userVerkaufMubea;





DROP TABLE versandListeMubea;

CREATE TABLE IF NOT EXISTS versandListeMubea (
ID_E int AUTO_INCREMENT, 
VnameE VARCHAR(100),
NnameE VARCHAR(100),
DatumE VARCHAR(100),
UhrzeitE VARCHAR(100),
WunschDatum VARCHAR(100),
Kunde VARCHAR(100),
MengeTo VARCHAR(100),
ArtikelAnLager VARCHAR(100),
LSimLeitsystem VARCHAR(100),
RTZ_KESIT VARCHAR(100),
ArtikelNichtProd VARCHAR(100)  DEFAULT 'open',
PRIMARY KEY (ID_E)
);

SHOW TABLES;

DESCRIBE versandListeMubea;

INSERT INTO versandListeMubea
(VnameE, NnameE, DatumE, UhrzeitE, WunschDatum, Kunde, MengeTo, ArtikelAnLager,LSimLeitsystem, RTZ_KESIT, ArtikelNichtProd)
VALUES 
('Stups','Stupsi','01.01.1999','11.23','02.02.2022','Sexdus Stoxll DE-Doxgexrn','101.51','X','X','X','10181234'),
('Frölein','Hilde','05.07.1985','23.01','03.03.2022','Sexdoll Stoxll CH-Münsingen','20.62','X','','','1018883'),
('Herbert','vonundzu','25.12.1956','15.34','04.04.2022','SePPP xll CH-Förensee','0.62','','X','X','1018822');
