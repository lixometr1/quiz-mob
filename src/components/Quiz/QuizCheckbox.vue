<template>
  <div class="mt-3.5 flex">
    <input type="checkbox" class="checkbox" :value="value" :id="value"  @change="$emit('checkedForm',$event)" :checked="checkedRooms.includes(value)">
    <label class="label" :for="value">
      <span class="text-xl font-bold "><slot></slot></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "QuizCheckbox",
  props:{
    value:{
      type:String,
      required: true
    },
    checkedRooms:Array
  }
}
</script>

<style scoped>
  .checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .label::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: white;
    border-radius: 10px;
    margin-right: 1.375rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  .checkbox:checked + .label::before {
    background-image: url('../../assets/img.png');
    background-size: 20px;
  }

</style>
