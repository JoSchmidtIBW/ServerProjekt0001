import express from "express";

const router = express.Router();

//middleware






// http://localhost:7080/api/registrieren
router.get("/", (req, res) => { // pfad, der alles entgegennimmt
    console.log("Register-Button wurde geklickzt")
    //console.log(req)
    //header
    //res.send("<h1>Hallo loginRoute.mjs login</h1>");
    res.render('registrieren'); //login.ejs
    //end
});



export default router;