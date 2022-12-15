import express from "express";
import dbPool from "../lib/db.mjs";
import User from '../Controllers/UserInLoggt.mjs';
import CryptoJS from 'crypto-js';

const router = express.Router();
/*
class User {
    constructor(ma_NummerU,vornameU,nachnameU,passwortU,istChefU) {
        this.ma_NummerU = ma_NummerU;
        this.vornameU = vornameU;
        this.nachnameU = nachnameU;
        this.passwortU = passwortU;
        this.istChefU = istChefU;
    }
    getMa_NummerU() {
        return this.ma_NummerU;
    }
    setMa_NummerU(ma_NummerU) {
        this.ma_NummerU = ma_NummerU;
    }
    getVornameU() {
        return this.vornameU;
    }
    setVornameU(vornameU) {
        this.vornameU = vornameU;
    }
    getNachnameU() {
        return this.nachnameU;
    }
    setNachnameU(nachnameU) {
        this.nachnameU = nachnameU;
    }
    getPasswortU() {
        return this.passwortU;
    }
    setPasswortU(passwortU) {
        this.passwortU = passwortU;
    }
    getIstChefU() {
        return this.istChefU;
    }
    setIstChefU(istChefU) {
        this.istChefU = istChefU;
    }
}
 */

//middleware

let myVar = 0;
let spitzname = "";
let spitzname2 = "";

function clicker() {
    //myVar = "blabla";
    myVar = myVar +1;
    console.log("Button Working! ich bin loginRoute.mjs" + myVar);
    /*
    res.render('login', {
        myVar : myVar,
        xClicker: clicker()
    });
    */
    // return myVar;
};

let maNummerL = "";
let passwortL = "";
let maNummerLEingabe = "";
let passwortLEingabe = "";

router.get("/l", (req, res) => {

    maNummerLEingabe = req.body.maNummerLEingabe;
    passwortLEingabe = req.body.passwortLEingabe;

    res.render('pages/login', {
        maNummerLServer : maNummerLEingabe,
        passwortLServer : passwortLEingabe,
        xClicker: clicker()
    });
});

router.post('/l', async(req, res)=>{
    let isMa_NummerInDB = false;
    let isPasswortUserInDB = false;
    console.log("bin Post -----------------------------------------------------")
    //werIstAngemeldet12= req.body.werIstAngemeldetH;
    maNummerL = req.body.maNummerLEingabe;
    //maNummerL = "haaannnnssoooo"
    console.log("maaaaNummerL: "+maNummerL)
    passwortL = req.body.passwortLEingabe;
    console.log("paaaaasswortL: "+passwortL)

    //---------------------------------------------------------------------------------
//import CryptoJS from 'crypto-js';         erstellt jedesmal ein neuer hash
    let cipherPasswortL = CryptoJS.AES.encrypt("1", 'secret key 123').toString();////
    console.log("cipherPasswortL: "+cipherPasswortL)
//problem: man kann ma-nummer suchen, objekt erstellen mit pw, wenn pw gleich decrypt dann gut
    //aber mann möchte ma_nummer und pw suchen in db, was wenn es zwei gleiche ma_nummern hat
// Decrypt
    let bytes  = CryptoJS.AES.decrypt("U2FsdGVkX1+nJNyUfcMjzGmoApYQeogYR3oBzoCB19Q=", 'secret key 123');
    console.log("bytespasswortL: "+bytes)
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log("originalTextpasswortL: "+originalText); // 'my message'
//---------------------------------------------------------------------------------
    //***************************************************************************//
    let data= passwortL;//Message to Encrypt
    let iv  = CryptoJS.enc.Base64.parse("");//giving empty initialization vector
    let key=CryptoJS.SHA256("mySecretKey1");//hashing the key using SHA256
    var encryptedString=encryptData(data,iv,key);//muss var sein//
    console.log("encryptedString: "+encryptedString);//genrated encryption String:  swBX2r1Av2tKpdN7CYisMg==

    function encryptData(data,iv,key){
        if(typeof data=="string"){
            data=data.slice();
            encryptedString = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        else{
            encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        return encryptedString.toString();
    }

//var iv  = CryptoJS.enc.Base64.parse("");
//var key=CryptoJS.SHA256("Message");

    let decrypteddata=decryptData(encryptedString,iv,key);
    console.log("decrypteddata: "+decrypteddata);//genrated decryption string:  Example1

    function decryptData(encrypted,iv,key){
        let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8)
    }
    //***************************************************************************

    //console.log("check- MaNummer: "+ await checkMaNummer(maNummerL));

    isMa_NummerInDB = await checkMaNummer(maNummerL);
    console.log("isMa_NummerInDB: "+isMa_NummerInDB);

    isPasswortUserInDB = await checkPasswort(maNummerL,encryptedString);//
    console.log("isPasswortInDB: "+isPasswortUserInDB);

    if(isMa_NummerInDB===true && isPasswortUserInDB===false){

        //res.redirect('/api/inHome');
        res.render('pages/login',{
            maNummerLServer : "MA_Nummer IN db GEFUNDEN :)",
            passwortLServer : "pw leer oder falsch",
            xClicker: clicker()
        });
    }else if(isMa_NummerInDB===false&&isPasswortUserInDB===false){
        res.render('pages/login',{
            maNummerLServer : "MA_Nummer gibt es nicht in DB :(",
            passwortLServer : "pw ist falsch oder leer",
            xClicker: clicker()
        });
    }else if(isMa_NummerInDB===true&&isPasswortUserInDB===false){
        res.render('pages/login',{
            maNummerLServer : "MA_Nummer gefunden :)",
            passwortLServer : "Passwort ist falsch :(",
            xClicker: clicker()
        });
    }else if(isMa_NummerInDB===true&&isPasswortUserInDB===true){
        console.log("isMa_NummerInDB und isPasswortUserInDB sind true");
        console.log("encryptedString: "+encryptedString)

        // User.counter=0;


        let uuu11=await erstelleUser(maNummerL,encryptedString);

        console.log("uuu11: "+uuu11.getMa_NummerU())
        //console.log("uuu11 this.id: "+uuu11._id);
        //console.log("uuu11 idddddddddddd: "+uuu11.id1);
        console.log("uuu11.getID: "+uuu11.getID());

        const userArr = Object.keys(uuu11);

        console.log("userArr: "+userArr);//



        //let b1 = object.getID()===1;
        // let b1 = uuu11.getID()===1;
        // console.log("b1 nachname mit ID=2: "+b1.getNachnameU)

        //module.exports= uuu11;
        //export default uuu11.getMa_NummerU();
        //export default uuu11;
        //module.exports={uuu11}
        //if(module) module.exports = {uuu11}; // On node.js, use exports
        // else if(window) window.foo = uuu11; // In browser, use window
        // else console.error('Unknown environment');
        // man könnte den user in der URL anzeigen, und diesen auch von dort wieder nehmen...

        /*
        var query = new URLSearchParams();
        query.append("KEY", "VALUE);
        location.href = "http://site.com/page?" + query.toString();
        */
        res.redirect('/api/v1/inHome/:'+uuu11.getMa_NummerU()+"*"+uuu11.getPasswortU());//
        //res.redirect('/api/v1/inHome/:'+uuu11.getID());//
        //res.redirect('/api/v1/inHome/:'+uuu11);
        /*
        res.render('pages/login',{
            maNummerLServer : "MA_Nummer gefunden :)",
            passwortLServer : "Passwort richtig :)",
            xClicker: clicker()
        });
         */
    }
    //funktioniert
    //res.redirect('/api/inHome');
});



/*
  router.post('/l', async(req, res)=>{
    //werIstAngemeldet12= req.body.werIstAngemeldetH;
    maNummerL = req.body.maNummerLEingabe;
    //maNummerL = "haaannnnssoooo"
    console.log("maaaaNummerL: "+maNummerL)
    passwortL = req.body.passwortLEingabe;
    console.log("paaaaasswortL: "+passwortL)
    console.log("check- Ausgabe: "+ await check(maNummerL,passwortL));
    let isAuthentifiziert = await check(maNummerL,passwortL);
    console.log("isAuthentifiziert: "+isAuthentifiziert);
    if(isAuthentifiziert===true){
        res.redirect('/api/inHome');
    }else{
        res.render('pages/login',{
            maNummerLServer : maNummerL,
            passwortLServer : passwortL,
            xClicker: clicker()
        });
    }
    //funktioniert
    //res.redirect('/api/inHome');
  });
  */

async function sucheInDBmaNummerPasswort(maNummer,passwort){
    console.log('bin sucheInDBmaNummerPasswort-Funktion, habe bekommen: '+maNummer+', '+passwort);

    let conn;
    try {
        counterDB = counterDB + 1;
        console.log("counterDBMaNummerPasswort: "+counterDB);
        conn = await dbPool.getConnection();
        //console.log("conn: "+conn);//[object object]
        const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+` AND Passwort_User = '`+passwort+`';`);
        //console.log("rows: "+rows);
        const jsonS = JSON.stringify(rows);
        console.log("sucheInDBmaNummerPasswort-Funktion-jsonS: "+jsonS)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.send(jsonS);
        return jsonS;
    } catch (e) {
        console.log("DB-Error, irgendwas ist passiert, weil connection limit auf 8??? max 150??? ")
    }
}

//todo getconnection problem!!!
let counterDB = 0;
async function sucheInDBmaNummer(maNummer){
    console.log('bin sucheInDBmaNummer-Funktion, habe bekommen: '+maNummer);

    let conn;
    try {
        counterDB = counterDB + 1;
        console.log("counterDB: "+counterDB);
        conn = await dbPool.getConnection();
        console.log("conn: "+conn);//[object object]
        const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
        console.log("rows: "+rows);
        const jsonS = JSON.stringify(rows);
        console.log("sucheInDBmaNummer-Funktion-jsonS: "+jsonS)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.send(jsonS);
        return jsonS;
    } catch (e) {
        console.log("DB-Error, irgendwas ist passiert, weil connection limit auf 8??? max 150??? ")
    }
}

export async function erstelleUser(maNummer, passwortL){
    console.log("Bin erstelle User, habe bekommen: "+maNummer+", "+passwortL)
    let ausgabeDB = "";
    ausgabeDB = await sucheInDBmaNummerPasswort(maNummer, passwortL);
    //User.id1=0;
    let u1 = new User();
    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*");
    //console.log(u1.Id)
    //console.log(u1.id1)
    console.log(u1.getID());
    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*");
    u1.setMa_NummerU(splitDB_DBObj(ausgabeDB).MA_Nummer);
    u1.setVornameU(splitDB_DBObj(ausgabeDB).Vorname);
    u1.setNachnameU(splitDB_DBObj(ausgabeDB).Nachname);
    u1.setPasswortU(splitDB_DBObj(ausgabeDB).Passwort_User);
    u1.setIstChefU(splitDB_DBObj(ausgabeDB).IstChef);

    console.log("U1--MaNummer:   "+ u1.getMa_NummerU())
    console.log("U1--Vorname:   "+ u1.getVornameU())
    console.log("U1--Nachname:   "+ u1.getNachnameU())
    console.log("U1--Passwort:   "+ u1.getPasswortU())
    console.log("U1--istChef:   "+ u1.getIstChefU())
    console.log("u1--"+u1)
    return u1;
}

//todo wenn ma_nummer zweimal vorkommt???? und getconnection-problem!!!!
async function checkPasswort(maNummer,passwort){
    console.log("bin checkPasswort-Funktion, habe bekommen: "+maNummer+', '+passwort);
    let isPasswort = false;
    let ausgabeDB = "";
    ausgabeDB = await sucheInDBmaNummerPasswort(maNummer, passwort);//das geht nicht
    console.log("ausgabeDB: Wenn Mehrmals???????: "+ausgabeDB)
    if(ausgabeDB==='[]'||ausgabeDB===undefined){//wenn manummer mehrmals????
        console.log("ausgabeDB ist leeeeer!!!! sowas existiert nicht in der DB!!");
        console.log("Diese Passwort ist falsch!!!");
        isPasswort= false;
    }else{
        console.log('AusgabeDB ist voll, hat was gefunden :)');
        splitDB_DBObj(ausgabeDB);
        /// console.log(splitDB_DBObj(ausgabeDB))
        //let u1 = new User("x","x","x","x","x");
        /*
        let u1 = new User();
        u1.setMa_NummerU(splitDB_DBObj(ausgabeDB).MA_Nummer);
        u1.setVornameU(splitDB_DBObj(ausgabeDB).Vorname);
        u1.setNachnameU(splitDB_DBObj(ausgabeDB).Nachname);
        u1.setPasswortU(splitDB_DBObj(ausgabeDB).Passwort_User);
        u1.setIstChefU(splitDB_DBObj(ausgabeDB).IstChef);
        console.log("U1-MaNummer:   "+ u1.getMa_NummerU())
        console.log("U1-Vorname:   "+ u1.getVornameU())
        console.log("U1-Nachname:   "+ u1.getNachnameU())
        console.log("U1-Passwort:   "+ u1.getPasswortU())
        console.log("U1-istChef:   "+ u1.getIstChefU())
        //console.log("oo2: "+splitDB_DBObj(ausgabeDB).MA_Nummer)
         */
        isPasswort = true;
    }
    return isPasswort;
}

async function checkMaNummer(maNummer){
    console.log("bin checkMaNummer-Funktion, habe bekommen: "+maNummer);
    let isMaNummer = false;
    let ausgabeDB = "";
    ausgabeDB = await sucheInDBmaNummer(maNummer);//das geht nicht
    console.log("ausgabeDB: Wenn Mehrmals???????: "+ausgabeDB)
    if(ausgabeDB==='[]'||ausgabeDB===undefined){//wenn manummer mehrmals????
        console.log("ausgabeDB ist leeeeer!!!! sowas existiert nicht in der DB!!");
        console.log("Diese MitarbeiterNummer gibt es nicht in der Datenbank!!!");
        isMaNummer= false;
    }else{
        console.log('AusgabeDB ist voll, hat was gefunden :)');
        splitDB_DBObj(ausgabeDB);
        /// console.log(splitDB_DBObj(ausgabeDB))
        //let u1 = new User("x","x","x","x","x");
        /*
        let u1 = new User();
        u1.setMa_NummerU(splitDB_DBObj(ausgabeDB).MA_Nummer);
        u1.setVornameU(splitDB_DBObj(ausgabeDB).Vorname);
        u1.setNachnameU(splitDB_DBObj(ausgabeDB).Nachname);
        u1.setPasswortU(splitDB_DBObj(ausgabeDB).Passwort_User);
        u1.setIstChefU(splitDB_DBObj(ausgabeDB).IstChef);
        console.log("U1-MaNummer:   "+ u1.getMa_NummerU())
        console.log("U1-Vorname:   "+ u1.getVornameU())
        console.log("U1-Nachname:   "+ u1.getNachnameU())
        console.log("U1-Passwort:   "+ u1.getPasswortU())
        console.log("U1-istChef:   "+ u1.getIstChefU())
        //console.log("oo2: "+splitDB_DBObj(ausgabeDB).MA_Nummer)
        */
        isMaNummer = true;
    }
    /*
     if(maNummer==="70220" && passwort==="q"){
         isMaNummerPasswort = true;
         console.log(isMaNummerPasswort)
     }else{
         isMaNummerPasswort= false;
     }
     */
    ausgabeDB = "";
    return isMaNummer;

}

function splitDB_DBObj(ausgabeDBZumSplitten){
    //let ausgabeDBZumSplitten = ausgabeDBZumSplitten;
    //console.log("ausgabeDBZumSplitten: "+ausgabeDBZumSplitten);
    //let text = "[{"ID_User":8,"MA_Nummer":"70999","Vorname":"urs","Nachname":"meier","Passwort_User":"12","IstChef":"keinChef"}]";
    //const myArray = [];
    let myArray = ausgabeDBZumSplitten.split("[");
    // console.log("arr: "+myArray[1]);
    const myArray1 = myArray[1].split("]");
    //todo ev gibt es eine funktion, die beide eckigen klammmern entfernt
    // console.log("ar2: "+myArray1[0]);

    //wenn mehrere manummern vorhanden
    const myArray3 = myArray1[0].split(",{");
    // console.log("ar3: "+myArray3[0])
    //if()

    const dbObj = JSON.parse(myArray3[0]);

    //console.log("dbObj in splitDB_DBObj: "+dbObj)
    //console.log(dbObj.MA_Nummer);

    return dbObj;
    //todo: setter und getter, ev eigene Klasse
}

export default router;

/*
 router.post('/l', async(req,res) =>{//achtung, es muss hier async sein sonst geht nivcht
   let conn;
   try{
       conn = await dbPool.getConnection();
       const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+"70999"+`;`);
       //console.log(rows);
       const jsonS = JSON.stringify(rows);
       console.log("jsonSss: "+jsonS)
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end(jsonS);
   }
   catch(e){
   }
 })
*/
