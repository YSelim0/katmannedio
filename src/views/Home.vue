<template>
  <div class="home">

    <div class="container flex">
      <div class="welcome middle">
        <div class="message">
          <h1>KatmanNeDio?</h1>
          <p>Merhabalar, forumumuza hoşgeldiniz. İçeride çeşitli testler ve eğlenceli içerikler bulunuyor. İyi Eğlenceler!</p>
        </div>
      </div>
      <div class="products middle">

        <div class="card animate__animated animate__fadeIn">
          <div class="card-header">
            <img src="./../assets/question.svg" alt="question">
            <h4>Testler</h4>
          </div>
          <div class="card-body">
            <p>Testler, sizi eğlendirebilicek sorular içerir. İçeriklere hemen göz atın.</p>
          </div>
          <div class="card-footer">
            <router-link to="/testler" class="middle">Gözat</router-link>
          </div>
        </div>

        <div class="card animate__animated animate__fadeIn">
          <div class="card-header">
            <img src="./../assets/crew.svg" alt="crew">
            <h4>Emeği Geçenler</h4>
          </div>
          <div class="card-body">
            <p>Bütün bu yapıma katkıda bulunan herkesi bu kısımdan takip edebilirsiniz.</p>
          </div>
          <div class="card-footer">
            <router-link to="/emegi-gecenler" class="middle">Gözat</router-link>
          </div>
        </div>

        <div class="card animate__animated animate__fadeIn">
          <div class="card-header">
            <img src="./../assets/hype.svg" alt="hype">
            <h4>Hype</h4>
          </div>
          <div class="card-body">
            <p>Hype hakkında daha fazla bilgi edinmek için.</p>
          </div>
          <div class="card-footer">
            <a href="http://aynisinemalar.com/" class="middle" target="blank">Gözat</a>
          </div>
        </div>

      </div>
    </div>
        
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {

    }
  },
  created(){
    document.title = "Anasayfa - KatmanNeDio?";
  },
  methods:{

  }
}
</script>

<style scoped>

.container {
  width: 100%;
  height: 100vh;
  flex-direction: column;
}

.welcome {
  width: 100%;
  padding: 150px 0px;
  background-image: url('./../assets/banner.jpg');
  /*background-image: url('https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');*/
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.message {
  width: 600px;
  padding: 25px;
  background-color: rgba(108, 99, 255, 0.1);
  backdrop-filter: blur(10px);
  text-align: center;
  color: white;
  border-radius: 3px;
}

.message h1 {
  font-family: 'Mulish' , sans-serif;
  font-size: 40px;
  margin-bottom: 25px;
}

.message p {
  font-family: 'Poppins' , sans-serif;
  font-size: 15px;
}

.products {
  width: 100%;
  height: 900px;
  flex-wrap: wrap;
}

.card {
  width: 350px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card .card-header {
  text-align: center;
  margin-bottom: 10px;
}

.card-header img {
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
}

.card-header h4 {
  font-size: 20px;
  font-family: 'Mulish' , sans-serif;
}

.card-body {
  font-family: 'Poppins' , sans-serif;
  font-size: 15px;
  margin-bottom: 10px;
  text-align: center;
}

.card-footer {
  width: 100%;
}

.card-footer a {
  width: 100%;
  height: 40px;
  background-color: #6c63ff;
  color: white;
  font-family: 'Poppins' , sans-serif;
  border-radius: 2px;
  transition: all .2s ease;
}

.card-footer a:hover {
  background-color: #766fff;
}

</style>