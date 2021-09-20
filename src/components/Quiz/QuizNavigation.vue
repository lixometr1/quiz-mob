<template>
<div class="mt-auto">
  <div class="flex mb-6 ">
    <div class="w-1/5 h-1 bg-secondary rounded-xl mx-1 overflow-hidden" v-for="i in 5" :key="i"></div>
  </div>
  <div class="flex">
    <button class="h-20 w-20 bg-gray-300 rounded-xl shadow-md flex items-center justify-center box-border">
      <img :src="arrow" alt="Arrow" class="transform rotate-180" width="20" height="7">
    </button>
    <button class="h-20 w-4/5 bg-secondary rounded-xl shadow-md flex ml-10px items-center justify-between p-5 ml-5">
      <span class="text-xl font-medium text-white">Далее</span>
      <img :src="arrow" alt="Arrow" width="20" height="7" >
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "QuizNavigation",
  data(){
    return{
      arrow: require('../../assets/arrow.svg')
    }
  }
}
</script>

<style scoped>

</style>
