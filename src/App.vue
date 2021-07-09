<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted () {
    if (this._isMobile()) {
      // 移动
      this.$router.replace('/mobile')
    } else {
      this.$router.replace('/terminal')
    }
  },
  methods: {
    // 判断设备 pc/mobile
    _isMobile () {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  }

}
</script>
<style lang="less">
</style>
