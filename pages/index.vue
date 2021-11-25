<template>
  <div>
    <div class="flex justify-center">
      <div class="filter-color flex rounded-2xl text-white my-12">
        <div class="flex items-center px-2 md:px-10 py-1">
          <div class="flex gap-1">
            <img src="~/assets/img/media/filter/arrow-down.svg" alt="..."/>
            <img src="~/assets/img/media/filter/rolling.svg" alt="..."/>
          </div>
          <span class="ml-2 md:ml-3">Bestselling</span>
        </div>

        <div class="flex items-center px-2 md:px-10 py-1">
          <div class="flex gap-1">
            <img src="~/assets/img/media/filter/arrow-down.svg" alt="..."/>
            <img src="~/assets/img/media/filter/a-z.svg" alt="..."/>
          </div>
          <span class="ml-2 md:ml-3">alphabetical</span>
        </div>

        <div class="flex items-center px-2 md:px-10 py-1">
          <div class="flex gap-1">
            <img src="~/assets/img/media/filter/arrow-down.svg" alt="..."/>
            <img src="~/assets/img/media/filter/time.svg" alt="..."/>
          </div>
          <span class="ml-2 md:ml-3">time</span>
        </div>
      </div>
    </div>
    <div>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-10
          justify-center
          container
          mx-auto
        "
      >
        <nft-items v-for="item in 12" :key="item" />
      </div>
      <!-- swiper start -->
       <div class="bg-gray mt-10" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25)">
         <div class="flex items-center gap-10 pl-5 pt-10 lg:pl-36">
          <h4 class="text-center font-bold text-2xl capitalize">sold out</h4>
          <div class="h-px bg-gray-300 flex-1"></div>
        </div>
        <div class="container mx-auto pb-20">
          <div class="services-slider">

          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper p-2">
              <div class="swiper-slide h-auto" :key="banner" v-for="banner in 12">
                <nuxt-link to="/sxg">
                  <nft-items :lazyLoading="true" />
                </nuxt-link>
              </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>

        </div>
      </div>
      <!-- swiper end -->
      <!-- ability -->
      <div class="container mx-auto">
        <div
          class="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            xl:gap-36
            my-10
          "
        >
          <div class="flex justify-end flex-col  gap-6 p-5 lg:p-0">
            <img
              class=""
              src="~/assets/img/ability/buyAndEffect.svg"
              alt="..."
            />
            <div class="flex flex-col">
              <h3 class="text-center font-bold text-3xl">Buy And Effect</h3>
              <p class="text-center mt-5">Get nft from your owner</p>
            </div>
          </div>
          <div class="flex justify-end flex-col  gap-6 p-5 lg:p-0">
            <img
              class=""
              src="~/assets/img/ability/security.svg"
              alt="..."
            />
            <div class="flex flex-col">
              <h3 class="text-center font-bold text-3xl">Security</h3>
              <p class="text-center">
                You can buy and enjoy in complete security and use all the
                facilities
              </p>
            </div>
          </div>
          <div class="flex justify-end flex-col  gap-6 p-5 lg:p-0">
            <img
              class=""
              src="~/assets/img/ability/fastSending.svg"
              alt="..."
            />
            <div class="flex flex-col">
              <h3 class="text-center font-bold text-3xl capitalize">fast sending</h3>
              <p class="text-center">
                Fast shipping worldwide with the lowest cost
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- ability end -->
      <!-- your question -->
      <faq />
      <!-- end you question -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 45,
        slidesPerGroup: 2,
        loop: true,
        lazy: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
        breakpoints: {
          1280:{
            slidesPerView: 5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
    };
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false);
    // this.$store.state.navigation_draweber = false2
  },
};
</script>
<style>
</style>
