<template>
    <div>
        <Menu />
        <div class="divider" id="divider5"></div>
		<div class="divider" id="divider6"></div>
        <div class="desc-novadigital">
            <h3>Nous sommes une agence jeune et dynamique proposant des sites innovants et créatifs qui représentent les valeurs et les demandes de nos clients.</h3>
        </div>



        <video src="../assets/video/vidéo-novasite.d856d951.mp4" autoplay loop muted/>
        
        <Presentation />

        
        <GsapPage />
        <Projets />

        <Contact />
        <Footer />
        
    </div>
</template>




<script>
    import gsap from 'gsap';

    export default {
        mounted() {
            gsap.to("#divider5", {
    height: 500,
    scrollTrigger: {
        toggleActions: "play pause reverse reset",
        start: "top top",
        end: "+=500",
        scrub:0.3,
    }
    });
    gsap.to("#divider6", {
        height: 500,
        scrollTrigger: {
            toggleActions: "play pause reverse reset",
            start: "0%",
            end: "+=500",
            scrub:0.3,
        }
    });


        }
    }








</script>

<style lang="scss">






#divider5 {

    left : 35%;   
}

#divider6 {
    right : 35%
}

.divider{
    position: absolute;
    border-left: 1px solid;
    margin-top:0px;
    
    margin-bottom: 50px;
    z-index: -1000;  
    background-color : white;
}



    .desc-novadigital {
        
	text-align: center;
	background-color: #1b1b1b;
    margin: 20% 20% 20% 20%;

        h3{
            text-align : center;
            font-weight: 500;
            font-size : 35px;
        






        }
    }

    video{
        width : 100%;
    }


    @media only screen and (max-width: 768px) {
        .desc-novadigital h3 {
          font-size: 30px;
        }
      }
      


</style>