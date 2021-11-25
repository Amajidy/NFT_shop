<template>
  <div class="flex flex-col overflow-hidden rounded-3xl mx-4 shadow-item transition transform hover-item">
    <img :class="{'swiper-lazy' : lazyLoading}" src="~/assets/img/media/items/office.jpg" alt="" />
    <div v-if="lazyLoading" class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    <div
      class="
        flex flex-col
        border
        rounded-3xl
        border-t-0
        rounded-t-none
        px-7
        py-3
        bg-white
      "
      style="border-color:#220970"
    >
      <span>Colourful ASA</span>
      <span class="text-right mt-3">179.00BUSD≈</span>
      <span class="text-right text-xs opacity-40">= $ 1,999.00</span>
      <div class="flex items-center mt-5">
        <profile color="#220970" />
        <div class="ml-3 opacity-50 text-xs">
          <span class="capitalize">creator:</span>
          <span class="capitalize ml-5">Colourful ASA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    lazyLoading:Boolean,
      require : false,
      default : false
  }
}
</script>

<style>
.hover-item{
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.2);
}
.hover-item:hover{
  transform: scale(1.01);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.34);
}
.shadow-item{
  cursor: pointer;
}
</style>
