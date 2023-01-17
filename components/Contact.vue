

<template>
    <section id="contact" class="contact">
        <div class="titrepartie cache">
            <p>NOUS CONTACTER</p>
        </div>
       
        <div class="containercontact">
            <div class="divider" id="divider4"></div>
            <div class="colonnegauche">
                <p>Tel. 06 42 77 23 85</p>
                <p>mail. contact@novadigital.fr</p>
                <br>
                <p>78 rue saint pierre de vaise, 69009 Lyon</p>
                
                <a href="mailto:contact@novadigital.fr" class="button cache" id="button1">
                    <div class="button__filler"></div>
                    <span class="button__text">
                        <span class="button__text-inner">Contactez nous !</span>
                    </span>
                </a>
                
            </div>
            <div class="colonnedroite">
                <h3>Nos pages</h3>
                <ul>
                    <a></a>
                    <li>Notre approche</li>
                    <li>Notre procédé</li>
                    <li>Projets sélectionnés</li>
                    <li>Nos récompenses</li>
                    <li>Nos articles</li>
                    <li>Mentions légales</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

</script>



<style lang="scss" scoped>

*{
    color : white;
}

.contact{
    position: relative;
    height: 80vh;
}

.containercontact{
    height: 500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.colonnegauche{
    min-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: left;
    margin-left: 10%;
    
}

.colonnegauche a{
border: 1px solid;
border-radius: 35px;
padding: 18px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 26px;
width: 350px;
cursor:pointer;
margin: 10% 0 0 0;
}



.colonnedroite{
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 3em;
    gap:2em;
    margin-left: 100px;
}

.colonnedroite h3{
    font-size: 1.5em;
    margin-bottom: -15px;
    margin-inline-start: 0;
}

.colonnedroite ul{
    list-style: none;
    line-height: 28px;
    font-weight: 300;
    padding-inline-start: 0;
}

.contactelement{
    width: 70%;
    display:flex;
    gap: 2em;
    align-items: center;
    margin-left: 5%;
}
.contactelement img{
    max-width: 70px;
    max-height: 70px;
}
.menutemp ul{
    text-transform: uppercase;
    list-style: none;
    font-size: 2.3em;
    line-height: 1.8em;
}

@media screen and (max-width: 1200px ){

    

    .colonnedroite{
        align-items: center;
        margin-left: 0px;
    }

    .footerdiv{
        width: 200px;
    }


}

@media screen and (max-width: 1000px ){

.footerdiv{
    width: 250px;
}

#cercle3, #divider4{
    display: none;
}
.colonnegauche{
    min-width: 200px;
}


}

@media screen and (max-width: 700px ) {
 
    footer{
        margin-top: 8em;
    }
    
    .footerdiv{
        width:45%;

    }

    .footertitle svg{
        height: 12px;
        width: 12px;
    }

    
    .colonnedroite{
        align-items: center;
    }

    .menutemp ul{
        font-size: 1em;
        padding-inline-start: 0em;
    }

    .contactelement img{
        max-width: 30px;
        max-height: 30px;
    }

    .contactelement{
        font-size: 0.7em;
    }

    .colonnegauche{
        margin: 20% 0 5% 5%;
        width: 100%;
    }



}
</style>

