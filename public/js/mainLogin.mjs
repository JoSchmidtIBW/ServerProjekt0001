console.log("MainLogin.js halllllllllllllllllllllllllllllllllllllllllllllllllllllllll");

function myFunctionClicky(){
    console.log("halllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
}


async function loadJoke() {
    try { //hier wäre fehler status 400
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data.value);
            document.getElementById('j').innerText = data.value;
        } else {
            console.error(await response.text);
            document.getElementById('j').innerText = "Kein Internet!!!";
        }
    } catch (e) {
        console.error(e);
        document.getElementById('j').innerText = "Kein Internet!!!";
    }
}