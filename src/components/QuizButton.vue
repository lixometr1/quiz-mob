<template>
  <div class="rounded-xl flex flex-col w-36 h-36 border-box items-center py-3 pb-2 shadow-md" @click="$emit('showModalHandler')">
    <slot name="img"/>
    <p class="text-white font-bold text-center mt-3 leading-4"><slot name="txt"/></p>
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
