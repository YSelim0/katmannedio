<template>
  <div class="container middle animate__animated animate__fadeInDown">
      <div class="start flex" v-if="screen=='start'">
          <h1>{{ TestTitle }}</h1>
          <p>Unutmayın önceki soruya geri dönemezsiniz!</p>
          <p>Başlamak İçin 'Başla' Tuşun Tıklayın.</p>
          <button class="middle" @click="startTest()">Başla</button>
      </div>
      <div class="switch-screen middle animate__animated animate__fadeIn" v-if="screen=='switchScreen'" v-bind:style="'background-color:'+switchScreenColor+';'">
            <h1>{{switchScreenTimer}}</h1>
            <audio autoplay="true" controls="true" id="switchTimerAudio" style="display: none;">
                <source src="./../assets/ticktack.mp3" type="audio/mpeg">
                <source src="./../assets/ticktack.mp3" type="audio/ogg">
            </audio>
        </div>
      <div class="question animate__animated animate__zoomInDown" v-if="screen=='question'">
          <div class="title">
              <h1>{{ TestTitle }}</h1>
          </div>
          <div class="question-text flex">
              <h1><i class="fas fa-thumbtack"></i></h1>
              <p>{{ this.questionTurn }}-) {{ questionTitle }}</p>
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
              <h4>Geçen Süre = {{timeMinuteValue+'dk '+timeSecondValue+'sn'}}</h4>
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
              <h1>{{ resultTitle }} !</h1>
              <p>{{ resultDescription }}</p>
              <p style="margin-top: 10px;">{{ lastTime }}</p>
              <p class="note">NOT = Sonuç yüksek ihtimalle doğru cevap vermiyor, zaten verse katman yapımı olmazdı.</p>
              <router-link to="/testler" class="middle">Testlere Dön</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import test from './../jsons/hangi-katman-karakterisin.json';
export default {
    name:'hangi-katman-karakterisin',
    data(){
        return {
            start:false,
            questions:[],
            answers:[],
            TestTitle:'',
            questionTitle:'',
            questionTurn:0,
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            checked:true,
            screen:'start',
            resultTitle:'',
            resultDescription:'',
            resultImage:'',
            totalPoint:0,
            timeSecondValue:0,
            timeMinuteValue:0,
            counter:null,
            lastTime:'',
            switchScreenTimer:0,
            switchScreenColor:'#4595d0',
        }
    },
    created(){
        this.TestTitle = test.title;
        this.questions = test.questions;
        
        this.refreshQuestion();
        document.title = "Hangi Katman Karakterisin? - KatmanNeDio?";
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
                this.lastTime = 'Toplam '+this.timeMinuteValue+'dk '+this.timeSecondValue+'sn\'de bitirdiniz.';
            }
        },
        changeNextButton(value){
            this.checked = value;
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
        calculatePoints(){
            for(let i=0; i<this.answers.length; i++)
            {
                let choose = String(this.answers[i]);
                if(choose=="optionA")
                {
                    let item;
                    for(item of this.questions)
                    {
                        if(item.id==(i+1))
                        {
                            this.totalPoint += item.optionAvalue;
                        }
                    }
                }
                else if(choose=="optionB")
                {
                    let item;
                    for(item of this.questions)
                    {
                        if(item.id==(i+1))
                        {
                            this.totalPoint += item.optionBvalue;
                        }
                    }
                }
                else if(choose=="optionC")
                {
                    let item;
                    for(item of this.questions)
                    {
                        if(item.id==(i+1))
                        {
                            this.totalPoint += item.optionCvalue;
                        }
                    }
                }
                else if(choose=="optionD")
                {
                    let item;
                    for(item of this.questions)
                    {
                        if(item.id==(i+1))
                        {
                            this.totalPoint += item.optionDvalue;
                        }
                    }
                }
            }
        },
        theEnd(){
            let persons = test.results;
            let index;
            if(this.totalPoint<=100)
            {
                index=0;
            }
            else if(this.totalPoint>=105 && this.totalPoint<135)
            {
                index=1;
            }
            else if(this.totalPoint>=135 && this.totalPoint <165)
            {
                index=2;
            }
            else if(this.totalPoint>=165)
            {
                index=3;
            }

            this.resultTitle = persons[index].person;
            this.resultDescription = persons[index].description;
            this.resultImage = persons[index].image;
        },
        startTest(){
            this.screen='switchScreen';
            this.switchScreenTimer=3;
            this.switchScreenColor="#746cff";
            setTimeout(() => {
                this.switchScreenTimer=2;
                this.switchScreenColor="#3a2fff";
            }, 1200);
            setTimeout(() => {
                this.switchScreenTimer=1;
                this.switchScreenColor="#746cff";
            }, 2200);
            setTimeout(() => {
                this.screen='question';
                this.counter = setInterval(this.timeCounter,1000)
            }, 3500);
        },
        timeCounter(){
            this.timeSecondValue++;
            if(this.timeSecondValue==60)
            {
                this.timeSecondValue=0;
                this.timeMinuteValue++;
            }
        }
    }
}
</script>

<style scoped>

@import url('./../css/testPage.css');

.container {
    width: 100%;
    height: 100vh;
}

</style>