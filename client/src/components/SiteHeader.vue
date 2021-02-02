<template>
    <header class="ai-center jc-space" id="header">
        <div class="logo">
            <router-link to="/">
                <img src="./../assets/katmannedioLogo.png" alt="logo">
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
</template>

<script>
export default {
    name:'SiteHeader',
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

<style scoped>

header {
    width: 100%;
    height: 75px;
    background-color: #141414;
    color: white;
    padding: 0px 100px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
}

header .logo img {
    width: 275px;
}

header .nav ul li {
    list-style-type: none;
    margin: 0px 10px;
}

header .nav ul li a {
    font-size: 15px;
    font-family: 'Poppins' , sans-serif;
    font-weight: 500;
    color: white;
    transition: all .2s ease;
}

header .nav ul li a:hover {
    color: rgb(179, 179, 179);
}

</style>