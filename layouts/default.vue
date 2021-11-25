<template>
  <div>
    <haeder-main/>
    <Nuxt />
    <footer-layout/>
  </div>
</template>
<script>
import haederMain from './header.vue'
import footerLayout from './_footerLayout.vue'
export default {
  components:{ haederMain, footerLayout }
}
</script>
