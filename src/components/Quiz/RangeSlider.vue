<template>
<div>
  <div class="mb-5 bg-white p-3 rounded-xl text-left">
    <span class="text-gray-900 text-lg font-bold ml-1">{{value}}</span> <span class="text-gray-400 text-lg font-bold">₽</span>
  </div>
  <input type="range" min="0" max="100000" v-model="value" ref="slider" class="input">
</div>
</template>

<script>
export default {
  name: "RangeSlider",
  data(){
    return{
      value:0
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
  -moz-appearance: none;
  display: block;
  width: 100%;
  height: 8px;
  background-color: #E40505;
  border-radius: 8px;
  outline: none;
}

.input[type="range"]::before{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #E40505;
  transform: translate(0px, -6px);
  left: 0;
}

.input[type="range"]::after{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transform: translate(0px, -6px);
  right: 0;
  z-index: -1;
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
