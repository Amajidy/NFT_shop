<template>
  <div class="shop-background pb-16">
    <!-- show item of shop  -->
    <div class="shop--details bg-white">
      <div class="container mx-auto flex flex-col lg:flex-row py-10 gap-7">
        <div class="flex-1">
          <div
            class="p-10 rounded-lg shop--img"
          >
            <img src="~/assets/img/shop/item.jpg" alt="" class="rounded-xl" />
          </div>
        </div>
        <div class="flex-1 flex flex-col mx-8 sm:mx-0 justify-evenly">
          <h4 class="title--shop text-3xl font-medium">The Philippine Eagle</h4>

          <div class="my-8">
            <h5 class="priceUSDT--shop text-2xl font-medium">
              The Philippine Eagle
            </h5>
            <span class="text-xl opacity-40">= $ 1,999.00</span>
          </div>

          <p class="text-justify">
            The Philippine Eagle AKA the "Monkey-Eating Eagle". This loop and
            audio defines the Eagle's habitat, a tropical country surrounded by
            a vast body of water, balancing the biosphere. Miaow, the artist,
            will indulge your senses with sound and visuals. This is the first
            release of a three-part collection for The Philippine Eagle, under
            the series of "Endangered Species Artworks”. 20% of the proceeds
            from each piece is pledged to the Philippine Eagle Foundation.
          </p>
          <button
            class="submit--shop text-white py-3 px-16 rounded-2xl mt-7 self-center"
          >
            Place a Bid
          </button>
        </div>
      </div>
    </div>
    <!-- first swiper  -->
    <div
      class="bg-white mt-16"
      style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25)"
    >
    <div class="flex items-center gap-10 pl-5 pt-10 lg:pl-36">
      <h4 class="text-center font-bold text-2xl">Related products</h4>
      <div class="h-px bg-gray-300 flex-1"></div>
    </div>
      <div class="container mx-auto py-10">
        <div class="services-slider">

          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper p-2">
              <div class="swiper-slide h-auto" :key="banner" v-for="banner in 12">
                <nuxt-link to="/dfh">
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
    <!-- banner -->
    <div class="mt-10 container mx-auto">
      <div class="flex flex-col md:flex-row justify-evenly gap-5 px-3 md:px-0">
        <div v-for="(banner, index) in banners" :key="index">
          <img class="rounded-3xl" :src="require(`~/assets/img/shop/${banner.img}`)" :alt="banner.name">
        </div>
      </div>
    </div>
    <!-- second swiper -->
    <div
      class="bg-white mt-10"
      style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25)"
    >
    <div class="flex items-center gap-10 pl-5 pt-10 lg:pl-36">
      <h4 class="text-center font-bold text-2xl">Based on bracelets</h4>
      <div class="h-px bg-gray-300  flex-1"></div>
    </div>
      <div class="container mx-auto py-10">
        <div class="services-slider">

          <div v-swiper:mySwiper1="swiperOption">
            <div class="swiper-wrapper p-2">
              <div class="swiper-slide h-auto" :key="banner" v-for="banner in 12">
                <nuxt-link to="/sdf">
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
    <!-- finish  -->
  </div>
</template>

<script>
export default {
  layout: "shop",
  data() {
    return {
      banners:[
        {
          name: '...',
          img:'banner.png',
        },
        {
          name: '...',
          img:'banner.png',
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 60,
        slidesPerGroup: 1,
        loop: true,
        lazy: true,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          // slidesPerGroup: 1,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1280:{
            slidesPerView: 5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          }
        }
      }
    };
  },
  mounted() {
    // this.$store.state.navigation_draweber = false
  }
};
</script>

<style lang="scss">
.shop-background {
  background-color: #e6e3e3;
}
.shop--details {
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
}
.title--shop {
  color: #1d1355;
}
.priceUSDT--shop {
  color: #c91efa;
}
.submit--shop {
  background: #c91efa;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-5px);
        box-shadow: 5px 8px 11px rgb(0 0 0 / 34%);
  }
}
.shop--img{
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.1);
}

</style>
