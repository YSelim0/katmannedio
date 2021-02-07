<template>
  <div class="container middle animate__animated animate__fadeInDown">
      <StartScreen :TestTitle="TestTitle" :clickEvent="startTest" :haveMusic="true" v-if="screen=='start'" />
      <SwitchScreen v-if="screen=='switchScreen'" />
      <Question :changeNextButton="changeNextButton" :checked="checked" :questionTitle="questionTitle" :optionA="optionA" :optionB="optionB" :optionC="optionC" :optionD="optionD" :questionTurn="questionTurn" :refreshQuestion="refreshQuestion" :TestTitle="TestTitle" :timeMinuteValue="timeMinuteValue" :timeSecondValue="timeSecondValue" v-if="screen=='question'" />
      <EndScreen :lastTime="lastTime" :resultDescription="resultDescription" :resultImage="resultImage" :resultTitle="resultTitle" v-if="screen=='end'" />
      <div class="sound ai-center" @click="startStopMusic">
        <i class="fas fa-volume-up" v-if="musicState"></i>
        <i class="fas fa-volume-mute" v-else></i>
        <audio autoplay="true" controls="true" loop id="ThemeSong">
            <source src="./../assets/yaryar.mp3" type="audio/mpeg">
            <source src="./../assets/yaryar.mp3" type="audio/ogg">
        </audio>
      </div>
      <div class="add-image add-image-left" v-if="addImagePath!=''">
          <img :src="addImagePath" alt="add-image">
      </div>
      <div class="add-image add-image-right" v-if="addImagePath!=''">
          <img :src="addImagePath" alt="add-image">
      </div>
  </div>
</template>

<script>
import test from './../jsons/hangi-katman-karakterisin.json';
import StartScreen from './../components/StartScreen.vue'
import EndScreen from './../components/EndScreen.vue'
import Question from './../components/Question.vue'
import SwitchScreen from './../components/SwitchScreen.vue'
export default {
    name:'hangi-katman-karakterisin',
    components:{
        StartScreen,
        EndScreen,
        Question,
        SwitchScreen
    },
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
            sametCounter:0,
            meteCounter:0,
            kegriCounter:0,
            batuhanCounter:0,
            musicState:true,
            musicElement:null,
            addImagePath:''
        }
    },
    created(){
        this.TestTitle = test.title;
        this.questions = test.questions;
        
        this.refreshQuestion();
        document.title = "Hangi Katman Karakterisin? - KatmanNeDio?";
    },
    mounted(){
        this.musicElement = document.getElementById('ThemeSong');
        this.musicElement.volume = 0.03;
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
                let person = test.questions[i].[this.answers[i]+'person'];
                if(person!="hepsi")
                {
                    this.[person.toLowerCase()+'Counter']++;
                }
                else
                {
                    this.kegriCounter++;
                    this.sametCounter++;
                    this.batuhanCounter++;
                    this.meteCounter++;
                }
            }
        },
        theEnd(){
            let persons = test.results;
            let index;
            if(this.kegriCounter>this.batuhanCounter && this.kegriCounter>this.sametCounter && this.kegriCounter>this.meteCounter)
            {
                index=3;
            }
            else if(this.batuhanCounter>this.kegriCounter && this.batuhanCounter>this.sametCounter && this.batuhanCounter>this.meteCounter){
                index=0;
            }
            else if(this.sametCounter>this.batuhanCounter && this.sametCounter>this.kegriCounter && this.sametCounter>this.meteCounter)
            {
                index=2;
            }
            else if(this.meteCounter>this.batuhanCounter && this.meteCounter>this.sametCounter && this.meteCounter>this.kegriCounter)
            {
                index=1;
            }
            else
            {
                let esitler = [];
                let puanlar = [this.kegriCounter,this.batuhanCounter,this.sametCounter,this.meteCounter];
                
                for(let i=0; i<puanlar.length; i++)
                {
                    for(let j=i+1; j<puanlar.length; j++)
                    {
                        if(puanlar[i]==puanlar[j])
                        {
                            let kisi = this.personChooser(i);
                            let kisi2 = this.personChooser(j);
                            esitler.push({
                                puan:puanlar[i],
                                kisiler:[
                                    kisi,
                                    kisi2
                                ]
                            });
                        }
                    }
                }
                let esitIndex=0;
                let esitlerinPuanlari = [];
                for(let i=0; i<esitler.length; i++)
                {
                    esitlerinPuanlari.push(esitler[i].puan);
                }
                esitlerinPuanlari.sort();
                esitlerinPuanlari.reverse();
                for(let i=0; i<esitler.length; i++)
                {
                    if(esitler[i].puan==esitlerinPuanlari[0])
                    {
                        esitIndex=i;
                        break;
                    }
                }
                let kazananKisi = esitler[esitIndex].kisiler[Math.floor(Math.random()*esitler[esitIndex].kisiler.length)];
                if(kazananKisi=="samet")
                    index=2;
                else if(kazananKisi=="batuhan")
                    index=0;
                else if(kazananKisi=="mete")
                    index=1;
                else if(kazananKisi=="kegri")
                    index=3;
            }
            this.resultTitle = persons[index].person;
            this.resultDescription = persons[index].description;
            this.resultImage = persons[index].image;
            this.addImagePath = persons[index].addImagePath;
        },
        personChooser(value){
            let kisi;
            if(value==0)
                kisi="kegri";
            else if(value==1)
                kisi="batuhan";
            else if(value==2)
                kisi="samet";
            else if(value==3)
                kisi="mete";
            return kisi;
        },
        startTest(){
            this.screen='switchScreen';
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
        },
        startStopMusic(){
            if(this.musicState)
            {
                this.musicElement.pause();
            }
            else
            {
                this.musicElement.play();
            }
            this.musicState = !this.musicState;
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
.sound {
    cursor: pointer;
}
.sound audio {
    display: none;
}

.add-image {
    width: 180px;
    height: 600px;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
}

.add-image img {
    width: 100%;
    height: 100%;
}

.add-image-left {
    left: 20px;
}

.add-image-right {
    right: 20px;
}

</style>