import express from "express";


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

router.get('/', function(req, res){
    console.log("bin im inHomeRoute.mjs")
    // Get an array of flash messages by passing the key to req.flash()
    res.render('pages/inHome', {
        werIstAngemeldetH:"kk"
    });
});
//messages: req.flash('success')


export default router;