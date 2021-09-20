<template>
  <div class="rounded-xl flex flex-col w-36 h-36 border-box items-center py-3 pb-2 shadow-md" @click="$emit('showModalHandler')">
    <img alt="Home" :src="img" width="50" height="50">
    <p class="text-white font-bold text-center mt-3 leading-4"><slot></slot></p>
  </div>
</template>

<script>

export default {
  name: "QuizButton",
  props:{
    img:String
  },

}
</script>

<style>

</style>
