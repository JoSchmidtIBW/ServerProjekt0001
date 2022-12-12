import express from "express";
import User from "../Controllers/UserInLoggt.mjs";
import {erstelleUser} from "./loginRoute.mjs";
import uuu11 from './loginRoute.mjs'

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

router.get('/:maNummer', async(req, res)=>{
    console.log("bin im inHomeRoute.mjs")
    console.log("req: "+req.query)
    console.log("pathname: "+req.path)
    const myArr = req.path.split(':');
    console.log("myArr[1]: "+myArr[1]);
    //let user1 = new User(myArr[1])

    let user = await erstelleUser(myArr[1]);//funktioniert :)
    console.log("a: "+user.getMa_NummerU());
    console.log("a: "+user.getNachnameU())
    //let user1 = new User().getMa_NummerU();
    //let user1 = new User();
    //let user1 = uuu11;//
  //  console.log("user1: "+user1.getMa_NummerU())
   // // Get an array of flash messages by passing the key to req.flash()
    res.render('pages/inHome', {
        //werIstAngemeldetH:user1.getMa_NummerU()
        werIstAngemeldetH:user.getVornameU()+" "+user.getNachnameU()//
    });
});
//messages: req.flash('success')


export default router;