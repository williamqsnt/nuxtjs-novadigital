<template>

    <div style="border-bottom : 1px solid white">
        <h2 style="font-weight : 500">NOTRE PROCÉDÉ</h2> 
     </div>
    <div class="container">
    
      <div class="description panel blue">
       
            <h3>Compréhension <br/> des besoins</h3>
            <div style="display :flex; align-items : center; justify-content : space-around;">
                <div style="width : 50%"></div>
                <p>Chaque projet est unique et c'est pour cela qu'on nous passons par une phase de recherche afin de bien comprendre vos futurs utilisateurs.<br/> 

                                Par la suite, nous entamons une phase d'idéation et nous vous procurons un prototype représentatif de votre projet</p>
            </div>
            <img src="../assets/img/1.svg" class="procedesvg" id="procede2" alt="">

           
      
      </div>
  
      <section class="panel red">
        <h3>Recherche, idéation <br/>
            et maquette</h3>
        <div style="display :flex; align-items : center; justify-content : space-around;">
            <div style="width : 50%"></div>
            <p>Chaque projet est unique et c'est pour cela qu'on nous passons par une phase de recherche afin de bien comprendre vos futurs utilisateurs. 
<br/>
                Par la suite, nous entamons une phase d'idéation et nous vous procurons un prototype représentatif de votre projet</p>
        </div>
        <img src="../assets/img/2.svg" class="procedesvg" id="procede2" alt="">

      </section>
      <section class="panel orange">
        <h3>Retours et <br/>
            modifications</h3>
        <div style="display :flex; align-items : center; justify-content : space-around;">
            <div style="width : 50%"></div>
            <p>Une fois le prototype réceptionné par vos soins, vous êtes libre de nous faire des retours. 
                <br/>
                Nous procédons aux modifications afin d'améliorer en continuité votre projet. Nous mettons en place un maximum d’échange entre vous et nous afin que votre projet répond à vos exigences</p>

        </div>
        <img src="../assets/img/3.svg" class="procedesvg" id="procede2" alt="">

      </section>
      <section class="panel purple">
        <h3>Intégration et <br/>
            développement</h3>
        <div style="display :flex; align-items : center; justify-content : space-around;">
            <div style="width : 50%"></div>
            <p>L'une des dernières grandes étapes est l'intégration du prototype une fois la validation des deux parties. 
                <br/>
                Cela consiste développer votre site, intégrer votre base de donnée, réaliser des éléments graphiques, puis mettre votre site en ligne afin qu'il soit utilisable</p>

        </div>
        <img src="../assets/img/4.svg" class="procedesvg" id="procede2" alt="">

      </section>
    </div>
    
  </template>
  
  <script>
  import gsap from 'gsap'
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    mounted() {
      let sections = gsap.utils.toArray(".panel");
      let scrollIndicator = document.getElementById("scroll-indicator");
      gsap.to(scrollIndicator, {
        y: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100%",
          toggleActions: "play none none none"
        }
      });
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".container").offsetWidth
        }
      });
    }
  }
  </script>
  
  <style scoped>

  #scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: #000;
  }

  
  .container {
    overflow-y: visible;
    position: relative;
    height: unset;
  }

  .panel{
    width : 5000PX;
    display : flex;
    align-items :center;
    justify-content: center;
    flex-direction: column;
  
  }

  h3{
    font-size : 3em;
  }
  .container {
    width: 300%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    
        }
        
        .firstContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
       
        }
        
        .lastContainer {
        display: flex;
        height: 100vh;
    
        }
        </style>