<template>
  <div id="testler">
      <div class="title">
          <h1>Tüm Testler</h1>
      </div>
      <div class="tests middle">

          <div class="item" v-for="(item , index) in tests" v-bind:key="index">
              <img v-bind:src="item.imageUrl" v-bind:alt="item.slug">
              <div class="description">
                  <h1>{{ item.title }}</h1>
                  <p>{{ item.date }}</p>
              </div>
              <div class="link">
                    <router-link v-bind:to="item.slug" class="middle">Teste Başla</router-link>
              </div>
          </div>

      </div>
      <div class="title">
          <h1>Daha Fazla İçerik Yakında...</h1>
          <p>Herhangi bir konuda fikriniz olursa Discord: Heaven#7091</p>
      </div>
  </div>
</template>

<script>
import tests from './../jsons/tests.json';

export default {
    name:'testler',
    data(){
        return {
            tests:[]
        }
    },
    created(){
        document.title = "Testler - KatmanNeDio?";

        this.tests = tests.tests;
    },
    methods:{

    }
}
</script>

<style scoped>

.title {
    width: 100%;
    text-align: center;
    padding-top: 25px;
    margin-bottom: 25px;
}

.title h1 {
    font-family: 'Mulish' , sans-serif;
    font-size: 50px;
}

.title p {
    font-size: 17px;
    font-family: 'Poppins' , sans-serif;
}

.tests {
    width: 100%;
    padding: 50px 0px;
}

.item {
    width: 350px;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.246);
    margin: 20px;
}

.item img {
    width: 100%;
    height: 200px;
    pointer-events: none;
    user-select: none;
}

.item .description {
    padding: 10px;
}

.item .description h1 {
    font-family: 'Mulish' , sans-serif;
    font-size: 20px;
    margin-bottom: 5px;
}

.item .description p {
    font-family: 'consolas' , sans-serif;
    font-size: 15px;
    color: rgb(155, 155, 155);
}

.item .link {
    padding: 10px;
    width: 100%;
}

.item .link a {
    width: 100%;
    height: 30px;
    background-color: #6c63ff;
    color: white;
    font-family: 'Poppins' , sans-serif;
    border-radius: 2px;
    transition: all .2s ease;
}

.item .link a:hover {
    background-color: #766fff;
}

</style>