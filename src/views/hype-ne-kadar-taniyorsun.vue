<template>
    <div class="main-container middle animate__animated animate__fadeInDown">
        <div class="start flex" v-if="screen=='start'">
            <h1>{{ TestTitle }}</h1>
            <p>Unutmayın önceki soruya geri dönemezsiniz!</p>
            <p>➡️ Müzikleri istediğiniz zaman sağ üstten devre dışı bırakabilirsiniz.</p>
            <p>Başlamak İçin 'Başla' Tuşun Tıklayın.</p>
            <button class="middle" v-on:click="screen='question';">Başla</button>
        </div>
        <div class="question" v-if="screen=='question'">
            <div class="title">
              <h1>{{ TestTitle }}</h1>
            </div>
            <div class="question-text flex">
              <h1><i class="fas fa-thumbtack"></i></h1>
              <p>{{ questionTurn }}-) {{ questionTitle }}</p>
            </div>
            <div class="options flex">
              <input type="radio" name="option" id="optionA" value="optionA" class="questionButtons">
              <label for="optionA" @click="changeNextButton(true)">{{ optionA }}</label>
              <input type="radio" name="option" id="optionB" value="optionB" class="questionButtons">
              <label for="optionB" @click="changeNextButton(true)">{{ optionB }}</label>
              <input type="radio" name="option" id="optionC" value="optionC" class="questionButtons">
              <label for="optionC" @click="changeNextButton(true)">{{ optionC }}</label>
              <input type="radio" name="option" id="optionD" value="optionD" class="questionButtons">
              <label for="optionD" @click="changeNextButton(true)">{{ optionD }}</label>
          </div>
          <div class="control flex">
              <button @click="refreshQuestion()" v-bind:class="checked==true ? 'enable' : 'disable'">
                  {{ questionTurn!=10 ? 'Sonraki Soru' : 'Bitir' }}
              </button>
          </div>
        </div>
        <div class="end flex ai-center animate__animated animate__tada" v-if="screen=='end'">
          <div class="photo middle">
              <img v-bind:src="resultImage" v-bind:alt="resultTitle">
          </div>
          <div class="description">
              <h1>{{ resultTitle }}</h1>
              <p>{{ resultDescription }}</p>
              <p style="margin-top: 10px;" class="bold">{{ totalPoint }} Doğru yaptın.</p>
              <router-link to="/testler" class="middle">Testlere Dön</router-link>
          </div>
      </div>
      <div class="sound middle" @click="openCloseMusic()">
        <i class="fas fa-volume-up" v-if="musicState"></i>
        <i class="fas fa-volume-mute" v-else></i>
        <audio autoplay="true" controls="true" loop id="ThemeSong" style="display: none;">
            <source src="./../assets/sunshine.mp3" type="audio/mpeg">
            <source src="./../assets/sunshine.mp3" type="audio/ogg">
        </audio>
      </div>
    </div>  
</template>

<script>
import test from './../jsons/hype-ne-kadar-tanıyorsun.json';
export default {
    name:'hype-ne-kadar-tanıyorsun',
    data(){
        return{
            screen:'start',
            TestTitle:'',
            questionTurn:0,
            questionTitle:'',
            checked:true,
            questions:[],
            answers:[],
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            resultTitle:'',
            resultDescription:'',
            resultImage:'',
            totalPoint:0,
            musicState:true,
            audioElement:null,
        }
    },
    created(){
        this.TestTitle = test.title;
        this.questions = test.questions;
        
        this.refreshQuestion();
        document.title = "Hype'ı Ne Kadar Tanıyorsun? - KatmanNeDio?";
    },
    mounted(){
        this.audioElement = document.getElementById("ThemeSong");
        this.audioElement.volume = 0.1;
    },
    methods:{
        refreshQuestion(){
            if(this.checked == true && this.questionTurn!=10)
            {
                this.questionTitle = this.questions[this.questionTurn].questionText;
                this.optionA = this.questions[this.questionTurn].optionA;
                this.optionB = this.questions[this.questionTurn].optionB;
                this.optionC = this.questions[this.questionTurn].optionC;
                this.optionD = this.questions[this.questionTurn].optionD;
                this.questionTurn++;
                this.checked=false;
                this.giveAnswer();
                this.unCheckButtons();
            }
            else if(this.questionTurn==10)
            {
                this.screen = 'end';
                this.giveAnswer();
                this.calculatePoints();
                this.theEnd();
            }
        },
        unCheckButtons(){
            let list = document.getElementsByClassName('questionButtons');
            let item;
            for(item of list)
            {
                item.checked = false;
            }
        },
        giveAnswer(){
            let list = document.getElementsByClassName('questionButtons');
            let item;
            for(item of list)
            {
                if(item.checked==true)
                {
                    this.answers.push(item.id);
                }
            }
        },
        changeNextButton(value){
            this.checked = value;
        },
        calculatePoints(){
            for(let i=0; i<this.answers.length; i++)
            {
                if(test.questions[i].trueOption==this.answers[i])
                {
                    this.totalPoint++;
                }
            }
        },
        theEnd(){
            let index;
            if(this.totalPoint>=0 && this.totalPoint<=3)
            {
                index=0;
            }
            else if(this.totalPoint>=4 && this.totalPoint<=7)
            {
                index=1;
            }
            else if(this.totalPoint>=8 && this.totalPoint<=10)
            {
                index=2;
            }
            this.resultTitle = test.result[index].title;
            this.resultDescription = test.result[index].description;
            this.resultImage = test.result[index].image;
        },
        openCloseMusic(){

            if(this.musicState)
            {
                this.audioElement.pause();
                this.musicState=false;
            }
            else
            {
                this.audioElement.play();
                this.musicState=true;
            }

        }
    }
}
</script>

<style scoped>

.main-container {
    width: 100%;
    height: 100vh;
    position: relative;
}

.start {
    width: 450px;
    height: auto;
    padding: 25px;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.342);
    background-color: rgb(228, 228, 228);
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.start h1 {
    text-align: center;
    font-family: 'Mulish' , sans-serif;
    margin-bottom: 20px;
}

.start p {
    font-family: 'Poppins' , sans-serif;
    margin-bottom: 10px;
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

.question {
    width: 700px;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.342);
    background-color: rgb(228, 228, 228);
    padding: 25px;
}

.title {
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
}

.title h1 {
    font-family: 'Mulish' , sans-serif;
}

.question-text {
    width: 100%;
    padding: 10px 0px;
    text-align: start;
}

.question-text h1 {
    font-size: 50px;
    margin-right: 25px;
}

.question-text p {
    font-family: 'Poppins' , sans-serif;
}

.options {
    width: 100%;
    padding: 10px 0px;
    flex-direction: column;
    border-top: 1px solid rgb(170, 170, 170);
    border-bottom: 1px solid rgb(170, 170, 170);
}

.options input {
    display: none;
}

.options input:checked + label {
    background-color: #736cff;
}

.options label {
    font-family: 'Poppins' , sans-serif;
    width: 100%;
    height: 45px;
    margin: 5px 0px;
    border: 2px solid #6c63ff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    cursor: pointer;
    transition: all .2s ease;
}

.options label:hover {
    background-color: #6c63ff;
}

.control {
    width: 100%;
    justify-content: flex-end;
    margin-top: 15px;
}

.control button {
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    font-family: 'Poppins' , sans-serif;
    letter-spacing: 1px;
    user-select: none;
}

.enable {
    background-color: #6c63ff !important;
    color: white !important;
    cursor: pointer !important;
}

.disable {
    background-color: #9e99ff !important;
    color: black !important;
    cursor: no-drop !important;
}

.end {
    width: 900px;
    padding: 25px;
    flex-direction: column;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.342);
    background-color: rgb(228, 228, 228);
    position: relative;
}

.end .photo img {
    width: 60%;
}

.end .description {
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

.bold {
    font-weight: bold;
}

.sound {
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: rgb(228, 228, 228);
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    cursor: pointer;
}

</style>