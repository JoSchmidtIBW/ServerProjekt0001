

import express from "express";

import dbPool from './lib/db.mjs';



//const express = require('express')
const app = express()
const port = 7080






app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/d', async(req, res) => {
    //res.send("Hello from Hxxxxxxxxxxxxxxomepage.");
    console.log('Halloooo from /d');
    let conn;
    try {
        //conn = await pool.getConnection();
        conn = await dbPool.getConnection();
        console.log(conn + "**************************"); //komt im console von vs code, aber nicht in konsole browser
        const rows = await conn.query(`SELECT * FROM userMubeaX WHERE ID_User=1;`);
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        console.log(jsonS)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        res.send(jsonS);
        console.log("jjjjjj")
        //res.send("Hello from Hxxxxxxxttttttttttxxxxxxxomepage.");
    } catch (e) {}
});
console.log("Hello world3");
console.log("Hello world4");
console.log("Hello world1");
console.log("Hello world");
console.log("Hello Kitty");

export default function sum(a, b) {
    return a + b;
}
console.log("sum: "+sum(4,3))

a_Plus_b(1,2);
function a_Plus_b(a,b){
    let result = a+b;
    console.log("a+b= "+ result);
}

console.log("Hello world");

console.log("Hello Kitty");
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`)
})
