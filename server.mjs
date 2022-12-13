

import express from "express";
import CryptoJS from 'crypto-js';

import dbPool from './lib/db.mjs';

import loginRoutes from './routes/loginRoute.mjs'
import registryRoutes from './routes/registryRoute.mjs'
import inHomeRoutes from './routes/inHomeRoute.mjs'

//const express = require('express')
const app = express()
const port = 7080

//---------------------------------------------------------------------------------
//import CryptoJS from 'crypto-js';
let cipherPasswortL = CryptoJS.AES.encrypt("1", 'secret key 123').toString();////macht immer neuen hash, möchte aber gleichen
console.log("cipherPasswortL: "+cipherPasswortL)

// Decrypt
let bytes  = CryptoJS.AES.decrypt("U2FsdGVkX1+nJNyUfcMjzGmoApYQeogYR3oBzoCB19Q=", 'secret key 123');
console.log("bytespasswortL: "+bytes)
let originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log("originalTextpasswortL: "+originalText); // 'my message'
//---------------------------------------------------------------------------------
/*
console.log("*******************")
let hash = CryptoJS.SHA256("1");
console.log("hash: "+hash)
let originalText1 = hash.toString(CryptoJS.enc.Base64)
console.log("originalTextpasswortL: "+originalText1);

let encrypted = CryptoJS.AES.encrypt("1", "Secret Passphrase");
console.log("encrypted: "+encrypted)
//var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
console.log("decrypted: "+decrypted)

let encrypted1 = CryptoJS.DES.encrypt("1", "Secret Passphrase");
console.log("encrypted1: "+encrypted1)
let decrypted1 = CryptoJS.DES.decrypt(encrypted1, "Secret Passphrase");
console.log("decrypted1: "+decrypted1)

 */
//-----------------------------------------------------//
/*
console.log("************************************************")//
let data="1234";//Message to Encrypt
let iv  = CryptoJS.enc.Base64.parse("");//giving empty initialization vector
//var key=CryptoJS.SHA256("Message");//hashing the key using SHA256
let key=CryptoJS.SHA256("mySecretKey1");//hashing the key using SHA256
var encryptedString=encryptData(data,iv,key);//muss var sein
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
*/

//**************************************************************

//setup
app.set("case sensitive routing", false); //um url gross oder klein schreiben link /users   /Users
app.set("view engine", "ejs");

//middleware
//app.use(express.static('public')); //der public ordner wird als pfad genommen
app.use("/public", express.static('public'))
//app.use(express.static("public"));
//app.use('/public', express.static('public'));
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));
//zb servstatic zb bilder oder localhost:1337/style.css
// oder localhost:1337/express/index.js
// oder app.use(express.static('node_modules'));//clientseitiger code, desshalb gitignore
//localhost:1337/express/index.js
//lädt middleware beliebigen pfad


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// all routes in here starting with /login
app.use('/api/v1/login', loginRoutes);
// all routes in here starting with /registrieren
app.use('/api/v1/registrieren', registryRoutes);
app.use('/api/v1/inHome', inHomeRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

function click(){
    console.log('Buttooooooon clicked')
}


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


console.log("ich bin server.mjs");//


export default function sum(a, b) {
    return a + b;
}
console.log("sum: "+sum(4,3))

a_Plus_b(1,2);
function a_Plus_b(a,b){
    let result = a+b;
    console.log("a+b= "+ result);
}

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`)
})
