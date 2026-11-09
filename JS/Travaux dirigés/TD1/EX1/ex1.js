const demarrer = document.getElementById("demarrer");
const compteur = document.getElementById("compteur");

demarrer.addEventListener("click",() => {
    setInterval(() => {
        currentTime = compteur.textContent;
        timeTable = currentTime.split(":");
        ms=parseInt(timeTable[2]);
        s=parseInt(timeTable[1]);
        m=parseInt(timeTable[0]);
        ms+=10;
        s+=Math.floor(ms/1000);
        ms%=1000;
        m+=Math.floor(s/60);
        s%=60;
        m%=60;
        compteur.textContent = (m%60 < 10 ? "0" + m%60 : m%60) + ":" + (s%60 < 10 ? "0" + s%60 : s%60) + ":" + (ms%1000 < 10 ? "0" + ms%1000 : ms%1000);
    }, 10);
});