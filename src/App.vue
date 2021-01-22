<template>
    <div id="App">
        <header class="ai-center jc-space" id="header">
            <div class="logo">
                <router-link to="/">
                    <img src="./assets/katmannedioLogo.png" alt="logo">
                </router-link>
            </div>
            <div class="nav">
                <ul class="flex">
                    <li>
                        <router-link to="/">Anasayfa</router-link>
                    </li>
                    <li>
                        <router-link to="/testler">Testler</router-link>
                    </li>
                    <li>
                        <router-link to="/emegi-gecenler">Emeği Geçenler</router-link>
                    </li>
                    <li>
                        <a href="http://aynisinemalar.com/" target="_blank">Hype <i class="fas fa-external-link-alt"></i></a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="router-view-container">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name:'App',
    data(){
        return {

        }
    },
    created(){

    },
    methods:{

    }
}
</script>

<style>

@import url('./css/main.css');
@import url('./css/header.css');

</style>