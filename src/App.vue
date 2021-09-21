<template>
  <div id="app">
    <div class="fixed bottom-0 right-0 flex flex-col items-end	">
      <QuizModal v-if="showQuiz" :hideModalHandler="hideModalHandler"/>
      <QuizButton @showModalHandler="showModalHandler" class="bg-primary" v-else>
        <HomeSVG slot="img"/>
        <span slot="txt">
        Подобрать квартиру
      </span>
      </QuizButton>
      <QuizButton class=" bg-accept">
        <WhatSVG slot="img"/>
        <span slot="txt">
        Написать в Ватсапп
      </span>
      </QuizButton>
    </div>
  </div>
</template>

<script>
import QuizModal from '@/components/Quiz/QuizModal'
import QuizButton from "@/components/QuizButton"
import WhatSVG from '@/assets/whatsapp.svg'
import HomeSVG from '@/assets/home.svg'

export default {
  name: 'App',
  components: {
    QuizButton,
    QuizModal,
    HomeSVG,
    WhatSVG
  },
  data() {
    return {
      showQuiz: false,
      home: require('./assets/home.svg'),
      whatsapp: require('./assets/whatsapp.svg')
    }
  },
  methods: {
    showModalHandler() {
      this.showQuiz = true
    },
    hideModalHandler() {
      this.showQuiz = false
    }
  }
}
</script>
<style src="./assets/index.css">
