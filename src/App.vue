<template>
  <div id="app">
    <QuizButton @showModalHandler="showModalHandler" :img="home" class="bg-primary">
      Подобрать квартиру
    </QuizButton>
    <QuizButton :img="whatsapp" class="bg-accept">
      Написать в Ватсапп
    </QuizButton>
    <QuizModal v-show="showQuiz" :hideModalHandler="hideModalHandler"/>
  </div>
</template>

<script>
import QuizModal from '@/components/Quiz/QuizModal'
import QuizButton from "@/components/QuizButton"

export default {
  name: 'App',
  components: {
    QuizButton,
    QuizModal
  },
  data(){
    return{
      showQuiz:true,
      home: require('./assets/home.svg'),
      whatsapp: require('./assets/whatsapp.svg')
    }
  },
  methods:{
    showModalHandler(){
      this.showQuiz=true
    },
    hideModalHandler(){
      this.showQuiz=false
    }
  }
}
</script>
<style src="./assets/index.css">
