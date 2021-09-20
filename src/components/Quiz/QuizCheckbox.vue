<template>
  <div class="mt-2 flex">
    <input type="checkbox" class="checkbox" :value="value" :id="value" >
    <label class="label" :for="value">
      <span class="text-xl font-bold  ml-1"><slot></slot></span>
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
    }
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
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  .checkbox:checked + .label::before {
    background-image: url('../../assets/check.svg');
  }

</style>
