//todo Problem document.getElementbyId().innerTest.value…. es goht eifach ned, alles scho probiert.... wtf
// todo registrieren.css h1 macht nicht orange

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
document.addEventListener("DOMContentLoaded", function(event) {
});
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
