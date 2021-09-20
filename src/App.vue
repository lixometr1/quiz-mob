<template>
  <div id="app">
    <QuizButton @click="showModalHandler"/>
    <QuizModal v-show="showQuiz"/>
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
      showQuiz:false
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
