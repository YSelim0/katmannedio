<template>
  <div class="row animate__animated animate__bounceInLeft jc-space ai-center" v-bind:style="'animation-delay:'+(delay*0.1)+'s;'">
    <div class="profile flex ai-center">
      <img v-bind:src="image" v-bind:alt="username">
      <h3>{{username}}</h3>
    </div>
    <p>{{role}}</p>
  </div>
</template>

<script>
export default {
    name:'person',
    props:['delay', 'image', 'username', 'role'],
    data(){
        return{
        }
    },
    created(){
    },
    methods:{
    }
}
</script>

<style scoped>

.row {
    width: 100%;
    margin: 10px 0px;
    z-index: 5;
    cursor: default;
    background-color: white;
    padding: 5px 10px;
    border-radius: 7px;
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.199);
    border-left: 4px solid #6d64ff;
}

.profile img {
    width: 40px;
    margin-right: 10px;
    user-select: none;
    border-radius: 50%;
}

.profile h3 {
    font-family: 'Mulish' , sans-serif;
}

.row p {
    font-family: 'Poppins' , sans-serif;
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

</style>