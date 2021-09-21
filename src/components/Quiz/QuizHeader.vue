<template>
<div class="flex mb-10">
  <h1 class="text-header text-white font-extrabold leading-header	"><slot/></h1>
  <MarkSVG  class="absolute right-5 top-5 cursor-pointer	" @click="$emit('hideModalHandler')" />
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
