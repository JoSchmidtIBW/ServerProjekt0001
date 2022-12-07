//todo Problem document.getElementbyId().innerTest.value…. es goht eifach ned, alles scho probiert.... wtf
// todo registrieren.css h1 macht nicht orange
//Todo das hier wird wahrscheinlich der controller clientseitig sein
// um von hier zb ein boolean an den server zu schicken, braucht es ein controller serverseitig
// ausser, mann mach im main.js ein type="module".... dann geht aber dieses hier nicht
/*
function btnMaNummerOK(){
    console.log("btnMaNummerOK wurde geklickt");

    //window.addEventListener('error', function(event) { ... })
    let inputMaNummer = document.getElementById('inputMaNummer').value;
    console.log(inputMaNummer + " jjjjjjjjjjjjjjjjjjjjjjjj")
    let lbAusgabeMaNummer = document.getElementById('lbAusgabeMaNummer');


    if(inputMaNummer.length===0){
        lbAusgabeMaNummer.style.backgroundColor = "red";
        lbAusgabeMaNummer.innerText = "Hallo Rot"
        inputMaNummer.innerText = "Es soll die Mitarbeiter- Nummer eingegeben werden!";
        isMaNummerEingabeRichtig = false;
        return isMaNummerEingabeRichtig;//
    }
    else if(inputMaNummer.length>=0){
        lbAusgabeMaNummer.style.backgroundColor = "green";
        lbAusgabeMaNummer.innerText = "Hallo grün"
        document.getElementById('inputMaNummer').value = 'voll';
        isMaNummerEingabeRichtig = true;
        return isMaNummerEingabeRichtig;
    }

    isMaNummerEingabeRichtig = false;
    return isMaNummerEingabeRichtig;

}




 */


let isMaNummerEingabeRichtig = false;

function btnMaNummerOK(){
    console.log("btnMaNummerOK wurde geklickt");

    //window.addEventListener('error', function(event) { ... })
    let inputMaNummer = document.getElementById('inputMaNummer').value;
    console.log(inputMaNummer + " jjjjjjjjjjjjjjjjjjjjjjjj")
    let lbAusgabeMaNummer = document.getElementById('lbAusgabeMaNummer');


    if(inputMaNummer.length===0){
        lbAusgabeMaNummer.style.backgroundColor = "red";
        lbAusgabeMaNummer.innerText = "Hallo Rot"
        inputMaNummer.innerText = "Es soll die Mitarbeiter- Nummer eingegeben werden!";
        isMaNummerEingabeRichtig = false;
        return isMaNummerEingabeRichtig;
    }
    else if(inputMaNummer.length>=0){
        lbAusgabeMaNummer.style.backgroundColor = "green";
        lbAusgabeMaNummer.innerText = "Hallo grün"
        document.getElementById('inputMaNummer').value = 'voll';
        isMaNummerEingabeRichtig = true;
        return isMaNummerEingabeRichtig;
    }

    isMaNummerEingabeRichtig = false;
    return isMaNummerEingabeRichtig;

}

const department = 'web dev';

const tasks = ['develop', 'design', 'test'];
//export default department;
// 👇️ named exports (same as code snippet above)
//export default {department, tasks};
//module.exports department;
//

//module.exports = isMaNummerEingabeRichtig;
//export isMaNummerEingabeRichtigL;

/*
document.addEventListener("DOMContentLoaded", function(event) {
});
*/

/*
try {
    function btnMa_NummerOK(){
        console.log("btnMa_NummerOK wurde geklickt");

        /*
        document.addEventListener("DOMContentLoaded", function(event) {
            //Do work
        });
        */

//document.addEventListener("DOMContentLoaded", function () {

/*
let inputMA_Nummer = document.getElementById('inputMA_Nummer');
let lbAusgabeMa_Nummer = document.getElementById('lbAusgabeMa_Nummer');
console.log(inputMA_Nummer[0].innerText.length);
console.log(inputMA_Nummer.textContent.length);
console.log(inputMA_Nummer);

if(inputMA_Nummer.innerText.length===0){
    console.log("inputMA_Nummer.innerText.length===0")
    lbAusgabeMa_Nummer.style.backgroundColor = "red";
    lbAusgabeMa_Nummer.innerText = "Hallo Rot"
}
else if(inputMA_Nummer.innerText.length>=0){
    lbAusgabeMa_Nummer.style.backgroundColor = "green";
    lbAusgabeMa_Nummer.innerText = "Hallo grün"
}
//});


}
}
catch (e) {

}

*/





/*
//try{
    function btnMaNummerOK2(){
        console.log("btnMaNummerOK wurde geklickt");

        //window.addEventListener('error', function(event) { ... })
        let inputMaNummer = document.getElementById('**MainContent_**inputMaNummer');
        let inputMaNummer1 = document.getElementById('inputMaNummer');
        let nameValue = document.getElementById("inputMaNummer").value;
        console.log(nameValue+" 66666666666666666666666");
        let lbAusgabeMaNummer = document.getElementById('lbAusgabeMaNummer');
        //console.log(inputMA_Nummer[0].innerText.length);
       // console.log(inputMaNummer.textContent.length);
        //console.log(inputMaNummer.innerText.length);
        //console.log(inputMaNummer.nodeValue);
       // console.log(inputMaNummer.textContent);
        //console.log(inputMaNummer.innerText);
       // console.log(inputMaNummer.nodeValue);
       // console.log(inputMaNummer[0].value); //if this is the first textbox in your page.
        //kein MA_Nummer mit underLinie machen!!

   // }

//}    catch(e){
}
*/

/*
document.addEventListener("DOMContentLoaded", function(event) {
});
*/


//

/*
try {
    function btnMa_NummerOK(){
        console.log("btnMa_NummerOK wurde geklickt");

        /*
        document.addEventListener("DOMContentLoaded", function(event) {
            //Do work
        });
        */

//document.addEventListener("DOMContentLoaded", function () {

/*
let inputMA_Nummer = document.getElementById('inputMA_Nummer');
let lbAusgabeMa_Nummer = document.getElementById('lbAusgabeMa_Nummer');
console.log(inputMA_Nummer[0].innerText.length);
console.log(inputMA_Nummer.textContent.length);
console.log(inputMA_Nummer);

if(inputMA_Nummer.innerText.length===0){
    console.log("inputMA_Nummer.innerText.length===0")
    lbAusgabeMa_Nummer.style.backgroundColor = "red";
    lbAusgabeMa_Nummer.innerText = "Hallo Rot"
}
else if(inputMA_Nummer.innerText.length>=0){
    lbAusgabeMa_Nummer.style.backgroundColor = "green";
    lbAusgabeMa_Nummer.innerText = "Hallo grün"
}
//});


}
}
catch (e) {

}

*/
function myCode()
{
    var bill = document.getElementById("currency").value ;

    var people_count = document.getElementById("number1").value;
    var select_value = document.getElementById("select").value;

    var calculate = document.getElementById("calculate");

    calculate.addEventListener("click" ,function()
    {
        console.log(bill);
        console.log(people_count);
        console.log(select_value);
    });
}
