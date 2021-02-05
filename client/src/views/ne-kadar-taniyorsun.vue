<template>
    <div class="main-container middle animate__animated animate__fadeInDown" v-if="test != null">
      <StartScreen :TestTitle="TestTitle" :clickEvent="startTest" :haveMusic="true" v-if="screen=='start'" />
      <SwitchScreen v-if="screen=='switchScreen'" />
      <Question :TestTitle="TestTitle" :questionTurn="questionTurn" :questionTitle="questionTitle" :optionA="optionA" :optionB="optionB" :optionC="optionC" :optionD="optionD" :changeNextButton="changeNextButton" :checked="checked" :timeMinuteValue="timeMinuteValue" :timeSecondValue="timeSecondValue" :refreshQuestion="refreshQuestion" v-if="screen=='question'" />
      <EndScreen :lastTime="lastTime" :resultDescription="resultDescription" :resultImage="resultImage" :resultTitle="resultTitle" :totalPoint="totalPoint" v-if="screen=='end'" />
      <div class="sound ai-center">
        <i class="fas fa-volume-up"></i>
        <audio autoplay="true" controls="true" loop>
            <source :src="getSongPath()" type="audio/mpeg">
            <source :src="getSongPath()" type="audio/ogg">
        </audio>
      </div>
    </div>  
</template>

<script>
import StartScreen from './../components/StartScreen.vue'
import EndScreen from './../components/EndScreen.vue'
import Question from './../components/Question.vue'
import SwitchScreen from './../components/SwitchScreen.vue'

export default {
    name:'ne-kadar-tanıyorsun',
    components:{
        StartScreen,
        EndScreen,
        Question,
        SwitchScreen
    },
    data(){
        return{
            test: null,
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
            timeSecondValue:0,
            timeMinuteValue:0,
            counter:null,
            lastTime:'',
            switchScreenTimer:0,
            switchScreenColor:'#4595d0',
        }
    },
    async created(){
        this.test = (await import("../jsons/" + this.$route.params.name + "-ne-kadar-tanıyorsun")).default;
        this.TestTitle = this.test.title;
        this.questions = this.test.questions;

        this.refreshQuestion();
        document.title = this.test.pageTitle;
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
                this.changeNextButton(false);
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
                if(this.test.questions[i].trueOption==this.answers[i])
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
            this.resultTitle = this.test.result[index].title;
            this.resultDescription = this.test.result[index].description;
            this.resultImage = this.test.result[index].image;
        },
        startTest(){
            this.screen='switchScreen';
            setTimeout(() => {
                this.screen='question';
                this.counter = setInterval(this.timeCounter,1000)
            }, 3000);
        },
        timeCounter(){
            this.timeSecondValue++;
            if(this.timeSecondValue==60)
            {
                this.timeSecondValue=0;
                this.timeMinuteValue++;
            }
        },
        getSongPath() {
            return require(`./../assets/${this.test.songFile}`);
        }
    }
}
</script>

<style scoped>

@import url('./../css/testPage.css');

.main-container {
    width: 100%;
    height: 100vh;
    position: relative;
}

</style>