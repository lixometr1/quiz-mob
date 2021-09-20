<template>
<div class="flex mb-4">
  <h1 class="text-4xl text-white font-extrabold"><slot/></h1>
  <img :src="mark" alt="Exit" width="20" height="20" class="absolute right-4 top-4" @click="$emit('hideModalHandler')">
</div>
</template>

<script>
export default {
  name: "QuizHeader",
  props:['mark']
}
</script>

<style scoped>

</style>
