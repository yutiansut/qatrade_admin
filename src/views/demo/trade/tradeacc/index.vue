<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
    <d2-module-index-menu :menu="menu"/>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-trade'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      menu,
      banner: {
        title: 'TradeAccounts',
        subTitle: 'Account'
      }
    }
  },
  mounted () {
    console.log(this.aside)
    console.log(this.header)
  },
  computed: {
    ...mapState('d2admin/menu', [
      'header',
      'aside'
    ])
  },
}
</script>
