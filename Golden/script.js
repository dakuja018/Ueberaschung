/* =====================================================
   KONFIGURATION
   Für Station 2-4 nur diese Werte ändern
===================================================== */


const config = {


    // Countdown endet:
    targetDate: "2026-08-01T11:00:00", 



    // Ziel nach Ablauf:
    nextPage: "/Ueberaschung/station4/"


};







/* =====================================================
   ELEMENTE
===================================================== */


const daysElement =
    document.getElementById("days");


const hoursElement =
    document.getElementById("hours");


const minutesElement =
    document.getElementById("minutes");


const secondsElement =
    document.getElementById("seconds");



const countdown =
    document.getElementById("countdown");


const button =
    document.getElementById("continue-button");







/* =====================================================
   COUNTDOWN
===================================================== */


function updateCountdown(){



    const now =
        new Date().getTime();



    const target =
        new Date(config.targetDate).getTime();



    const difference =
        target - now;




    if(difference <= 0){


        countdownFinished();


        return;


    }





    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );



    const hours =
        Math.floor(
            (difference %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );



    const minutes =
        Math.floor(
            (difference %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );



    const seconds =
        Math.floor(
            (difference %
            (1000 * 60))
            /
            1000
        );




    updateFlip(daysElement, days);

    updateFlip(hoursElement, hours);

    updateFlip(minutesElement, minutes);

    updateFlip(secondsElement, seconds);



}








/* =====================================================
   FLIP ANIMATION
===================================================== */


function updateFlip(element,value){


    if(!element){

        return;

    }



    const newValue =
        String(value)
        .padStart(2,"0");



    if(element.textContent !== newValue){



        element.classList.remove(
            "flip"
        );



        void element.offsetWidth;



        element.textContent =
            newValue;



        element.classList.add(
            "flip"
        );


    }


}








/* =====================================================
   COUNTDOWN BEENDET
===================================================== */


function countdownFinished(){



    countdown.style.transition =
        "opacity 1s ease, transform 1s ease";



    countdown.style.opacity =
        "0";



    countdown.style.transform =
        "translateY(-20px)";




    setTimeout(()=>{


        countdown.style.display =
            "none";



        button.style.display =
            "inline-block";



        button.style.opacity =
            "0";



        button.style.transition =
            "opacity 1s ease";



        setTimeout(()=>{


            button.style.opacity =
                "1";


        },100);



    },1000);



}








/* =====================================================
   WEITER BUTTON
===================================================== */


button.addEventListener(
    "click",
    ()=>{


        window.location.href =
            config.nextPage;


    }
);








/* =====================================================
   Partikel ERZEUGEN
===================================================== */


const particleContainer =
    document.getElementById(
        "particle-container"
    );



if(particleContainer){



    for(let i=0;i<50;i++){



        const particle =
            document.createElement(
                "div"
            );



        particle.className =
            "particle";


       const size = 3 + Math.random()*10;

particle.style.width = size + "px";
particle.style.height = size + "px";
       
particle.style.opacity =
    0.35 + Math.random()*0.65;

        particle.style.left =
            Math.random()*100 + "%";



        particle.style.fontSize =
            (12 + Math.random()*12)
            + "px";



        particle.style.animationDuration =
            (10 + Math.random()*12)
            + "s";



        particle.style.animationDelay =
            (-Math.random()*15)
            + "s";



        particleContainer.appendChild(
            particle
        );


    }


}








/* =====================================================
   START
===================================================== */


updateCountdown();



setInterval(
    updateCountdown,
    1000
);

window.addEventListener("load", () => {

    setTimeout(() => {

        const intro = document.getElementById("intro");

        if (intro) {

            intro.classList.add("hide");

        }

    }, 1400);

});
