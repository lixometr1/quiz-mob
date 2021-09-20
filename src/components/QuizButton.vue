<template>
  <div class="bg-yellow rounded-xl flex flex-col bg-yellow-400 w-36 h-36 border-box items-center py-3 pb-2 shadow-md">
    <img alt="Home" :src="home" width="50px" height="50px">
    <p class="text-white font-bold text-center mt-3 leading-4">Подобрать квартиру</p>
  </div>
</template>

<script>

export default {
  name: "QuizButton",
  data(){
    return{
      home: require('../assets/home.svg')
    }
  }
}
</script>

<style>

</style>