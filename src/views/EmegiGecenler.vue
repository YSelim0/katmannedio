<template>
  <div class="main-container jc-center">
      <div class="container">
          <div class="title">
            <h1 class="middle"><span>•</span>Emeği Geçenler<span>•</span></h1>
            <p>Yani Katkıda Bulunan Herkes.</p>
          </div>
          <div class="row animate__animated animate__bounceInLeft" v-for="(item , index) in crew" v-bind:key="index" v-bind:style="'animation-delay:'+(index*0.1)+'s;'">
              <div class="row-line jc-space ai-center">
                <h2>{{ item.username }}</h2>
                <p>{{ item.role }}</p>
              </div>
              <div class="line"></div>
          </div>
      </div>
      <h5 class="madeby animate__animated animate__fadeIn">
          Made By
          <span onclick="window.open('https://yavuzselim.netlify.app','_blank')">HæveN</span>
      </h5>
  </div>
</template>

<script>
import ekip from './../jsons/EmegiGecenler.json';
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

.row {
    width: 100%;
    height: 35px;
    margin: 10px 0px;
    z-index: 5;
}

.row h2 {
    font-size: 20px;
    font-family: 'Mulish' , sans-serif;
    transition: all .2s ease;
    cursor: default;
}

.row p {
    font-size: 20px;
    font-family: 'Poppins' , sans-serif;
    transition: all .2s ease;
    cursor: default;
}

.row:hover h2 , .row:hover p {
    font-size: 25px;
}

.row:hover {
    z-index: 10;
}

.row .row-line {
    width: 100%;
    padding-bottom: 5px;
}

.row .line {
    width: 100%;
    height: 2px;
    background-color: rgb(185, 185, 185);
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