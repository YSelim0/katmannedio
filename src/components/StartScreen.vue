<template>
  <div>
      <div class="start flex">
        <h1>{{ TestTitle }}</h1>
        <p>Unutmayın önceki soruya geri dönemezsiniz!</p>
        <p v-if="haveMusic">🎵 Müzikleri istediğiniz zaman sağ üstten devre dışı bırakabilirsiniz.</p>
        <p>Başlamak İçin 'Başla' Tuşun Tıklayın.</p>
        <button class="middle" @click="clickEvent">Başla</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'StartScreen',
    props:[
        'TestTitle',
        'clickEvent',
        'haveMusic'
    ]
}
</script>

<style scoped>

.start {
    width: 450px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
}

.start h1 {
    font-family: 'Mulish' , sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
    text-align: center;
}

.start p {
    font-family: 'Poppins' , sans-serif;
    margin-bottom: 15px;
    text-align: center;
}

.start button {
    width: 100%;
    height: 40px;
    background-color: #6c63ff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Poppins' , sans-serif;
    color: white;
    cursor: pointer;
}

.start button:hover {
    background-color: #6b63ffda;
}

</style>