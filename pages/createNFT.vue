<template>
  <div class="shop-background pb-16 ">
    <div class="container bg-white mx-auto rounded-2xl container-shadow px-2 md:px-0">
      <h5 class="text-center text-2xl lg:text-4xl font-medium title--shop p-7">
        The Philippine Eagle
      </h5>
      <div class="flex items-center gap-10 pl-5 pt-10">
        <h4 class="text-center font-bold text-2xl title--shop">Upload token</h4>
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>

      <div class="lg:mx-10">
        <div class="flex items-center justify-between mt-5 lg:mt-10 flex-col md:flex-row gap-5 md:gap-0">
          <div class="mt-5">
            <div class="flex items-center mb-3">
              <img src="~/assets/img/media/items/list.svg" alt="">
              <span class="item-text ml-2">File size up to 100 MB</span>
            </div>
            <div class="flex items-center mb-3">
              <img src="~/assets/img/media/items/list.svg" alt="">
              <span class="item-text ml-2"> photo, video, audio or 3D model</span>
            </div>
            <div class="flex items-center">
              <img src="~/assets/img/media/items/list.svg" alt="">
              <span class="item-text ml-2">Acceptable formats JPG, PNG, MP</span>
            </div>
          </div>
          <div>
            <form action="" class="relative form__upload px-14 py-8 rounded-xl overflow-hidden">
              <input type="file" multiple accept="image/*" class="absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer">
              <div class="flex flex-col">
                <img src="~/assets/img/media/items/arrowUpload.svg" alt="">
                <p class="font-bold">Upload</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-10 pl-5 pt-10">
        <h4 class="text-center font-bold text-2xl title--shop">Upload Currency password preview </h4>
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>

      <div class="lg:mx-10">
        <div class="flex items-center justify-between mt-5 lg:mt-10 flex-col md:flex-row gap-5 md:gap-0">
          <div class="mt-5">
            <p class="item-text md:max-w-md">To display your currency password, you need a photo to preview. Upload your desired file</p>
          </div>
          <div>
            <form action="" class="relative form__upload px-14 py-8 rounded-xl overflow-hidden">
              <input type="file" multiple accept="image/*" class="absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer">
              <div class="flex flex-col">
                <img src="~/assets/img/media/items/arrowUpload.svg" alt="">
                <p class="font-bold">Upload</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-10 pl-5 pt-10">
        <h4 class="text-center font-bold text-2xl title--shop">Further information</h4>
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>
      <div class="flex w-8/12">
        <span class="bg-gray-300 px-8 rounded-l-xl">website</span>
        <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "shop",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.shop-background {
  background-color: #e6e3e3;
}
.container-shadow {
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
}
.item-text{
  color: #999999;
}
.form__upload{
  border: 1px solid #C91EFA;
  div{
    p{
      color: #C91EFA52;
    }
  }
}
</style>
