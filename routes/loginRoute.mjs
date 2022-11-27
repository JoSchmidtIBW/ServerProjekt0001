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

let computerSciencePortal = "GeeksforGeeks";



// http://localhost:7080/api/login/l
// --> ohne /l, --> nur /

router.get("/l", (req, res) => { // pfad, der alles entgegennimmt
    async function loadJoke() {
        try { //hier wäre fehler status 400
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            // console.log(response);
            if (response.ok) {
                const data = await response.json();
                //console.log(data);
                console.log("**************");
                console.log(data.value);
                console.log("**************");
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

    let witz2 = loadJoke();
    //console.log("------------ "+witz2)
    let result = witz2.then(function(result) {
        console.log(result + " Some User token") // "Some User token"
        return result;
    })
    console.log("------------ "+result)

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

    //var myVar = " -->(ich bin eine Variable)<-- ";
    //let myVar = witz2;
    let myVar = result;
    console.log(myVar)
    //var myVar = result;
    res.render('login',{ myVar : myVar }); //login.ejs


   //res.render('testPage', { myVar : myVar });

    //end
});



export default router;