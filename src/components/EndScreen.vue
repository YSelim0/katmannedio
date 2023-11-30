<template>
  <div class="end flex ai-center animate__animated animate__tada" :style="'width:'+containerWidth+'px'">
      <div class="photo middle">
        <img v-bind:src="resultImage" v-bind:alt="resultTitle">
      </div>
      <div class="description">
        <h1>{{ resultTitle }}</h1>
        <p>{{ resultDescription }}</p>
        <p style="margin-top: 10px;" class="bold" v-if="totalPoint!=null">{{ totalPoint }} Doğru yaptın.</p>
        <p style="margin-top: 10px;">{{ lastTime }}</p>
        <router-link to="/testler" class="middle">Testlere Dön</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'EndScreen',
    props:[
        'resultImage',
        'resultTitle',
        'resultDescription',
        'totalPoint',
        'lastTime'
    ],
    data(){
        return {
            containerWidth:900,
        }
    },
    created(){
        if(window.innerWidth<1140)
        {
            this.containerWidth = 600;
        }
    }
}
</script>

<style scoped>

.end {
    width: 900px;
    padding: 25px;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    position: relative;
}

.end .photo img {
    width: 60%;
}

.end .description {
    width: 100%;
    text-align: center;
    margin-top: 20px;
}

.end .description h1 {
    font-family: 'Mulish' , sans-serif;
    margin-bottom: 15px;
}

.end .description p {
    font-family: 'Roboto' , sans-serif;
}

.note {
    text-decoration: underline;
    margin-top: 30px;
}

.end .description a {
    width: 100%;
    height: 45px;
    font-size: 23px;
    background-color: #766fff;
    color: white;
    font-family: 'Poppins' , sans-serif;
    margin-top: 20px;
    border-radius: 3px;
    transition: all .3s ease;
}

.end .description a:hover {
    background-color: #8f89ff;
}

</style>