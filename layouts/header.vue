<template>
  <div class="header">
    <div class="bg-header-background bg-header-color pb-8 lg:pb-0">
      <!-- navbar -->
      <div class="flex justify-between items-center p-6">
        <div class=" md:mx-20"><nuxt-link to="/"><img src="~/assets/img/header/logo.png" alt=""></nuxt-link></div>
        <div class="gap-5 text-white hidden xl:flex">
          <div class="text-white">
            <a href="/" class="mx-16 header__text capitalize">home</a>
            <a href="" class="mx-16 header__text capitalize">nft shop</a>
            <nuxt-link to="/about" class="mx-16 header__text capitalize">about</nuxt-link>
            <a href="" class="mx-16 header__text capitalize">contact us</a>
          </div>
          <div class="flex">
            <nuxt-link to="#" class="cursor-default">
              <img
                class="mx-10 transform hover:scale-110 transition duration-300 cursor-pointer"
                src="~/assets/img/header/shop.svg"
                alt="..."
              />
            </nuxt-link>
            <nuxt-link to="#" class="cursor-default border-shop">
              <img class="mx-10 transform hover:scale-110 transition duration-300 cursor-pointer" src="~/assets/img/header/profile.svg" alt="..." />
            </nuxt-link>
          </div>
        </div>
        <div
          class="xl:hidden items-center xl:items-end justify-end xl:justify-center xl:mb-5 col-span-2 xl:col-span-1 flex mr-3 xl:mr-0"
        >
          <div class="cursor-pointer" @click="open">
             <img src="~/assets/img/header/draweber/hamburger.svg" alt="...">
          </div>
        </div>
      </div>

      <!-- main-header-content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 mt-0 lg:mt-24 justify-between">
        <!-- left-side -->
        <div class="lg:col-span-1 order-2 lg:order-1">
          <div
            class="flex flex-col xl:pr-20 lg:py-14 items-center"
          >
            <p class="font-semibold text-5xl text-white lg:text-black">
              Turn Clicks Into
            </p>
            <h3 class="header-nft -ml-3">NFT</h3>
            <p class="text-sm font-medium w-9/12 leading-4 tracking-tight text-white lg:text-black">
              Must explain to you how all this mistaken idea of pleasure and
              praising pain was born and will give you a complete account of the
              system, and expound the actual teachings.
            </p>
            <div class="mx-auto mt-10">
              <button
                class="text-white font-medium rounded-2xl py-2.5 px-12 btn-nft transition-400 transition-all transition-ease-in-out"
                @click="$router.push('/createNFT')"
              >
                Create NFT
              </button>
            </div>
          </div>
        </div>

        <!-- img and right side -->
        <div class="lg:col-span-2 order-1">
          <div class="flex flex-col">
            <img
              class="lg:w-8/12 lg:ml-auto mx-auto lg:mx-0 pl-5 lg:pl-0"
              src="~/assets/img/header/nftLogo.svg"
              alt=""
            />
            <div class="flex relative lg:ml-72 lg:mr-20 xl:mr-28 xl:ml-96 mx-5 sm:mx-14 md:mx-20 lg:mx-0 mb-10 lg:mb-0">
            <input
              type="text"
              class="flex-1 text-white search-box focus:outline-none py-3 pl-5 pr-12 rounded-lg"
              placeholder="Search nft ,Character, ... "
            />

            <div
              class="absolute rounded-r-lg right-0 h-full w-16 --pink-color flex-center"
            >
              <svg
                class=""
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0815 17.4542C20.6549 15.2242 21.3596 12.4595 21.0547 9.71306C20.7497 6.96664 19.4575 4.44109 17.4367 2.64168C15.4158 0.842265 12.8153 -0.0983054 10.1554 0.00814148C7.49555 0.114588 4.97245 1.2602 3.0909 3.21579C1.20936 5.17137 0.108137 7.79271 0.00755033 10.5554C-0.0930363 13.318 0.814431 16.0182 2.5484 18.1158C4.28237 20.2134 6.71497 21.5536 9.35951 21.8684C12.0041 22.1832 14.6655 21.4493 16.8115 19.8135H16.8098C16.8586 19.881 16.9106 19.9452 16.9691 20.0076L23.2251 26.5052C23.5298 26.8218 23.9431 26.9998 24.3742 27C24.8052 27.0002 25.2187 26.8225 25.5236 26.506C25.8285 26.1896 25.9998 25.7603 26 25.3126C26.0002 24.8649 25.8291 24.4355 25.5244 24.1188L19.2684 17.6213C19.2103 17.5602 19.1478 17.5038 19.0815 17.4525V17.4542ZM19.5007 10.9668C19.5007 12.1857 19.2696 13.3927 18.8204 14.5189C18.3713 15.6451 17.713 16.6683 16.8831 17.5303C16.0532 18.3922 15.068 19.0759 13.9837 19.5424C12.8994 20.0089 11.7372 20.249 10.5636 20.249C9.38992 20.249 8.22776 20.0089 7.14346 19.5424C6.05915 19.0759 5.07393 18.3922 4.24403 17.5303C3.41414 16.6683 2.75583 15.6451 2.3067 14.5189C1.85756 13.3927 1.6264 12.1857 1.6264 10.9668C1.6264 8.50496 2.56799 6.14399 4.24403 4.40324C5.92008 2.66249 8.19328 1.68455 10.5636 1.68455C12.9338 1.68455 15.207 2.66249 16.8831 4.40324C18.5591 6.14399 19.5007 8.50496 19.5007 10.9668Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-t from-gray-300 py-10 sm:py-20">
      <div class="container mx-auto flex justify-between">
        <div
          class="hidden sm:flex flex-col items-center group cursor-pointer header__action"
          v-for="(item, index) in headerAction"
          :key="index"
        >
          <img
            class="transform transition duration-300 w-max"
            :src="require(`~/assets/img/header/${item.icon}`)"
            alt="..."

          />
          <span
            class="
              capitalize
              font-bold
              mt-1
              text-gray-600
            "
            v-html="item.name"
          >
          </span>
        </div>
        <div v-swiper:mySwiper3="swiperOption" class="sm:hidden py-20">
          <div class="swiper-wrapper py-5 md:py-0">
            <div class="swiper-slide"  v-for="(item, index) in headerAction" :key="index  ">
              <div class="flex flex-col items-center group">
                <img
                  class="transform hover:scale-125 transition duration-300"
                  :src="require(`~/assets/img/header/${item.icon}`)"
                  alt="..."
                />
                <span class="
                      capitalize
                      font-bold
                      text-gray-600
                      group-hover:text-indigo-600
                    "
                  v-html="item.name"
                >
                </span>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </div>
    <transition name="smooth">
      <div
        class="draweber h-screen fixed top-0 right-0 w-full flex z-50 overflow-hidden"
        v-show="$store.state.navigation_draweber"
      >
        <div class="w-full flex flex-col">
          <div class="w-full flex justify-between p-8">
            <div class="inline-flex" @click="open">
              <img :class="{ 'arrow-animation' : !$store.state.navigation_draweber }" src="~assets/img/header/draweber/arrow.svg" alt="">
            </div>
            <div class="flex gap-6">
              <img width="27" src="~/assets/img/header/profile.svg" alt="" />
              <img width="30" src="~/assets/img/header/shop.svg" alt="" />
            </div>
          </div>
          <div class=" px-5 mt-10">
            <div class="flex relative">
              <input
                type="text"
                class="flex-1 search-box focus:outline-none py-3 pl-5 pr-12 rounded-lg text-white"
                placeholder="Search nft ,Character, ... "
              />

              <div
                class="absolute rounded-r-lg right-0 h-full w-16 --pink-color flex-center"
              >
                <svg
                  class=""
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0815 17.4542C20.6549 15.2242 21.3596 12.4595 21.0547 9.71306C20.7497 6.96664 19.4575 4.44109 17.4367 2.64168C15.4158 0.842265 12.8153 -0.0983054 10.1554 0.00814148C7.49555 0.114588 4.97245 1.2602 3.0909 3.21579C1.20936 5.17137 0.108137 7.79271 0.00755033 10.5554C-0.0930363 13.318 0.814431 16.0182 2.5484 18.1158C4.28237 20.2134 6.71497 21.5536 9.35951 21.8684C12.0041 22.1832 14.6655 21.4493 16.8115 19.8135H16.8098C16.8586 19.881 16.9106 19.9452 16.9691 20.0076L23.2251 26.5052C23.5298 26.8218 23.9431 26.9998 24.3742 27C24.8052 27.0002 25.2187 26.8225 25.5236 26.506C25.8285 26.1896 25.9998 25.7603 26 25.3126C26.0002 24.8649 25.8291 24.4355 25.5244 24.1188L19.2684 17.6213C19.2103 17.5602 19.1478 17.5038 19.0815 17.4525V17.4542ZM19.5007 10.9668C19.5007 12.1857 19.2696 13.3927 18.8204 14.5189C18.3713 15.6451 17.713 16.6683 16.8831 17.5303C16.0532 18.3922 15.068 19.0759 13.9837 19.5424C12.8994 20.0089 11.7372 20.249 10.5636 20.249C9.38992 20.249 8.22776 20.0089 7.14346 19.5424C6.05915 19.0759 5.07393 18.3922 4.24403 17.5303C3.41414 16.6683 2.75583 15.6451 2.3067 14.5189C1.85756 13.3927 1.6264 12.1857 1.6264 10.9668C1.6264 8.50496 2.56799 6.14399 4.24403 4.40324C5.92008 2.66249 8.19328 1.68455 10.5636 1.68455C12.9338 1.68455 15.207 2.66249 16.8831 4.40324C18.5591 6.14399 19.5007 8.50496 19.5007 10.9668Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ul class="text-center text-white text-3xl mt-10 flex flex-col gap-10">
            <li class="capitalize"><button @click="draweberLink('/')">Home</button></li>
            <li class="capitalize"><button @click="draweberLink('/nft')">NFT Shop</button></li>
            <li class="capitalize"><button @click="draweberLink('/about')">About</button></li>
            <li class="capitalize"><button @click="draweberLink('/contact')">Contact Up</button></li>
          </ul>
          <div class="text-white text-3xl capitalize text-center flex justify-center " style="margin: auto 0 60px 0;">
            <figure>
              <img src="~/assets/img/header/logo.png" alt="">
            </figure>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "header-main",
  data() {
    return {
      headerAction: [
        {
          icon: "film.svg",
          name: "film"
        },
        {
          icon: "music.svg",
          name: "music"
        },
        {
          icon: "picture.svg",
          name: "picture"
        },
        {
          icon: "animation.svg",
          name: "animation"
        },
        {
          icon: "painting.svg",
          name: "painting"
        }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 45,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    };
  },
  methods:{
    open() {
      this.$store.commit("open_close");
    },
    draweberLink(el){


      this.$router.push(el)
      console.log(this.$router.params)
      this.$store.commit("close_draweber")
    }
  }
};
</script>

<style lang="scss">
.btn-nft {
  background: linear-gradient(89.89deg, #e426fd -1.26%, #7302ea 96.22%);
  &:hover{
    transform: translateY(-5px);
        box-shadow: 5px 8px 11px rgb(0 0 0 / 34%);
  }
}
.draweber {
  background: #1c1254;
  max-width: 450px;
  background-image: url(~/assets/img/header/draweber/draweber-img.svg);
  @apply bg-no-repeat bg-cover;
}
.smooth-enter-active,
.smooth-leave-active {
  transition: all 0.5s;
}
.smooth-enter,
.smooth-leave-to {
  max-width: 0;
  transition: all 0.5s .5s;
  width: 0;
}

.services-slider {
  position: relative;
  margin-top: 3rem;
  width: 100%;
}
.header__text{
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  &:hover{
text-shadow: 0px 0px 15px #fff;
   }
}
.swiper-pagination-bullets{
  bottom: 0 !important;
}
.header__action{
  transition: all 0.3s;
  &:hover{
    img{
      transform: scale(1.5);
      transition: all 0.3s;
    }
    span{
      transform: translateY(10px);
      color: #021E72;
      transition: all 0.3s;
    }
  }
}
</style>
