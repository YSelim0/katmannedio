<template>
  <div class="main-container jc-center">
      <div class="container">
        <div class="title">
          <h1 class="middle"><span>•</span>Emeği Geçenler<span>•</span></h1>
          <p>Yani Katkıda Bulunan Herkes.</p>
        </div>
    
        <Person v-for="(item , index) in crew" v-bind:key="index" v-bind:image="item.image" v-bind:username="item.username" v-bind:role="item.role" v-bind:delay="index" />
        
      </div>
      <h5 class="madeby animate__animated animate__fadeIn">
        Made By
        <span onclick="window.open('https://yavuzselim.netlify.app','_blank')">HæveN</span>
      </h5>
  </div>
</template>

<script>
import ekip from './../jsons/EmegiGecenler.json';
import Person from './../components/person';
export default {
    name:'EmegiGecenler',
    data(){
        return{
            crew:[]
        }
    },
    created(){
        this.crew = ekip.crew;
        document.title = "Emeği Geçenler - KatmanNeDio?";
    },
    methods:{
    },
    components:{
        Person,
    }
}
</script>

<style scoped>

.main-container {
    width: 100%;
    height: calc(100vh - 75px);
}

.container {
    width: 900px;
    height: 90%;
    padding: 25px;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.342);
    background-color: rgb(228, 228, 228);
}

.title {
    text-align: center;
}

.title h1 {
    font-size: 65px;
    font-family: 'Mulish' , sans-serif;
}

.title h1 span {
    font-size: 30px;
    margin: 0px 10px;
}

.title p {
    font-family: 'Poppins' , sans-serif;
    margin-bottom: 20px;
}

.madeby {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 2px;
    left: 0;
    font-family: 'Poppins' , sans-serif;
    font-size: 20px;
    animation: fade 1s infinite;
}

.madeby:hover {
    animation: none;
}

.madeby span {
    padding: 2px;
    cursor: pointer;
}

.madeby span:hover {
    background-color: black;
    color: white;
}

@keyframes fade {
    0% {
        filter: opacity(50%);
    }
    50% {
        filter: opacity(100%);
    }
    100% {
        filter: opacity(50%);
    }
}

</style>