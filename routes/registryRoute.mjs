import express from "express";
import dbPool from "../lib/db.mjs";
import CryptoJS from 'crypto-js';

const router = express.Router();

//middleware

let maNummer = "";
let vorname = "";
let nachname = "";
let passwort_User = "";
let istChef = "";

// http://localhost:7080/api/registrieren
router.get("/", (req, res) => { // pfad, der alles entgegennimmt
    console.log("Register-Button wurde geklickzt")

    //console.log(req)
    //header
    //res.send("<h1>Hallo loginRoute.mjs login</h1>");
    res.render('pages/registrieren', {
        MaNummer: maNummer,
        Vorname: vorname,
        Nachname: nachname,
        Passwort_User: passwort_User,
        IstChef: istChef,
    }); //login.ejs
    //end
});

//-----------------
//var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }));
//----------------
//todo zb button "weiter" erst drücken, wenn spitzname 1 und spitzname 2 eingegeben, jedoch verliert der erste dann den wert

router.post('/', async function (req, res) {

    maNummer = req.body.MaNummer;
    vorname = req.body.Vorname;
    nachname = req.body.Nachname;
    passwort_User = req.body.Passwort_User;
    istChef = req.body.IstChef;

    console.log(maNummer+"uzhuhunhj")
//todo key auslagern, frage, wohin?????
    let data=passwort_User;//Message to Encrypt
    let iv  = CryptoJS.enc.Base64.parse("");//giving empty initialization vector
//var key=CryptoJS.SHA256("Message");//hashing the key using SHA256
    let key=CryptoJS.SHA256("mySecretKey1");//hashing the key using SHA256
    var encryptedStringPasswort_User=encryptData(data,iv,key);//muss var sein
    console.log("encryptedStringPasswort_User: "+encryptedStringPasswort_User);//genrated encryption String:  swBX2r1Av2tKpdN7CYisMg==

    function encryptData(data,iv,key){
        if(typeof data=="string"){
            data=data.slice();
            encryptedStringPasswort_User = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        else{
            encryptedStringPasswort_User = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        return encryptedStringPasswort_User.toString();
    }

    if(maNummer.length===0||vorname.length===0||nachname.length===0||passwort_User.length===0||istChef.length===0){
        res.render('pages/registrieren', {
            MaNummer: maNummer,
            Vorname: vorname,
            Nachname: nachname,
            Passwort_User: passwort_User,
            IstChef: istChef,
        });
    }else{
        let conn1;
        try {
            //conn = await pool.getConnection();
            conn1 = await dbPool.getConnection();
            console.log(conn1 + "**************************"); //komt im console von vs code, aber nicht in konsole browser
            // todo prepared statment wegen sql injection
            const res = await conn1.query("INSERT INTO userVerkaufMubea (MA_Nummer, Vorname, Nachname, Passwort_User, IstChef) VALUES ('"+maNummer+"','"+vorname+"','"+nachname+"','"+encryptedStringPasswort_User+"','"+istChef+"');");
            console.log(res);

        } catch (e) {}

        res.render('pages/Registrieren', {
            MaNummer: maNummer,
            Vorname: vorname,
            Nachname: nachname,
            Passwort_User: passwort_User,
            IstChef: istChef,
        });
    }
});

export default router;
