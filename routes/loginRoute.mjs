import express from "express";

import dbPool from "../lib/db.mjs";
import https from 'https';
import fetch from "node-fetch";
const router = express.Router();

//middleware
/*
//app.get('/d', async(req, res) => {
app.get('/d', async(req, res) => {
    //res.send("Hello from Hxxxxxxxxxxxxxxomepage.");
    console.log('Halloooo from /d');
    let conn;
    try {
        //conn = await pool.getConnection();
        conn = await dbPool.getConnection();
        console.log(conn + "**************************"); //komt im console von vs code, aber nicht in konsole browser
        const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE ID_User=1;`);
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        console.log(jsonS)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        res.send(jsonS);
        console.log("jjjjjj")
        //res.send("Hello from Hxxxxxxxttttttttttxxxxxxxomepage.");
    } catch (e) {}
});
*/
/*
async function loadJoke() {
    try { //hier wäre fehler status 400
        const response = await fetch('https://api.chucknorris.io/jokes/random');
       // console.log(response);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            console.log(data.value);
            //document.getElementById('j').innerText = data.value;
        } else {
            //console.error(await response.text);
            //document.getElementById('j').innerText = "Kein Internet!!!";
        }
    } catch (e) {
        //console.error(e);
        //document.getElementById('j').innerText = "Kein Internet!!!";
    }
}

async function witzfunction() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    return data;
}
let witz = witzfunction();

let witz2 = loadJoke();
let result = witz2.then(function(result) {
    console.log(result + "Some User token") // "Some User token"
    return result;
})
*/

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

router.get("/l", (req, res) => {

    res.render('pages/login', {
        myVar : myVar,
        spitzname : spitzname,
        spitzname2 : spitzname2,
        xClicker: clicker()
    });
});

router.post("/l", (req, res) => {

    spitzname = req.body.spitzname;
    spitzname2 = req.body.spitzname2;
    console.log("spitzname: "+spitzname);

    res.render('pages/login', {
        myVar : myVar,
        spitzname : spitzname,
        spitzname2 : spitzname2,
        xClicker: clicker()
    });
});

let computerSciencePortal = "GeeksforGeeks";

//-----------------
//var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }));
//----------------
//todo zb button "weiter" erst drücken, wenn spitzname 1 und spitzname 2 eingegeben, jedoch verliert der erste dann den wert

/*
let mA_Nummer = "";
let vorname = "";
let nachname = "";
let passwort_User = "";
let istChef = "";
router.post('/l', async function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    spitzname = req.body.spitzname;
    spitzname2 = req.body.spitzname2;
    console.log("spitzname: "+spitzname);

    mA_Nummer = req.body.MA_Nummer;
    vorname = req.body.Vorname;
    nachname = req.body.Nachname;
    passwort_User = req.body.Passwort_User;
    istChef = req.body.IstChef;

    if(mA_Nummer.length===0||vorname.length===0||nachname.length===0||passwort_User.length===0||istChef.length===0){
        res.render('login', {
            myVar : name,
            spitzname : spitzname,
            spitzname2 : spitzname2,
            MA_Nummer: mA_Nummer,
            Vorname: vorname,
            Nachname: nachname,
            Passwort_User: passwort_User,
            IstChef: istChef,
            xClicker: clicker()
        });
    }else{
        let conn1;
        try {
            //conn = await pool.getConnection();
            conn1 = await dbPool.getConnection();
            console.log(conn1 + "**************************"); //komt im console von vs code, aber nicht in konsole browser
            // todo prepared statment wegen sql injection
            const res = await conn1.query("INSERT INTO userVerkaufMubea (MA_Nummer, Vorname, Nachname, Passwort_User, IstChef) VALUES ('"+mA_Nummer+"','"+vorname+"','"+nachname+"','"+passwort_User+"','"+istChef+"');");
            console.log(res);

        } catch (e) {}

        res.render('login', {
            myVar : name,
            spitzname : spitzname,
            spitzname2 : spitzname2,
            MA_Nummer: mA_Nummer,
            Vorname: vorname,
            Nachname: nachname,
            Passwort_User: passwort_User,
            IstChef: istChef,
            xClicker: clicker()
        });
    }





});
*/
/*
router.post('/d', async(req, res) => {
    //res.send("Hello from Hxxxxxxxxxxxxxxomepage.");
    console.log('Halloooo from /d');
    let conn;
    try {
        //conn = await pool.getConnection();
        conn = await dbPool.getConnection();
        console.log(conn + "**************************"); //komt im console von vs code, aber nicht in konsole browser
        const rows = await conn.query(`SELECT * FROM userVerkaufMubea WHERE ID_User=1;`);
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        console.log(jsonS)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        res.send(jsonS);
        console.log("jjjjjj")
        //res.send("Hello from Hxxxxxxxttttttttttxxxxxxxomepage.");
    } catch (e) {}
});
*/
console.log("spitznameeee: "+spitzname);

export default router;

/*

/*
function myFunc(){
    console.log("Bin myFunc()... gebe was aus");
}

async function loadJoke1() {
    try { //hier wäre fehler status 400
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            console.log("---> "+data.value);
            //document.getElementById('j').innerText = data.value;
        } else {
            console.error(await response.text);
            //document.getElementById('j').innerText = "Kein Internet!!!";
        }
    } catch (e) {
        console.error(e);
        //document.getElementById('j').innerText = "Kein Internet!!!";
    }
}

async function loadJoke() {
    try { //hier wäre fehler status 400
        const response = await fetch('https://api.chucknorris.io/jokes/random');
         console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log("**************");
            console.log(data.value);

            console.log("**************");
            return data.value;
            //document.getElementById('j').innerText = data.value;
        } else {
            console.error(await response.text);
            //document.getElementById('j').innerText = "Kein Internet!!!";
        }
    } catch (e) {
        console.error(e);
        //document.getElementById('j').innerText = "Kein Internet!!!";
    }
}

// http://localhost:7080/api/login/l
// --> ohne /l, --> nur /

router.get("/l", (req, res) => { // pfad, der alles entgegennimmt
/*
    async function my_async_fn() {
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response); // Logs the response
        return response;
    }

    console.log("my_async_FN "+my_async_fn());
*/
/*
myFunc();
loadJoke1();

let witz2 = loadJoke();
*/
/*
const promise1 = Promise.resolve(loadJoke());

promise1.then((value) => {
console.log(value);
// expected output: 123
});
*/
/*
console.log("------*****------ "+witz2)
let result1 = witz2.then(function(result) {
    console.log(result + " Some User token") // "Some User token"
    return result;
})
console.log("------------ "+result1)

//console.log(witz2)
console.log("loginRoute.mjs: "+computerSciencePortal);
//console.log(req)
//header
//res.send("<h1>Hallo loginRoute.mjs login</h1>");
//res.send(computerSciencePortal);

/*
const url = "https://jsonmock.hackerrank.com/api/movies";
https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
    })
}).on('error', err => {
    console.log(err.message);
})
*/
//    https://stackoverflow.com/questions/34921875/unable-to-get-local-issuer-certificate-vscode

//var myVar = " -->(ich bin eine Variable)<-- ";
//let myVar = witz2;
/*
let myVar = "  hopp ";
//let myVar = result1;
console.log(myVar)
//var myVar = result;
res.render('login',{ myVar : myVar }); //login.ejs

//res.render('testPage', { myVar : myVar });

//end
});
*/

/*
<!--
<form action="/api/login/l" method="post">
        MA_Nummer: <input name="MA_Nummer" type="text" />
        Vorname: <input name="Vorname" type="text" />
        Nachname: <input name="Nachname" type="text" />
        Passwort_User: <input name="Passwort_User" type="text" />
        IstChef: <input name="IstChef" type="text" />
        <input type="submit" value="alles bestätigen" />
        <a>UserVerkaufMubea:   </a>
        <a id="lbAusgabeUserVerkaufMubea"><%= MA_Nummer %> , <%= Vorname %>, <%= Nachname %>, <%= Passwort_User %>, <%= IstChef %></a>
</form>
<br>
-->
*/

