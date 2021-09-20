<template>
<div>
  <div>
    <span>1 из 5</span>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <button><img :src="arrow" alt="Arrow"></button>
  <button>Далее <img :src="arrow" alt="Arrow"></button>
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