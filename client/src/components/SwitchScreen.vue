<template>
  <div class="switch-screen middle animate__animated animate__fadeIn"  v-bind:style="'background-color:'+switchScreenColor+'; border-radius:'+radiusValue+'%;'">
        <h1>{{switchScreenTimer}}</h1>
        <audio autoplay="true" controls="true" style="display: none;">
          <source src="./../assets/ticktack.mp3" type="audio/mpeg">
          <source src="./../assets/ticktack.mp3" type="audio/ogg">
        </audio>
    </div>
</template>

<script>
export default {
    name:'SwitchScreen',
    props:[
    ],
    data()
    {
        return{
            switchScreenColor:'#746cff',
            switchScreenTimer:3,
            radiusValue:50,
        }
    },
    created(){
        setTimeout(() => {
            this.switchScreenTimer=2;
            this.radiusValue=25;
            this.switchScreenColor="#3a2fff";
        }, 1200);
        setTimeout(() => {
            this.switchScreenTimer=1;
            this.radiusValue=50;
            this.switchScreenColor="#746cff";
        }, 2200);
    }
}
</script>

<style scoped>

.switch-screen {
    width: 300px;
    height: 300px;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.2);
    transition: all .3s ease;
    color: white;
    font-family: 'Alfa Slab One', cursive;
    font-size: 60px;
}

</style>