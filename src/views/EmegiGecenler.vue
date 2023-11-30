<template>
  <div class="main-container jc-center">
      <div class="container">
        <div class="title">
          <h1 class="middle">Emeği Geçenler</h1>
          <p>katkıda bulunan herkes</p>
        </div>
    
        <Person v-for="(item , index) in crew" v-bind:key="index" v-bind:image="item.image" v-bind:username="item.username" v-bind:role="item.role" v-bind:delay="index" />
        
      </div>
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
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    padding-top: 100px;
}

.title {
    text-align: center;
}

.title h1 {
    font-size: 65px;
    font-family: 'Mulish' , sans-serif;
}

.title p {
    font-family: 'Poppins' , sans-serif;
    margin-bottom: 20px;
    color: rgba(0,0,0,.7);
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