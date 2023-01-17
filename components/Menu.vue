<template>
    <div>
        <p>switch</p>
        <h1>Agence web Novadigital</h1>
        <button @click="showModal = true">menu</button>
        <MenuPopup v-show="showModal" />
    </div>
</template>

<script>
    import MenuPopup from '~/components/MenuPopup.vue';
    
    export default {
        data() {
            return {
                showModal : false
            }
        }
    }
        

</script>

<style lang="scss" scoped>


    *{
        color : white;
        font-weight : 200;
    }

    h1{
        font-size : 20px;
    }

    div{
        margin : 2.5em 0.5em 0.5em 0.5em;
        display : flex;
        justify-content : space-between;
        align-items : center;
        padding-bottom : 1.25em;
        border-bottom : 1px solid white;


        button{
            border : none;
            background-color : unset;
            font-size : 1.1em;
            cursor : pointer;
        }
    }

</style>