<template>
  <div class="question animate__animated animate__zoomInDown">
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
          <h4>Geçen Süre = {{timeMinuteValue+'dk '+timeSecondValue+'sn'}}</h4>
          <button @click="refreshQuestion" v-bind:class="checked==true ? 'enable' : 'disable'">
            {{ questionTurn!=10 ? 'Sonraki Soru' : 'Bitir' }}
          </button>
      </div>
    </div>
</template>

<script>
export default {
    name:'question',
    props:[
        'TestTitle',
        'questionTurn',
        'questionTitle',
        'changeNextButton',
        'optionA',
        'optionB',
        'optionC',
        'optionD',
        'timeMinuteValue',
        'timeSecondValue',
        'refreshQuestion',
        'checked'
    ],
}
</script>

<style scoped>

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
    user-select: none;
}

.options label:hover {
    background-color: #6c63ff;
}

.control {
    width: 100%;
    justify-content: space-between;
    align-items: center;
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

.control h4 {
    font-family: 'Poppins' , sans-serif;
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

</style>