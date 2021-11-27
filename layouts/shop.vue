<template>
  <div>
    <shop-header/>
    <nuxt class="md:pt-48 pt-20"/>
    <footer-layout/>
  </div>
</template>

<script>
import shopHeader from './shopheader.vue'
import footerLayout from './_footerLayout.vue'
export default {
components:{shopHeader, footerLayout}
}
</script>

<style>

</style>
