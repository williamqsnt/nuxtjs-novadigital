
<template>
    <div id="notreProcede" class="notreProcede titrepartie cache">
        <p>NOTRE PROCédé</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>	
    </div>
    <div class="cache" id="cacheprocede"></div>
    <div class="container">  
        <section class="panel">
            
            <div class="pute"><h3 class="putee">Compréhension <br>des besoins</h3></div>
            <img class="iconemobile" src="img/1.svg" alt="">
            <div class="desProcede">
                <p class="despute">Nous définissons avec vous, vos besoins et attentes afin d'en conclure des objectifs communs.
                    <br><br>
                    Cette phase d'introduction nous est essentielle pour la mise en place d'un planning, le choix des acteurs importants de votre projet, et répondre à toutes vos questions
                    </p>
                    <img src="../assets/img/1.svg" class="procedesvg" id="procede2" alt="">
                </div>
        </section>
        <section class="panel">
            <div class="pute"><h3 class="putee2">Recherche, idéation
            <br>et maquette</h3></div>
            <img class="iconemobile" src="img/2.svg" alt="">
            <div class="desProcede">
                <p>Chaque projet est unique et c'est pour cela qu'on nous passons par une phase de recherche afin de bien comprendre vos futurs utilisateurs.
                    <br><br>
                    Par la suite, nous entamons une phase d'idéation et nous vous procurons un prototype représentatif de votre projet</p>
                    <img src="img/2.svg" class="procedesvg" id="procede2" alt="">
            </div>
        </section>
        <section class="panel">
            <div class="pute"><h3 class="putee3">Retours et<br>modifications</h3></div>
            <img class="iconemobile" src="img/3.svg" alt="">
            <div class="desProcede">
                <p>Une fois le prototype réceptionné par vos soins, vous êtes libre de nous faire des retours.
                    <br><br>
                    Nous  procédons aux modifications afin d'améliorer en continuité votre projet. Nous mettons en place un maximum d’échange entre vous et nous afin que votre projet répond à vos exigences
                    </p>		
                <img src="img/3.svg" class="procedesvg" id="procede3" alt="">	
            </div>
        </section>
        <section class="panel">
            <div class="pute"><h3 class="putee">Intégration et <br>développement</h3></div>
            <img class="iconemobile" src="img/4.svg" alt="">
            <div class="desProcede">
                <p>L'une des dernières grandes étapes est l'intégration du prototype une fois la validation des deux parties. 
                    <br><br>
                    Cela consiste développer votre site, intégrer votre base de donnée, réaliser des éléments graphiques, puis mettre votre site en ligne afin qu'il soit utilisable	
                </p>
                <img src="img/4.svg" class="procedesvg" id="procede4" alt="">
            </div>
        </section> 
    </div>
</template>

<script>

    export default {
        mounted() {


gsap.to('.notreApproche',{
    scrollTrigger:{
        trigger: ".notreApproche",
        start:"top top",
        endTrigger: ".titrepartie",
        pin:true,
        pinSpacing:false,
    },
    
});

gsap.to('.notreProcede',{
    scrollTrigger:{
        trigger: ".notreProcede",
        start:"top top",
        endTrigger: ".projetsSelectionnes",
        pin:true,
        pinSpacing:false,
    },
    
});
// gsap.to('.projetsSelectionnes',{
//     scrollTrigger:{
//         trigger: ".projetsSelectionnes",
//         start:"top top",
//         endTrigger: ".contact",
//         pin:true,
//         pinSpacing:false,
//     },
    
// });

// Annimation Menu

gsap.from('.MnotreApproche',{
    scrollTrigger:{
        trigger: ".MnotreApproche",
        start:"top bottom",
        //markers:true,
        end:"bottom 40%",
        scrub: 4,
    },
    x: 400,
});
gsap.from('.MnotreProcede',{
    scrollTrigger:{
        trigger: ".MnotreProcede",
        start:"top bottom",
        //markers:true,
        end:"bottom 40%",
        scrub: 4,
    },
    x: 400,
});
gsap.from('.MprojetsSelectionnes',{
    scrollTrigger:{
        trigger: ".MprojetsSelectionnes",
        start:"top bottom",
        //markers:true,
        end:"bottom 40%",
        scrub: 4,
    },
    x: 400,
});
gsap.from('.MnosRecompenses',{
    scrollTrigger:{
        trigger: ".MnosRecompenses",
        start:"top bottom",
        //markers:true,
        end:"bottom 40%",
        scrub: 4,
    },
    x: 400,
});
gsap.from('.Mcontact',{
    scrollTrigger:{
        trigger: ".Mcontact",
        start:"top bottom",
        //markers:true,
        end:"bottom 40%",
        scrub: 4,
    },
    x: 400,
});

  
    }
    
        }

    



</script>

<style lang="scss" scoped>

.container {
    overscroll-behavior: none;
    width: 280%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: auto;
    }
    
    .panel{
        width: 70%;
    }
    .container h3{
        font-size: 60px;
        margin: 10% 0 0 15%;
    }
    .desProcede{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        min-height: 30%;
        margin: 8% 0 0 40%;
        padding: 5% 0 0 5%;
        border-left: solid 1px;
        text-align: left;
        overflow: hidden;
        fill: currentColor;
    
    }
    
    #procede1{
        height: auto;
        width: 200px;
    }
    
    .desProcede img{
        width: 40%;
        
    }
    
    
    
    @media screen and (min-width: 1024px) {
    
        .iconemobile{
            display: none;
        }
    
    }
    
    
    @media screen and (max-width: 1024px) {
        /* tablettte */
            .container {
            overscroll-behavior: none;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            overflow-x: auto;
            /* -webkit-overflow-scrolling: auto; */
            }
            .container h3{
                font-size: 60px;
                margin: 20% 0 0 5%;
            }
            .panel{
                width: 100%;
            }
            .desProcede img{
                display: none;    
            }
            .iconemobile{
                margin: 5% 0 0 20%;
            }
            .container{
                margin-bottom: 20%;
            }
        
    }
    
    @media screen and (max-width: 767px) {
        /* mobile */
        .container h3{
            font-size: 40px;
            margin: 20% 0 0 5%;
        }
        .iconemobile{
            width: 60%;
            margin: 5% 0 0 20%;
    
        }
        .desProcede{
            margin: 2% 0 2% 20%;
        }
       
        
            
    }

</style>