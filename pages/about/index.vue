<template>
  <div class="container mt-0 mb-0 mr-auto ml-auto">
    <div class="about">
      <div class="about__top  justify-between ">
        <div class="about__text">
          <h2 class="text__header">About NFT Shop</h2>
          <span class="mt-4">
          Collect text-based NFTs
          Take advantage of the first text-based NFT. Select a text or write your own and let it live forever on the
          Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add
          text to an existing ChainText token.
          Your story can be constantly evolving.
            <br>
            With NFT Shop site, you can experience comfort and work with it easily. In NFT Shop, we have provided a safe space for you so that we can ease your mind in terms of security.
          <br>
            NFT Shop has a large space and has many capabilities compared to other sites, which is much better in terms of security.
            <br>
            By making this Token, you can easily buy and sell in high security
            <br>
            By making this Token, you can easily trade and enter the world of trading and investing in complete security.
            <br>
            and let it live forever on the Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add text to an existing ChainText token. Your story can be constantly evolving.
With NFT Shop site, you can experience comfort and work with it easily. In NFT Shop, we have provided a safe space for you so that we can ease your mind in terms of security.
NFT Shop has a large space and has many capabilities compared to other sites, which is much better in terms of security.
By making this Token, you can easily buy and sell in high security
            <br>
            and let it live forever on the Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add text to an existing ChainText token. Your story can be constantly evolving.
With NFT Shop site, you can experience comfort and work with it easily. In NFT Shop, we have provided a safe space for you so that we can ease your mind in terms of security.
NFT Shop has a large space and has many capabilities compared to other sites, which is much better in terms of security.
By making this Token, you can easily buy and sell in high security
          </span>
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


      <div class="about__bottom">
        <span>
          Collect text-based NFTs Take advantage of the first text-based NFT. Select a text or write your own and let it live forever on the Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add text to an existing ChainText token. Your story can be constantly evolving.
With NFT Shop site, you can experience comfort and work with it easily. In NFT Shop, we have provided a safe space for you so that we can ease your mind in terms of security.
NFT Shop has a large space and has many capabilities compared to other sites, which is much better in terms of security.
By making this Token, you can easily buy and sell in high security
By making this Token, you can easily trade and enter the world of trading and investing in complete security.
and let it live forever on the Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add text to an existing ChainText token. Your story can be constantly evolving. With NFT Shop site, you can experience comfort and work with it easily. In NFT Shop, we have provided a safe space for you so that we can ease your mind in terms of security. NFT Shop has a large space and has many capabilities compared to other sites, which is much better in terms of security. By making this Token, you can easily buy and sell in high security
and let it live forever on the Ethereum blockchain. Unlike most NFTs, ChainTexts can change after being created; you or future owners can add text to an existing ChainText token. Your story can be constantly evolving. With NFT Shop site, you can experience comfort and work with it easily. In NFT Shop, we have provided a safe space for you so that we can ease your mind in terms of security. NFT Shop has a large space and has many capabilities compared to other sites, which is much better in terms of security. By making this Token, you can easily buy and sell in high security

        </span>

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
  margin: 0 auto;
  .about__top{
display: flex;
  }
.text__header{
  font-size: 25px;
}

  .about__text{
    width: 45%;
  }
  .about__lottie{
    width: 55%;
    div{
      width: auto !important;
      height:auto !important;
    }
  }
  .about__bottom{
    margin-bottom: 5rem !important;
  }
}

@media (max-width: 575px) {
  .about{
    .about__top{
      flex-direction: column-reverse;
    }
    .about__text{
      width: 100%;
      padding: 0 29px !important;
    }
    .about__lottie{
      width: 100%;
      margin-top: 4rem;
    }
  }
  .about__bottom{
    padding: 0 30px;
  }
}

</style>
