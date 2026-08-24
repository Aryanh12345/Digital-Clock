let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let sec = document.querySelector("#sec");

setInterval(() => {
    let today = new Date();

    hrs.innerHTML = (today.getHours()<10?"0":"") + today.getHours();
    mins.innerHTML = (today.getMinutes()<10?"0":"") + today.getMinutes();
    sec.innerHTML = (today.getSeconds()<10?"0":"") + today.getSeconds();
}, 1000)