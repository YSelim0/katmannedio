<template>
    <div id="App">
        <SiteHeader />
        <div class="router-view-container">
            <router-view />
        </div>
    </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'

export default {
    name:'App',
    data(){
        return {

        }
    },
    created(){
        console.log("%cMerhaba, Bu kısımı açtıysan belli ki meraklı birisin 😀. Eğer bir sorun olursa bana discord veya websitem üzerinden ulaşabilirsin. ^^\n\nDiscord:Heaven#7091\n\nWebsite: https://yavuzselim.netlify.app","color:#6c63ff;-webkit-text-stroke: .9px black;font-size:25px;font-family:'Poppins',sans-serif;");
    },
    methods:{

    },
    components:{
        SiteHeader,
    }
}
</script>

<style>

@import url('./css/main.css');

</style>