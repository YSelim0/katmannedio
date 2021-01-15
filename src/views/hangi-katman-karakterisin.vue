<template>
  <div class="container middle">
      <div class="start flex" v-if="screen=='start'">
          <h1>{{ TestTitle }}</h1>
          <p>Unutmayın önceki soruya geri dönemezsiniz!</p>
          <p>Başlamak İçin 'Başla' Tuşun Tıklayın.</p>
          <button class="middle" v-on:click="screen='question';">Başla</button>
      </div>
      <div class="question" v-if="screen=='question'">
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
              <button @click="refreshQuestion()" v-bind:class="checked==true ? 'enable' : 'disable'">
                  {{ questionTurn!=10 ? 'Sonraki Soru' : 'Bitir' }}
              </button>
          </div>
      </div>
      <div class="end flex ai-center" v-if="screen=='end'">
          <div class="photo middle">
              <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/120456708_802231387257428_3849459111948069762_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=-WcxHGggigwAX-4-LMb&se=7&tp=1&oh=6a4a0bc16bf88dbff9253aae42e6f697&oe=6029FD7A&ig_cache_key=MjQxMTg1MzY0ODQ2NzI0NzcwNw%3D%3D.2" alt="">
          </div>
          <div class="description">
              <h1>Çağrı Ergün !</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur distinctio modi repudiandae doloribus fugiat ipsa illo corporis. Eaque, qui maxime!</p>
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
        }
    },
    created(){
        this.TestTitle = test.title;
        this.questions = test.questions;
        
        this.refreshQuestion();
        
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
                this.unCheckButtons();
            }
            else if(this.questionTurn==10)
            {
                this.screen = 'end';
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
        }
    }
}
</script>

<style scoped>

.container {
    width: 100%;
    height: 100vh;
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

.start {
    width: 450px;
    padding: 25px;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.342);
    background-color: rgb(228, 228, 228);
    flex-direction: column;
    align-items: center;
}

.start h1 {
    font-family: 'Mulish' , sans-serif;
    font-size: 30px;
    margin-bottom: 5px;
}

.start p {
    font-family: 'Poppins' , sans-serif;
    margin-bottom: 15px;
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

.end {
    width: 900px;
    padding: 25px;
    flex-direction: column;
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.342);
    background-color: rgb(228, 228, 228);
}

.end .photo img {
    width: 80%;
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

</style>