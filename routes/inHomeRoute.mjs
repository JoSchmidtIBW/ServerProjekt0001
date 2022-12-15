import express from "express";
import User from "../Controllers/UserInLoggt.mjs";
import {erstelleUser} from "./loginRoute.mjs";
import uuu11 from './loginRoute.mjs'

import dbPool from "../lib/db.mjs";

const router = express.Router();

/*
let werIstAngemeldet = "jjj";
router.get('/', (req,res)=>{
    let a = req.body.werIstAngemeldetH;
    res.render('pages/inHome',{
        //werIstAngemeldetH: "JIIJI"
        werIstAngemeldetH: a
    });
})
*/
/*
router.get('/',(req,res)=>{
    res.render('pages/inHome', {
        //werIstAngemeldetH : "ssssokokmo"
        werIstAngemeldetH
    });
})
*/
let maNummerIH = "";
router.get('/:maNummer', async(req, res)=>{

    console.log("bin im inHomeRoute.mjs - GET")
    console.log("req: "+req.query)
    console.log("pathname: "+req.path)
    //const myArr = req.path.split(':');
    //console.log("myArr[1]: "+myArr[1]);
    //let user1 = new User(myArr[1])
    const myArr = req.path.split(':');
    let gesplittetVonURLdenUserTeil = myArr[1];
    console.log("gesplittetVonURLdenUserTeil: "+gesplittetVonURLdenUserTeil)

    //let user = Object.getID===gesplittetVonURLdenUserTeil;
    //console.log("user: "+user)
    //console.log("angemeldeterUser: "+user.getNachnameU())
    //console.log("iunhewiuniuejniunoiun: "+Object.getID())
    let user1 = User.getID===1;
    //console.log("user1: "+user1)
    console.log("angemeldeterUser: "+user1.getNachnameU)



    //let angemeldeterUser = Object.getID===gesplittetVonURLdenUserTeil;
    //console.log("angemeldeterUser: "+angemeldeterUser.getNachnameU())

    /*
    const myArr = req.path.split(':');
    console.log("myArr[1]: "+myArr[1]);
    let gesplittetVonURLdenUserTeil = myArr[1];
    */
    console.log("gesplittetVonURLdenUserTeiiiil: "+gesplittetVonURLdenUserTeil)
    const myArr1 = gesplittetVonURLdenUserTeil.split('*');
    console.log(" gesplittet myArr1[0]: "+myArr1[0]+" gesplittet myArr1[1]: "+myArr1[1]);

    let user = await erstelleUser(myArr1[0],myArr1[1]);
    console.log("a: "+user.getMa_NummerU());
    console.log("a: "+user.getNachnameU());
    maNummerIH = user.getMa_NummerU();
    console.log("maNummerIH-GET: "+maNummerIH)
    //*/

    //let user1 = new User().getMa_NummerU();
    //let user1 = new User();
    //let user1 = uuu11;//
    //  console.log("user1: "+user1.getMa_NummerU())
    // // Get an array of flash messages by passing the key to req.flash()
    res.render('pages/inHome', {
        //werIstAngemeldetH:user1.getMa_NummerU()
        werIstAngemeldetH:user.getVornameU()+" "+user.getNachnameU(),
        kundeIHServer:  "hoi kunde",
        MaNummerServer: user.getMa_NummerU()
    });
});

//console.log("maNummerIH: "+maNummerIH)

//router.post(`/:+${maNummerIH}`, async(req, res)=>{
router.post('/:maNummer', async(req, res)=>{
    console.log("**********************************************")
    console.log("bin im inHomeRoute.mjs - POST")

    console.log("maNummerIH - Post: "+maNummerIH)

    console.log("req: "+req.query)
    console.log("pathname: "+req.path)

    let kundeIHServerEingabe = req.body.kundeIHEingabe;
    console.log("kundeIHServerEingabe: "+kundeIHServerEingabe)

    const myArr = req.path.split(':');
    console.log("myArr[1]: "+myArr[1]);
    let gesplittetVonURLdenUserTeil = myArr[1];
    console.log("gesplittetVonURLdenUserTeil: "+gesplittetVonURLdenUserTeil)
    const myArr1 = gesplittetVonURLdenUserTeil.split('*');
    console.log(" gesplittet myArr1[0]: "+myArr1[0]+" gesplittet myArr1[1]: "+myArr1[1]);

    let user = await erstelleUser(myArr1[0],myArr1[1]);
    console.log("b: "+user.getMa_NummerU());
    console.log("b: "+user.getNachnameU());

    schreibeKundeInDB(user,kundeIHServerEingabe);
    //let kundeIHServerEingabe = req.body.kundeIHServer;
    //console.log("kundeIHServerEingabe: "+kundeIHServerEingabe)

    res.render('pages/inHome', {
        werIstAngemeldetH: user.getVornameU()+" "+user.getNachnameU(),
        kundeIHServer:  kundeIHServerEingabe,
        MaNummerServer: maNummerIH
    });

    //res.render("<h1>Hellllllo</h1>");
});


async function schreibeKundeInDB(user, kundeIHServerEingabe){
    console.log("bin schreibeKundeinDB");
    console.log("uuuusser-nachname: "+user.getNachnameU());
    console.log("kundeIHServerEingabe schreibeKundeInDB: "+kundeIHServerEingabe);

    //let jetzt = new Date()
    //let zeit = jetzt.getTime()
    //let aktuellesDatum = Date.now;
    //console.log("aktuellesDatum: "+aktuellesDatum())

//let Objektname = new Date(Jahr, Monat, Tag, Stunden, Minuten, Sekunden);
//console.log("Objektname: "+Objektname)

    //console.log("jetzt: "+jetzt)
    //console.log("zeit: "+zeit)

    let today = new Date();
    let tag = today.getDate();
    let monat = today.getMonth() + 1;
    let jahr = today.getFullYear();

    let heutigesDatum = tag + "." + monat + "." + jahr;
    console.log("heutigesDatum: "+heutigesDatum);

    //let time = new Date();
    let stunden = today.getHours();
    let minuten = today.getMinutes();
    let sekunden = today.getSeconds();

    let zeitJetzt = stunden + ":" + minuten;// + ":" + sekunden;
    console.log("zeitJetzt: "+zeitJetzt);


    let conn1;
    try {
        //conn = await pool.getConnection();
        conn1 = await dbPool.getConnection();
        console.log(conn1 + "**************************"); //komt im console von vs code, aber nicht in konsole browser
        // todo prepared statment wegen sql injection
        const res = await conn1.query("INSERT INTO versandlisteMubea (VnameE, NnameE, DatumE, UhrzeitE, ID_KV) VALUES ('"+user.getVornameU()+"','"+user.getNachnameU()+"','"+heutigesDatum+"','"+zeitJetzt+"','"+kundeIHServerEingabe+"');");
        console.log(res);

    } catch (e) {}

}

export default router;
