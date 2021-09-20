<template>
<div class="flex mb-4">
  <h1 class="text-4xl text-white font-extrabold"><slot/></h1>
  <MarkSVG  class="absolute right-5 top-5" @click="$emit('hideModalHandler')" />
</div>
</template>

<script>
import MarkSVG from '@/assets/mark.svg'
export default {
  name: "QuizHeader",
  components:{
    MarkSVG
  }
}
</script>

<style scoped>

</style>
