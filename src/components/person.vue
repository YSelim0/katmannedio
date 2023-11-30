<template>
  <div class="row animate__animated animate__bounceInLeft ai-center" v-bind:style="'animation-delay:'+(delay*0.1)+'s;'">
    <i class="fas fa-arrow-right"></i>
    <div class="--container jc-space ai-center">
        <div class="profile flex ai-center">
          <img v-bind:src="image" v-bind:alt="username">
          <h3>{{username}}</h3>
        </div>
        <p>{{role}}</p>
    </div>
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
}

.row i {
    font-size: 30px;
    position: absolute;
    z-index: -1;
}

.--container {
    width: 100%;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-left: 4px solid #6d64ff;
    transition: all .3s ease;
    margin-left: -1px;
}

.--container:hover {
    margin-left: 30px;
}

.profile img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    user-select: none;
    border-radius: 50%;
    object-fit: cover;
}

.profile h3 {
    font-family: 'Mulish' ,sans-serif;
}

.--container p {
    font-family: 'Poppins' ,sans-serif;
}

</style>