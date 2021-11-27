<template>
  <div class="container">
    <div class="about">
      <div class="about__top  justify-between ">
        <div class="about__text">
          Collect text-based NFTs
          Take advantage of the first text-based NFT. Select a text or write your own and let it live forever on the
          Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add
          text to an existing ChainText token.
          Your story can be constantly evolving.
        </div>
        <div class="about__lottie">
          <lottie
            :width="100"
            :height="100"
            :options="lottieOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>
      </div>
    </div>

  </div>


</template>


<script>
import lottie from "vue-lottie/src/lottie";
import * as  animationData from "!assets/lottie/lottie.json";

export default {
  components: {
    lottie,
  },
  data: () => ({
    anim: null,
    lottieOptions: {animationData: animationData.default},
  }),
  layout: 'shop',
}
</script>

<style lang="scss">
.about{
  .about__top{
display: flex;
  }
}


</style>
