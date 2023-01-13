<template>
    <footer>
        <a href="https://www.behance.net/alexisrittimann" class="footerdiv" id="behance">
            <div class="footertitle">
                <p>Behance</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>
            </div>
            <p>@alexisrittimann</p>
        </a>
        <a href="https://www.instagram.com/agence_novadigital/" class="footerdiv" id="instagram">
            <div class="footertitle">
                <p>Instagram</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>
            </div>
            <p>@agence_novadigital</p>
        </a>
        <a href="https://www.linkedin.com/company/agence-web-novadigital" class="footerdiv" id="linkedin">
            <div class="footertitle">
                <p>LinkedIn</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>
            </div>
            <p>@agence-web-novadigital</p>
        </a>
        <a href="https://dribbble.com/Novadigital_" class="footerdiv" id="dribbble">
            <div class="footertitle">
                <p>Dribbble</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>
            </div>
            <p>@Novadigital</p>
        </a>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

*{
    color : white;
}

.contact{
    position: relative;
    height: 80vh;
}
footer{
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
    margin-bottom: 20px;
    flex-wrap: wrap;

    
}
.footertitle{
    font-size: clamp(0.8rem, 3vw ,2rem);
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2em;
}

.footertitle svg{
    fill: currentColor;
	width: 20px;
	height: 20px;
}

.footerdiv{
    border-top: solid 1px;
    font-size: clamp(0.5rem, 1vw ,1.2rem);
    width: 250px;
    padding: 10px 0px;
    margin-bottom: 10px;
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