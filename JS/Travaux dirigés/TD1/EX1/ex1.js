const action = document.getElementById("demarrer");
const compteur = document.getElementById("compteur");
const reinitialiser = document.getElementById("reinitialiser");
const tour = document.getElementById("tour");
const listeTour = document.getElementById("listeTour");
reinitialiser.style.display="none";
let idInterval
let debut
action.addEventListener("click",() => {
    if (action.textContent==="Démarrer") {
    action.textContent="Pause"
    reinitialiser.style.display="inline";
    debut=Date.now();
    idInterval=setInterval(() => {
        currentTime = compteur.textContent;
        timeTable = currentTime.split(":");
        ms=parseInt(timeTable[2]);
        s=parseInt(timeTable[1]);
        m=parseInt(timeTable[0]);
        ms+=Date.now()-debut;
        debut=Date.now();
        s+=Math.floor(ms/1000);
        ms%=1000;
        m+=Math.floor(s/60);
        s%=60;
        m%=60;
        compteur.textContent = (m%60 < 10 ? "0" + m%60 : m%60) + ":" + (s%60 < 10 ? "0" + s%60 : s%60) + ":" + (ms%1000 < 10 ? "0" + ms%1000 : ms%1000);
    }, 10);
}else{
    action.textContent="Démarrer"
    clearInterval(idInterval);
}

});

reinitialiser.addEventListener("click",() => {
    clearInterval(idInterval);
    compteur.textContent = "00:00:00";
    action.textContent="Démarrer"
    reinitialiser.style.display="none";
    listeTour.innerHTML = "";
}
)

tour.addEventListener("click",() => {
    let currentTime = compteur.textContent;
    let li = document.createElement("li");
    li.textContent = currentTime;
    listeTour.appendChild(li);
})