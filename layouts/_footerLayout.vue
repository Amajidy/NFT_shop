<template>
<div>
  <div style="background: linear-gradient(280.15deg, #1D1355 -1.19%, #D823FC 136.02%);" >
        <div class="text-white py-36 px-3 md:px-0 bg-footer-background">
          <div class="container mx-auto">
            <div class="flex flex-col lg:flex-row ">
              <div class="flex-1 text-3xl md:mb-5 lg:mb-0 ">
                <figure class="logo">
                  <img src="~/assets/img/header/logo.png" alt="" style="filter: contrast(2);">
                </figure>
              </div>
              <div class="flex flex-wrap md:flex-row gap-y-9 gap-x-16 sm:gap-16 md:gap-20 lg:gap-24 mt-8 md:mt-0">
                <div class="capitalize md:mr-0" v-for="(item, index) in footer" :key="index">
                  <h3 class="text-2xl font-normal">{{ item.header }}</h3>
                  <div class="mt-3 flex flex-col gap-5 md:gap-0">
                    <span class="text-sm  md:text-base footer__text w-max" v-for="(object, position) in item.item" :key="position">{{object}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'footerLayout',
  data: () => ({
    footer:[
      {
        header: "About us",

        item: [
          "About NFT Shop",
          " Community",
          "NFT Blog",
          "Terms",
        ]
      },
        {
          header: "Pruducts",
          item: [
            "Exchange",
            "NFT Charity Foundation",
            "Academy",
        ]
        },
      {
        header: "Service",
        item: [
          "Buy Crypto",
        ]
      },
          {
            header: "Support",
            item: [
              "FAQ",
              "Help Center",
              "Give Us A Feedback",
            ]
          },
    ]
  })
}
</script>

<style lang="scss">
.footer__text {
 cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  &:first-child{
    margin-top:0;
  }

  &:hover{
    text-shadow: 0px 0px 15px #fff;
  }
}
@media (max-width: 575px) {
.logo{
  display: flex;
  justify-content: center;
}
}
</style>
