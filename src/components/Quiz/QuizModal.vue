<template>
  <div class="fixed p-3 sm:w-full sm:h-screen max-h-screen inset-0 flex flex-col bg-primary">
    <QuizSlider class="h-full">
<!--      <QuizBody class="flex flex-col">-->
<!--        <QuizHeader :mark="mark" @hideModalHandler="hideModalHandler">Какой тип квартиры вас интересует?</QuizHeader>-->
<!--        <QuizCheckbox v-for="room in form.rooms" :key="room.id" :value="room.value">-->
<!--          {{ room.name }}-->
<!--        </QuizCheckbox>-->
<!--        <RangeSlider/>-->
<!--      </QuizBody>-->
      <QuizBody>
        <QuizHeader :mark="mark" @hideModalHandler="hideModalHandler">Стоимость квартиры</QuizHeader>
        <RangeSlider class="my-auto"/>
      </QuizBody>
    </QuizSlider>
    <QuizNavigation/>
  </div>
</template>

<script>
import QuizHeader from "@/components/Quiz/QuizHeader";
import QuizNavigation from "@/components/Quiz/QuizNavigation";
import QuizSlider from "@/components/Quiz/QuizSlider";
import QuizBody from "@/components/Quiz/QuizBody";
import RangeSlider from "@/components/Quiz/RangeSlider";

export default {
  name: "QuizModal",
  components: {RangeSlider,  QuizBody, QuizSlider, QuizNavigation, QuizHeader},
  props: ['hideModalHandler'],
  data() {
    return {
      mark: require('../../assets/mark.svg'),
      arrow: require('../../assets/arrow.svg'),
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
      }
    }
  }
}
</script>

<style>

</style>
