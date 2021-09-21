<template>
  <div class="">
    <label class="font-medium	text-white flex flex-col">
      <span class="font-medium ">Мы готовы рассказать о них! На какой номер вам позвонить?</span>
      <input type="tel" class="h-14 mt-2 rounded-md text-black p-2 font-medium text-gray-500 text-lg	font-bold	"
             value="+7"
             v-model="tel"
             v-mask="'+7(###)-##-##'" placeholder="+7(777)-77-77">
    </label>
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
  data(){
    return{
     tel:''
    }
  }
}
</script>

<style scoped>

</style>
