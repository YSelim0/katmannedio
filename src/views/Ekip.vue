<template>
  <div class="main-container jc-center">
      <div class="container">
          <div class="title">
            <h1 class="middle"><span>•</span>Ekip<span>•</span></h1>
            <p>Yapımda Emeği Geçen Herkes.</p>
          </div>
          <div class="row jc-space ai-center" v-for="(item , index) in crew" v-bind:key="index">
              <h2>{{ item.username }}</h2>
              <p>{{ item.role }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import ekip from './../jsons/ekip.json';
export default {
    name:'Ekip',
    data(){
        return{
            crew:[]
        }
    },
    created(){
        this.crew = ekip.crew;
        document.title = "Ekip - KatmanNeDio?";
    },
    methods:{

    }
}
</script>

<style scoped>

.main-container {
    width: 100%;
    height: 100vh;
}

.container {
    width: 900px;
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
    border-bottom: 1px solid rgb(185, 185, 185);
    margin: 10px 0px;
}

.row h2 {
    font-size: 20px;
    font-family: 'Mulish' , sans-serif;
}

.row p {
    font-size: 20px;
    font-family: 'Poppins' , sans-serif;
}

</style>