const eventDate = new Date("October 11, 2026 00:00:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();
const distance = eventDate - now;

document.getElementById("days").innerText =
Math.floor(distance / (1000*60*60*24));

document.getElementById("hours").innerText =
Math.floor((distance % (1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerText =
Math.floor((distance % (1000*60*60))/(1000*60));

document.getElementById("seconds").innerText =
Math.floor((distance % (1000*60))/1000);

if(distance < 0){
clearInterval(countdown);
}

},1000);


// FORMULARIO GOOGLE SHEETS

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const data = {
nombre: document.getElementById("nombre").value,
asistentes: document.getElementById("asistentes").value
};

await fetch(WEBAPP_URL,{
method:"POST",
body:JSON.stringify(data)
});

alert("Confirmación enviada");

form.reset();

});