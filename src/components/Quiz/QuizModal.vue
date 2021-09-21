<template>
  <div
      class="p-6 max-w-xs w-80 h-quizh max-h-full flex flex-col bg-primary overflow-hidden rounded-2xl border-box shadow-2xl relative">
    <QuizBody v-if="current===1">
      <QuizHeader @hideModalHandler="hideModalHandler">Какой тип квартиры вас интересует?</QuizHeader>
      <QuizCheckbox v-for="room in form.rooms" :key="room.id" :value="room.value" @checkedForm="checkingCheck" :checkedRooms="checkedRooms">
        {{ room.name }}
      </QuizCheckbox>
    </QuizBody>
    <QuizBody v-else-if="current===2">
      <QuizHeader @hideModalHandler="hideModalHandler">Стоимость квартиры</QuizHeader>
      <RangeSlider/>
    </QuizBody>
    <QuizBody v-else-if="current===3">
      <QuizHeader @hideModalHandler="hideModalHandler">Пусто 1</QuizHeader>
    </QuizBody>
    <QuizBody v-else-if="current===4">
      <QuizHeader @hideModalHandler="hideModalHandler">Пусто 2</QuizHeader>
    </QuizBody>
    <QuizBody v-else-if="current===5">
      <QuizHeader @hideModalHandler="hideModalHandler">Найдены квартиры по вашему запросу</QuizHeader>
      <PhoneInput/>
    </QuizBody>
    <QuizBody v-else-if="current===6">
      <QuizHeader @hideModalHandler="hideModalHandler"/>
      <QuizThanks/>
    </QuizBody>
    <QuizNavigation :current="current" @next="changeCurrent" @previous="backCurrent"/>
  </div>
</template>

<script>
import QuizNavigation from "@/components/Quiz/QuizNavigation";
import QuizBody from "@/components/Quiz/QuizBody";
import QuizHeader from "@/components/Quiz/QuizHeader";
import QuizCheckbox from "@/components/Quiz/QuizCheckbox";
import RangeSlider from "@/components/Quiz/RangeSlider";
import PhoneInput from "@/components/Quiz/PhoneInput";
import QuizThanks from "@/components/Quiz/QuizThanks";


export default {
  name: "QuizModal",
  components: {QuizThanks, PhoneInput, RangeSlider, QuizCheckbox, QuizHeader, QuizBody, QuizNavigation},
  props: ['hideModalHandler'],
  data() {
    return {
      arrow: require('../../assets/arrow.svg'),
      current: 1,
      form: {
        rooms: [
          {
            id: 1,
            name: 'Студия',
            value: 'Студия'
          },
          {
            id: 2,
            name: '1-комнатная',
            value: '1-комнатная'
          },
          {
            id: 3,
            name: '2-комнатная',
            value: '2-комнатная'
          },
          {
            id: 4,
            name: '3-комнатная',
            value: '3-комнатная'
          }]
      },
      checkedRooms: []
    }
  },
  methods: {
    changeCurrent() {
      if(this.checkedRooms.length){
        this.current++
        return
      }
      alert('Выберите кв')
    },
    backCurrent() {
      this.current--
    },
    checkingCheck(e) {
      if (e.currentTarget.checked) {
        this.checkedRooms = [...this.checkedRooms, e.target.value]
      } else {
        this.checkedRooms = this.checkedRooms.filter((el) => el !== e.target.value)
      }
    }
  }
}
</script>

<style>

</style>
