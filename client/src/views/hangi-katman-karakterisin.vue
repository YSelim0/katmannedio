<template>
  <div class="container middle animate__animated animate__fadeInDown">
      <StartScreen :TestTitle="TestTitle" :clickEvent="startTest" :haveMusic="false" v-if="screen=='start'" />
      <SwitchScreen v-if="screen=='switchScreen'" />
      <Question :changeNextButton="changeNextButton" :checked="checked" :questionTitle="questionTitle" :optionA="optionA" :optionB="optionB" :optionC="optionC" :optionD="optionD" :questionTurn="questionTurn" :refreshQuestion="refreshQuestion" :TestTitle="TestTitle" :timeMinuteValue="timeMinuteValue" :timeSecondValue="timeSecondValue" v-if="screen=='question'" />
      <EndScreen :lastTime="lastTime" :resultDescription="resultDescription" :resultImage="resultImage" :resultTitle="resultTitle" v-if="screen=='end'" />
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
                index=0;
            else if(this.totalPoint>=105 && this.totalPoint<135)
                index=1;
            else if(this.totalPoint>=135 && this.totalPoint <165)
                index=2;
            else if(this.totalPoint>=165)
                index=3;
            this.resultTitle = persons[index].person;
            this.resultDescription = persons[index].description;
            this.resultImage = persons[index].image;
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