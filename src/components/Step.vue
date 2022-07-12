<template>
  <div class="step-panel">
    <div class="step" :class="[{active: stepNow === 1}, {checked: stepNow > 1}]" >
      <div class="circle first-circle"></div>
      <div class="label-text ml-2">寄送地址</div>
    </div>
    <div class="step" :class="[{active: stepNow === 2}, {checked: stepNow > 2}]">
      <div class="circle"></div>
      <span class="connect-line" :class="{active: stepNow >= 1}"></span>
      <div class="label-text ml-2">運送方式</div>
    </div>
    <div class="step" :class="{active: stepNow === 3}">
      <div class="circle"></div>
      <span class="connect-line" :class="{active: stepNow >= 2}"></span>
      <div class="label-text ml-2">付款資訊</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props : {
    stepNow : {
      type: Number,
      default: 1
    }
  }
}
</script>