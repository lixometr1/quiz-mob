<template>
<div class="fixed p-4 sm:w-full sm:h-screen inset-0">
    <h1>Hello World</h1>
    <img :src="mark" alt="Exit" width="16px" height="16px" class="absolute">
</div>
</template>

<script>
export default {
  name: "QuizModal",
  data(){
    return{
      mark: require('../../assets/mark.svg'),
      arrow: require('../../assets/arrow.svg')
    }
  }
}
</script>

<style>

</style>