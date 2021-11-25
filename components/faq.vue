<template>
  <div class="bg-gray py-10" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25)">
    <div>
      <p
        class="capitalize px-10 bg-gray inline-block text-2xl font-normal"
      >
        your questions
      </p>
      <hr class="ml-16 -mt-3" />
    </div>
    <div class="container mx-auto mt-28">
      <div class="flex flex-col lg:flex-row gap-16" style="min-height:200px">

        <div class="flex gap-5 p-3 lg:p-0">
          <div class="">
            <div class="flex flex-col gap-7 h-full lg:justify-center w-5">
              <img
                class="cursor-pointer"
                src="~/assets/img/yourQuestions/arrow.svg"
                alt=""
                srcset=""
                @click="nextfaq"
              />
              <img
                class="transform rotate-180 cursor-pointer"
                src="~/assets/img/yourQuestions/arrow.svg"
                alt=""
                srcset=""
                @click="prevfaq"
              />
            </div>
          </div>
          <div class="">
            <div
              class="flex flex-col h-full "

            >
              <div class="flex gap-4 ">
                <img
                  class="w-10"
                  src="~/assets/img/yourQuestions/question.svg"
                  alt=""
                />
                <div class="w-full relative mb-1">
                  <div
                    class="font-medium text-2xl capitalize"
                    v-for="(item , j) in faq"
                    :key="j"
                  >
                    <transition name="slide-fade" mode="out-in">
                      <p class="absolute bottom-0" v-show="j === i">{{item.question}}</p>
                    </transition>

                 </div>
                </div>
              </div>
              <div class="flex items-center gap-4 question__text">
                <img
                  class="w-10 self-start"
                  src="~/assets/img/yourQuestions/answer.png"
                  alt=""
                />
                <transition name="slide-fade" mode="out-in">
                  <div class="capitalize text-sm" :key="showFAQ.question">
                    {{ showFAQ.answer }}
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:flex lg:justify-end">
          <img class="mx-auto lg:mx-0" src="~/assets/img/yourQuestions/icon.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch(){
          this.showFAQ.question = this.faq[this.i].question
    this.showFAQ.answer = this.faq[this.i].answer
  },
  data() {
    return {
      faq: [
        {
          question: "suitable smallest",
          answer:
            "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.",
        },
        {
          question: "How do I sell an NFT?",
          answer:
            "To list an NFT for sale, our team will first of all approve the content to make sure it’s appropriate for listing. This process usually takes 4-8 hours. Upon successful approval, your NFT will list immediately on the Marketplace as either an auction or fixed price sale, according to your preference. Alternatively, you can also choose to list your NFT at a fixed time (with a minimum of 12 hours after approval)."
        },
        {
          question: "Weddings and any opinions",
          answer:
            "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye.",
        },
        {
          question: "first to worse",
          answer:
            "Death there mirth way the noisy merit. Piqued shy spring nor six though mutual living ask extent. Replying of dashwood advanced ladyship smallest disposal or. Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way nay thing seems.",
        },
      ],
      showFAQ: {
        question: "He share",
        answer: "Extremity direction existence as dashwoods do up. Securing marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she. Has six worse downs far blush rooms above stood.",
      },
      i: 0,
    };
  },
  methods:{
    nextfaq(){
      if(this.faq.length - 1 === this.i){
        this.i = 0
        this.showFAQ.question = this.faq[this.i].question
        this.showFAQ.answer = this.faq[this.i].answer
      } else {
        this.i++;
        this.showFAQ.question = this.faq[this.i].question
        this.showFAQ.answer = this.faq[this.i].answer
      }
    },
    prevfaq(){
      if(this.i !== 0){
        // console.log(this.i);
        this.i--
        this.showFAQ.question = this.faq[this.i].question
        this.showFAQ.answer = this.faq[this.i].answer
      } else{
        this.i = this.faq.length - 1
        this.showFAQ.question = this.faq[this.i].question
        this.showFAQ.answer = this.faq[this.i].answer
      }
    }
  }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translatey(100%);
  opacity: 0;
}
.question{
&__text{
  margin-top: 4rem;
}
}
</style>
