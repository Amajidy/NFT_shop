<template>
<div class="">
  <shop-header/>
  <div class="flex justify-center flex-col md:pt-40 pt-10">
    <img
      class="self-center p-5 my-7 md:p-0"
      src="~/assets/img/error/pana.png"
      alt=""
    />
    <h5 class="capitalize text-3xl text-center font-medium">
      page not found
    </h5>
  </div>
  </div>
</template>

<script>
import shopHeader from './shopheader.vue'
export default {
  layout: "empty",
  components:{shopHeader}
};
</script>

<style></style>
