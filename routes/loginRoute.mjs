import express from "express";

const router = express.Router();

//middleware






// http://localhost:7080/api/login/l
// --> ohne /l, --> nur /

router.get("/l", (req, res) => { // pfad, der alles entgegennimmt
    //console.log(req)
    //header
    //res.send("<h1>Hallo loginRoute.mjs login</h1>");
    res.render('login'); //login.ejs
    //end
});



export default router;