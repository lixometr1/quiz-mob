<template>
<div class="mt-10">
  <div class="mb-11 bg-white p-3 rounded-xl text-left">
    <span class="text-gray-900 text-lg font-bold ml-1">{{value}}</span> <span class="text-gray-400 text-lg font-bold">₽</span>
  </div>
  <label  class="label">
    <input type="range" min="0" max="1000000" v-model="value" ref="slider" class="input">
  </label>
</div>
</template>

<script>
export default {
  name: "RangeSlider",
  data(){
    return{
      value:666666
    }
  },
  watch:{
    value:function () {
      const slider=this.$refs.slider
      const percent = (slider.value / slider.max)*100;
      slider.style.background = `linear-gradient(to right, #E40505 ${percent}%, white ${percent}%)`;
    }
  },
  mounted() {
    const slider=this.$refs.slider
    const percent = (slider.value / slider.max)*100;
    slider.style.background = `linear-gradient(to right, #E40505 ${percent}%, white ${percent}%)`;
  }
}
</script>

<style scoped>
.input[type="range"]{
  position: relative;
  -webkit-appearance: none;
  -moz-appearance:initial;
  display: block;
  width: 100%;
  height: 8px;
  background-color: #E40505;
  border-radius: 8px;
  outline: none;
  z-index: 1;

}

.label::before{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #E40505;
  transform: translate(45px, -6px);
  left: 0;
}

.label::after{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transform: translate(-44.5px, -14px);
  right: 0;
}

.input[type="range"]::-webkit-slider-runnable-track{
  -webkit-appearance: none;
  height: 8px;
}

.input[type="range"]::-moz-range-track{
  -moz-appearance: none;
  height: 8px;
}

.input[type="range"]::-ms-track{
  appearance: none;
  height: 8px;
}

.input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance: none;
  height: 30px;
  width: 30px;
  background-color: #E40505;
  border-radius: 25%;
  cursor: pointer;
  transform:translate(0,-11px);
  border: none;
}

.input[type="range"]::-moz-range-thumb{
  -webkit-appearance: none;
  height: 30px;
  width: 30px;
  background-color: #E40505;
  border-radius: 25%;
  cursor: pointer;
  border: none;
}

.input[type="range"]::-ms-thumb{
  appearance: none;
  height: 30px;
  width: 30px;
  background-color: #E40505;
  border-radius: 25%;
  cursor: pointer;
  border: none;
}
</style>
