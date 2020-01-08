<template>
  <div
    class="wrapper"
    :class="{ closeBar: opened }"
  >
    <m-header />
    <transition
      enter-active-class="animated fadeInRightBig"
      leave-active-class="animated bounceOutRight"
    >
      <notificat-bar v-show="msgIsShow" />
    </transition>
    <div class="wrapper_con">
      <side-bar />
      <page-main />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sideBar'
import MHeader from './components/header'
import NotificatBar from '@/components/NotificatBar'
import PageMain from './components/PageMain'
import { mapGetters } from 'vuex'
import driver from '@/mixins/useDriver'
export default {
  name: 'Layout',
  components: {
    SideBar,
    MHeader,
    NotificatBar,
    PageMain
  },
  mixins: [driver],
  computed: {
    ...mapGetters(['opened', 'msgIsShow', 'showDriver'])
  },
  mounted() {
    if (this.showDriver === 'yes') {
      this.guide()
      this.$store.commit('app/SET_DRIVER', 'no')
    }
  }
}
</script>
