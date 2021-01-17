<template>
  <div class="home">

    <div class="container flex">
      <div class="welcome middle">
        <div class="message">
          <h1>KatmanNeDio?</h1>
          <p>Merhabalar, forumumuza hoşgeldiniz. İçeride çeşitli testler ve eğlenceli içerikler bulunuyor. İyi Eğlenceler!</p>
          <p>Not: Yakın zamanda içerikler çoğaltılacaktır.</p>
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
            <p>Bütün bu yapıma katkıda herkesi bu kısımdan takip edebilirsiniz.</p>
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
  height: 400px;
  background-image: url('https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.message {
  width: 600px;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.7);
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
  box-shadow: 2px 2px 30px 10px rgba(0, 0, 0, 0.274);
  padding: 20px;
  margin: 20px;
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