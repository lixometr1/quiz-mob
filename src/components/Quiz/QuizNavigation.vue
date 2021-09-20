<template>
  <div class="mt-auto" v-if="current!==6">
    <div class="flex mb-6 flex-col">
      <div class="flex justify-between">
        <span :class="`w-1/5 text-white text-sm font-bold text-center`+(current!==i?' opacity-0':'')" v-for="i in 5"
              :key="i">
          {{ i }} из 5
        </span>
      </div>
      <div class="flex justify-between">
        <div :class="'w-1/5 h-2 rounded-xl mx-1 ' +(current>=i?'bg-secondary':'bg-white')" v-for="i in 5" :key="i"/>
      </div>
    </div>
    <div class="flex flex-col" v-if="current>=5">
      <button class="h-65px w-5/5 bg-secondary rounded-xl shadow-md flex items-center justify-between p-5"
              @click="$emit('next')">
        <span class="text-xl font-medium text-white">Отправить</span>
      </button>
      <p class="text-white text-xs font-medium mt-4">Нажимая на кнопку, вы даете согласие на обработку персональных
        данных и соглашаетесь c политикой конфиденциальности</p>
    </div>
    <div class="flex" v-else>
      <button
          :class="'h-65px w-65px min-w-65px  rounded-xl shadow-md flex items-center justify-center '+(current>1?'bg-secondary':'bg-gray-300')"
          :disabled="current===1" @click="$emit('previous')">
        <ArrowSVG class="transform rotate-180"/>
      </button>
      <button class="h-65px w-4/5 bg-secondary rounded-xl shadow-md flex items-center justify-between p-5 ml-3"
              @click="$emit('next')">
        <span class="text-xl font-medium text-white">Далее</span>
        <ArrowSVG/>
      </button>
    </div>
  </div>
</template>

<script>
import ArrowSVG from '@/assets/arrow.svg'

export default {
  name: "QuizNavigation",
  props: ['current'],
  components: {ArrowSVG},
  data() {
    return {
      arrow: require('../../assets/arrow.svg'),
    }
  }
}
</script>

<style scoped>

</style>
