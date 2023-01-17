<template>

    <section id="notreApproche" class="section">
        <svg id="cercle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <circle r="150" cx="500" cy="500"/>
        </svg>
        
        <div class="presentation">
            <div class="partie1">
                
                <div class="soustitres" id="web360">
                    <p>On s'occupe de tout</p>
                    <h2>Agence <br> web 360</h2>
                </div>
                <div class="divider" id="divider1"></div>
                <p class="lorem cache" id="lorem1">Nos équipes spécialisées dans les différents domaines du web permettent de vous proposer des solutions complètes et un accompagnement personnalisé selon vos besoins.</p>
            </div>
            <img src="../assets/img/notre-procede1.svg" alt="" id="approche1" class="approchesvg">

            <div class="partie2">
                <div class="soustitres cache" id="surmesure">
                    <p>Chaque projet est unique</p>
                    <h2>Tout est sur <br> mesure</h2>
                </div>
        
                <p class="lorem cache" id="lorem2">Nous mettons en place beaucoup d'échanges entre notre équipe et vous afin que votre projet soit entièrement personnalisé et conçu selon vos besoins et ceux de vos utilisateurs.</p>
                <div class="divider" id="divider2"></div>
            </div>
            <img src="../assets/img/notre-procede2.svg" alt="" id="approche2" class="approchesvg">
            <div class="partie3">
                <div class="soustitres cache" id="entreprisecreative">
                    <p>Des idées débordantes</p>
                    <h2>Entreprise <br> créative</h2>
                </div>

                <div class="divider" id="divider3"></div>
                <p class="lorem cache" id="lorem3">Lors de la conception des interfaces, nous intervenons sur le design graphique afin de répondre à des aspects autant visuels qu'ergonomiques</p>
            </div>
            <img src="../assets/img/notre-procede3.svg" alt="" id="approche3" class="approchesvg">
        </div>
        <svg id="cercle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <circle r="150" cx="500" cy="500"/>
        </svg>
    </section>
  </template>

  <script>

   
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    
gsap.to("#divider1", {
    height: 970,
    scrollTrigger: {
        trigger:"#web360",
        toggleActions: "play pause reverse reset",
        start:"bottom bottom",
        endTrigger:"#entreprisecreative",
        end:"center center",
        scrub:0.3,
}
});

gsap.to("#divider2",{
    height: 440,
    scrollTrigger: {
        trigger:"#lorem2",
        toggleActions: "play pause reverse reset",
        start:"bottom bottom",
        endTrigger:"#lorem3",
        end:"bottom bottom",
        scrub:0.3,
    }
});

gsap.to("#divider3", {
    height: 500,
    scrollTrigger: {
        trigger:"#lorem3",
        toggleActions: "play pause reverse reset",
        start:"bottom bottom",
        end:"+=560px",
        scrub:0.3,
    }
});

gsap.to("#divider4", {
    height: 470,
    scrollTrigger: {
        toggleActions: "play pause reverse reset",
        start: "122%",
        end: "+=500",
        scrub:0.3,
    }
});
gsap.to("#divider5", {
    height: 470,
    scrollTrigger: {
        toggleActions: "play pause reverse reset",
        start: "0%",
        end: "+=500",
        scrub:0.3,
    }
});
gsap.to("#divider6", {
    height: 470,
    scrollTrigger: {
        toggleActions: "play pause reverse reset",
        start: "0%",
        end: "+=500",
        scrub:0.3,
    }
});

let mm = gsap.matchMedia();
mm.add("(min-width : 1387px)", () => {

    gsap.to("#cercle", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "1080",
            end: "+=300",
            scrub: 0.4,
        }
    });


})

mm.add("(max-width : 1386px) and (min-width : 1024px)", () => {

    gsap.to("#cercle", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "920",
            end: "+=300",
            scrub: 0.4,
        }
    });
})

mm.add("(max-width : 1024px) and (min-width : 700px)", () => {

    gsap.to("#cercle", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "780",
            end: "+=300",
            scrub: 0.4,
        }
    });
})

mm.add("(max-width : 700px) and (min-width : 450px)", () => {

    gsap.to("#cercle", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "550",
            end: "+=300",
            scrub: 0.4,
        }
    });

})

mm.add("(max-width : 450px)", () => {

    gsap.to("#cercle", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "450",
            end: "+=300",
            scrub: 0.4,
        }
    });

})

let mm2 = gsap.matchMedia();
mm2.add("(min-width : 1387px)", () => {

    gsap.to("#cercle2", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "3100",
            end: "+=300",
            scrub: 0.4,
        }
    });


})

mm2.add("(max-width : 1386px) and (min-width : 1024px)", () => {

    gsap.to("#cercle2", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "3050",
            end: "+=300",
            scrub: 0.4,
            // markers: true
        }
    });
})

mm2.add("(max-width : 1024px) and (min-width : 700px)", () => {

    gsap.to("#cercle2", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "2800",
            end: "+=300",
            scrub: 0.4,
            // markers: true
        }
    });
})

mm2.add("(max-width : 700px) and (min-width : 450px)", () => {

    gsap.to("#cercle2", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "2600",
            end: "+=300",
            scrub: 0.4,
            // markers: true
        }
    });

})

mm2.add("(max-width : 450px)", () => {

    gsap.to("#cercle2", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "2500",
            end: "+=300",
            scrub: 0.4,
            // markers: true
        }
    });

})

let mm3 = gsap.matchMedia();
mm3.add("(min-width : 1387px)", () => {

    gsap.to("#cercle3", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start:"10150",
            end:"+=470",
            scrub:0.4,
            // markers:true,
        }
    });


})

mm3.add("(max-width : 1386px) and (min-width : 1024px)", () => {

    gsap.to("#cercle3", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "3150",
            end: "+=300",
            scrub: 0.4,
            // markers: true
        }
    });
})

mm3.add("(max-width : 1024px) and (min-width : 700px)", () => {

    gsap.to("#cercle3", {
        strokeDashoffset: "0",
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "2800",
            end: "+=300",
            scrub: 0.4,
            // markers: true
        }
    });

})
  }
};

   

</script>

        
        
       
  
  
  
  <style scoped>

  #cercle{
    position: absolute;
    top: -50px;
    right: 450px;
    height: 100px;
    width: 100px;
    z-index: 9;
    fill: none;
    stroke-width:12;
    stroke-dasharray: 2512.2587890625;
    stroke-dashoffset: 2512.2587890625;
}

#cercle2{
    position: absolute;
    bottom: -100px;
    right: 475px;
    height: 100px;
    width: 100px;
    z-index: 9;
    fill: none;
    stroke-width:12;
    stroke-dasharray: 2512.2587890625;
    stroke-dashoffset: 2512.2587890625;
}

#cercle3{
    position: absolute;
    top: 0px;
    right: 600px;
    height: 100px;
    width: 100px;
    z-index: 9;
    fill: none;
    stroke-width:12;
    stroke-dasharray: 2512.2587890625;
    stroke-dashoffset: 2512.2587890625;
}

@media screen and (max-width: 1386px) {
    #cercle2{
        right: 150px;
    }

    #cercle3{
        left: 600px;
    }
}

@media screen and (max-width: 700px) {
    #cercle2{
        right: 0px;
    }
}

@media screen and (max-width: 1024px) {
    #cercle{
        right: 250px;
    }

    #cercle3{
        right: 150px;
    }
    
}

@media screen and (max-width: 700px) {
    #cercle{
        right: 0px;
    }
    
}

.presentation h2{
    font-size:60px;
    line-height: 0.9;
    font-weight:normal;
}

.section{
    position: relative;
    padding-bottom: 200px;
}

.presentation{
   display: flex;
   flex-direction: column;
}

.partie1{
    display: flex;
    flex-direction: column;
    width: 900px;
    align-self: flex-end;
    
}

.partie2{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 800px;
    align-self: flex-start; 
}
.partie3{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 900px;
    align-self: flex-end;
}

.approchesvg{
    position: absolute;
    width: 80%;
    height: 600px;
    z-index: 9;
}

#approche2{
    top: 500px;
    left: 20%;
}
#approche3{
    top:1450px;
}

 /*Titres clef */
.soustitres{
    max-width: 350px;
    font-weight: 100;
    
}

.soustitres p{
    margin-bottom: 10px;
}
#web360{
    align-self: flex-start;
    padding-top: 150px;
    box-sizing: content-box;
    max-width: 250;
    
    }

#surmesure{
    text-align:left;
    margin-left: 30%;
    padding-top: 150px;
    box-sizing: content-box;
}

#entreprisecreative{
    align-self: flex-start;
    padding-top: 150px;
    box-sizing: content-box;
}

/* Lorem */
.lorem{
    max-width: 350px;
    text-align: left;
    margin-top: 110px;
    padding-top: 20px;
    padding-bottom: 20px;
}

#lorem1, #lorem3{
    margin-right: 10%;
    align-self: flex-end;
    font-size : 1.25em;
    background-color : #1b1b1b;
}

#lorem2{
    align-self: flex-end;
    padding-left: 5%;
    font-size : 1.25em;
    margin-top: 150px;
}

#lorem3{
    z-index: 8;
    font-size : 1.25em;
}


/* Dividers */
.divider{
    position: absolute;
    border-left: 1px solid;
    margin-top:50px;
    margin-bottom: 50px;
    z-index: -100;  
}

#divider1{
    right: 500px;
    top:-50px;
}

#divider2{
    left: 25%;
    top: 910px;
}

#divider3{
    right: 525px;
    top: 1500px;
    margin: 0;
    z-index: 7;
}
#divider4{
    top: 0px;
    right: 650px;    
}
#divider5{
    top: 0px;
    left: 35%;
    
}
#divider6{
    top: 0px;
    right: 35%;
    
}


/* Partie du bas */

.titrepartie{
    border-bottom: solid 1px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0 10px 0;
    text-transform: uppercase;
    background-color: var(--color-bg);
}
.projetsSelectionnes{
    z-index: 60;
}
.titrepartie img{
    width: 20px;
}

.cache{
    background-color: var(--color-bg);
    color: var(--color-text);
    z-index: 5;
    opacity: 1;
}

.cachepremium{
    z-index: 10 !important;
    
}

#cacheprocede{
    margin-top: 0.5px;
    z-index: 8;
    height: 90px;
    position: relative;
}

/* Petite fenetre */

@media screen and (max-width: 1386px) {

   
    #divider3{
        right: 200px;
    }

    #divider4{
        left: 650px;
    }

    .partie1{
        width: 800px;
    }
    .partie2{
        width: 800px;
    }
    .partie3{
        width: 800px;

    }

    /* Lorem */
    
    #lorem2{
        align-self: flex-end;
        margin-right: 5%;
        margin-top: 100px;
    }
    #lorem3{
        align-self: center;
        margin-top: 150px;
        padding-right: 0px;
    }
    
    /* Titres clef */
    #web360{
        align-self: flex-start;
        margin-left: 30px;
        
    }

    #entreprisecreative{
        padding-bottom: 50px;
        padding-top: 50px;
        margin-top: 100px;
    }

}

@media screen and (max-width: 1024px) {
    /* tablette */

.partie1{
    width: 90%;
}
.partie2{
    width: 100%;
}
.partie3{
    width: 90%;
}


#lorem3{
    margin-top: 50px;
}

#divider1{
    right: 300px;
}

#divider3{
    top: 1440px;
}

#divider4{
    left: 0;
    right: 100px;
}
}

@media screen and (max-width: 700px) {
    /* mobile */

    .approchesvg{
        opacity: 0%;
      
    }

    .partie1{
        width: 100%;
    }
    .partie2{
        width: 100%;
    }
    .partie3{
        width: 100%;
    }
    .section{
        padding-bottom: 180px;
    }

    /* Titres clef */
    .soustitres{
        max-width: 250px;
    }
    .soustitres h2{
        font-size: 40px;
    }
    #web360{
        padding-right: 0;
        margin-left: 20%;
    }
    #surmesure{
        margin-left: 10%;
    }



    .titrepartie img{
        width: 20px;}
    #entreprisecreative{
        padding-right: 0;
        margin-left: 10%;
    }

    /* Lorem */
    .lorem{
        max-width: 250px;
    }
    #lorem2{
        margin-right: 5%;
    }
    

    /* Dividers */
    #divider1{
        right: 50px;
    }
    #divider2{
        left: 15%;
    }
    #divider3{
        right: 100px;
    }

    #divider0{
        right: 85%;
    }
   
   
    /* partie du bas */
   
}

    
    
      
    </style>
    


  