import { checkPrime } from "crypto";
import express from "express";
import { json } from "stream/consumers";
import dbPool from "../lib/db.mjs";

const router = express.Router();

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

router.get("/l", (req, res) => {
    //maNummerL = req.body.maNummerL;
    //console.log("maNummerL: "+maNummerL)
    // passwortL = req.body.passwortL;
    // console.log("passwortL: "+passwortL)

    res.render('pages/login', {
        maNummerLServer : maNummerLEingabe,
        passwortLServer : passwortLEingabe,
        xClicker: clicker()
    });
});

/*
router.post('/l', function(req, res){
    //werIstAngemeldet12= req.body.werIstAngemeldetH;
    maNummerL = req.body.maNummerLEingabe;
    //maNummerL = "haaannnnssoooo"
    console.log("maaaaNummerL: "+maNummerL)
    passwortL = req.body.passwortLEingabe;
    console.log("paaaaasswortL: "+passwortL)


    console.log("check- Ausgabe: "+ check(maNummerL,passwortL));

    let isAuthentifiziert = check(maNummerL,passwortL);
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

router.post('/l', async(req, res)=>{
    //werIstAngemeldet12= req.body.werIstAngemeldetH;
    maNummerL = req.body.maNummerLEingabe;
    //maNummerL = "haaannnnssoooo"
    console.log("maaaaNummerL: "+maNummerL)
    passwortL = req.body.passwortLEingabe;
    console.log("paaaaasswortL: "+passwortL)


    console.log("check- Ausgabe: "+ check(maNummerL,passwortL));

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

async function sucheMANummerInDB(maNummer){
    console.log('bin sucheMANummerInDB');
    let conn;
    try {
        //conn = await pool.getConnection();
        conn = await dbPool.getConnection();
        //console.log(conn + "**************************"); //komt im console von vs code, aber nicht in konsole browser
        const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
        //console.log(rows);
        const jsonS = JSON.stringify(rows);
        console.log("jsonS: "+jsonS)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.send(jsonS);
        return jsonS;
        //console.log("jjjjjj")
        //res.send("Hello from Hxxxxxxxttttttttttxxxxxxxomepage.");
    } catch (e) {}
}

/*
async function showData(maNummer){
  //console.log(await getData())
  let conn;
  conn = await dbPool.getConnection();
  console.log(conn + "**************************"); //komt im console von vs code, aber nicht in konsole browser
  const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
  console.log(rows);
  const jsonS = JSON.stringify(rows);
  console.log(jsonS)
}
*/
/*
async function asyncAwait(maNummer, res) {
    var promise1;
    dbPool.getConnection((err) => {
        promise1 = new Promise((resolve, reject) => {
            console.log('Mysql: Connected');
            resolve(response.write(uc.upperCase('Connected\n')));
        });
        promise1
            .then(() => {
             //Implement the logic here
             const rows =  conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
        //console.log(rows);
        const jsonS = JSON.stringify(rows);
        console.log("jsonSSSS: "+jsonS) //release to pool
        res.send(jsonS)
            })
            .catch(error => {
                console.log(error)
            });
    })
}
*/

/*
async function x(maNummer){

    let result1 =dbPool.getConnection()
    .then(conn => {
      console.log("connected ! connection id is " + conn.threadId);
      conn.release();
      const rows =  conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
        //console.log(rows);
        const jsonS = JSON.stringify(rows);
        console.log("jsonSSSS: "+jsonS) //release to pool
    })
    .catch(err => {
      console.log("not connected due to error: " + err);
    });
    console.log("res7ult1: "+result1)
    return result1;
}

*/

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

async function check(maNummer, passwort){
    let isMaNummerPasswort = false;
    // console.log("xxx----------: "+x(maNummer))

    //console.log("aaaaaaaaaaaa: "+asyncAwait());
    //let aaa = await asyncAwait(maNummer);
    /*
        async function sucheMANummerInDB(maNummer) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            return 10;
          }

          function f() {
            // shows 10 after 1 second
            sucheMANummerInDB(maNummer).then(result);
          }

          f();
          console.log("f: "+f())

          async function f() {
            try {
              let response = await fetch('http://no-such-url');
              let conn = await dbPool.getConnection();
            //console.log(conn + "**************************"); //komt im console von vs code, aber nicht in konsole browser
            const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
            //console.log(rows);
            const jsonS = JSON.stringify(rows);
            console.log("jsonS: "+jsonS)
            //res.writeHead(200, { 'Content-Type': 'text/html' });
            //res.send(jsonS);
            return jsonS;
            } catch(err) {
              console.log(err); // TypeError: failed to fetch
            }
          }

          f();

         let result1 =dbPool.getConnection()
        .then(conn => {
          console.log("connected ! connection id is " + conn.threadId);
          conn.release();
          const rows =  conn.query(`SELECT * FROM userVerkaufMubea WHERE MA_Nummer=`+maNummer+`;`);
            //console.log(rows);
            const jsonS = JSON.stringify(rows);
            console.log("jsonSSSS: "+jsonS) //release to pool
        })
        .catch(err => {
          console.log("not connected due to error: " + err);
        });
        console.log("res7ult1: "+result1)

          //showData(maNummer)

        //let dbAusgabeMaNummer = await sucheMANummerInDB(maNummer);
        let result =  sucheMANummerInDB(maNummer);//das geht nicht
        console.log("result: "+result)


        let dbAusgabeMaNummer = async() => {
            let result = await sucheMANummerInDB(maNummer);
            console.log("result: "+result)
            return result ;
        }
        console.log("dbAusgabeMaNummer: "+dbAusgabeMaNummer)

    /*
        function resolveAfter2Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 2000);
            });
          }

          async function asyncCall() {
            console.log('calling');
            const result = await resolveAfter2Seconds();
            console.log(result);
            // expected output: "resolved"
          }

          asyncCall();
    */

    //let result = await functionThatReturnsPromiseA();
    //result = result + 1;
    //  async function doSomething() {
//        let result = await functionThatReturnsPromiseA();
//        return result + 1;
//    }

    // promiseB.then(function(result) {
    // here you can use the result of promiseB
    // });

    let ausgabeDB = await sucheMANummerInDB(maNummer);//das geht nicht
    console.log("ausgabeDB: "+ausgabeDB)
    splitDB(ausgabeDB);
//todo when manummer nicht gibt in db

    //let u1 = new User("x","x","x","x","x");
    let u1 = new User();
    u1.setMa_NummerU(splitDB(ausgabeDB).MA_Nummer);

    console.log("oooooh:   "+ u1.getMa_NummerU())

    console.log("oo2: "+splitDB(ausgabeDB).MA_Nummer)

    //console.log(dbObj.MA_Nummer);

    if(maNummer==="70220" && passwort==="q"){
        isMaNummerPasswort = true;
        console.log(isMaNummerPasswort)
    }else{
        isMaNummerPasswort= false;
        console.log(isMaNummerPasswort)
    }
    return isMaNummerPasswort;
}

function splitDB(ausgabeDBZumSplitten){
    //let ausgabeDBZumSplitten = ausgabeDBZumSplitten;
    console.log("ausgabeDBZumSplitten: "+ausgabeDBZumSplitten);
    //let text = "[{"ID_User":8,"MA_Nummer":"70999","Vorname":"urs","Nachname":"meier","Passwort_User":"12","IstChef":"keinChef"}]";
    const myArray = ausgabeDBZumSplitten.split("[");
    console.log("arr: "+myArray[1]);
    const myArray1 = myArray[1].split("]");
    //todo ev gibt es eine funktion, die beide eckigen klammmern entfernt
    console.log("ar2"+myArray1[0]);
    const dbObj = JSON.parse(myArray1[0]);

    console.log(dbObj.MA_Nummer);

    return dbObj;
    //todo: setter und getter, ev eigene Klasse
}


/*
let user1 = new User('Jane Doe');
console.log(user1); // Jane Doe

user1.setName('Jane Smith');
console.log(user1.getName());
*/
export default router;
