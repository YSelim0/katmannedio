<template>
  <div class="tests-page-container">
      <div class="title">
          <h1>Tüm Testler</h1>
      </div>
      <div class="tests middle">

        <div class="item-container" v-for="(item , index) in tests" v-bind:key="index">
          <div class="item animate__animated animate__fadeInUp" v-bind:style="'animation-delay:'+(index*0.1)+'s;'">
            <img v-bind:src="item.imageUrl" v-bind:alt="item.slug">
            <div class="description">
              <h1>{{ item.title.length>30 ? item.title.slice(0,30)+'...' : item.title }}</h1>
              <h4>{{item.title}}</h4>
              <p>{{ item.date }}</p>
            </div>
            <div class="link">
              <router-link v-bind:to="item.slug" class="middle">Teste Başla</router-link>
            </div>
            <div class="date" v-if="dateControl(item.date)">
              <h3 class="ai-center">YENİ<i class="fas fa-star"></i></h3>
            </div>
          </div>
        </div>

      </div>
      <div class="title animate__animated animate__fadeIn">
          <p>Herhangi bir konuda fikriniz olursa Discord: <span onclick="window.open('https://discord.com/users/411808609836597270' , '_blank')">Heaven#7091</span></p>
      </div>
      <div class="sign">
          &copy;{{ getYear() }} CopyRight. Tüm Hakları MNT'nin kılları içinde saklıdır.
      </div>
  </div>
</template>

<script>
import tests from './../jsons/tests.json';

export default {
    name:'testler',
    data(){
        return {
            tests:[],
            dateYear:0,
        }
    },
    created(){
        document.title = "Testler - KatmanNeDio?";

        this.tests = tests.tests;
    },
    methods:{
        getYear(){
            let d = new Date();
            return d.getFullYear();
        },
        dateControl(date){
            let day = Number(String(date[0])+String(date[1]));
            let month = Number(String(date[3])+String(date[4]));
            let d = new Date();
            let nowDay = d.getDate()-7;
            nowDay = nowDay<=0 ? 30+nowDay : nowDay;
            let status = false;
            
            if(month==d.getMonth()+1)
            {
                d.getDate()-7<=day ? status=true : null;
            }
            else if(month==d.getMonth())
            {
                nowDay<=day ? status=true : null;
            }
            return status;
        }
    }
}
</script>

<style scoped>

.tests-page-container {
    padding-top: 50px;
}

.title {
    width: 100%;
    text-align: center;
    padding-top: 25px;
    animation-duration: 2s;
}

.title h1 {
    font-family: 'Mulish' , sans-serif;
    font-size: 50px;
}

.title p {
    font-size: 17px;
    font-family: 'Poppins' , sans-serif;
}

.title p span {
    padding: 2px;
}

.title p span:hover {
    background-color: black;
    color: white;
    cursor: pointer;
}

.tests {
    width: 100%;
    padding: 50px 0px;
    flex-wrap: wrap;
}

.item-container {
    width: 350px;
    margin: 20px;
    transition: all .3s ease;
}

.item {
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    transition: all .3s ease;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.item:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.item img {
    width: 100%;
    height: 200px;
    pointer-events: none;
    user-select: none;
}

.item .description {
    padding: 10px;
    position: relative;
}

.item .description h1 {
    font-family: 'Mulish' , sans-serif;
    font-size: 20px;
    margin-bottom: 5px;
}

.item .description h1:hover + h4 , .description h4:hover {
    display: block;
}

.description h4 {
    position: absolute;
    top: -15px;
    left: 8px;
    padding: 3px 5px;
    display: none;
    background-color: #141414;
    color: white;
    font-family: 'Poppins' , sans-serif;
    border-radius: 5px;
    font-weight: 500;
    letter-spacing: .5px;
    font-size: 12px;
}

.item .description p {
    font-family: 'Mulish' , sans-serif;
    font-size: 13px;
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

.sign {
    font-family: 'Poppins' , sans-serif;
    width: 100%;
    text-align: center;
    font-size: 20px;
}

.date {
    padding: 5px 10px;
    background-color: rgb(255, 64, 64);
    color: white;
    font-family: 'Mulish' , sans-serif;
    position: absolute;
    top: -8px;
    left: -15px;
    border-radius: 10px;
    letter-spacing: 1px;
    transform: rotateZ(-20deg);
}

</style>