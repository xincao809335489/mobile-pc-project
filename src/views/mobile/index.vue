<!--
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2021-07-08 10:45:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-09 16:19:21
-->
<template>
  <div class="mobile">
    <mt-header fixed title="标题">
      <i class="iconfont icon-shezhi setting" slot="right"></i>
    </mt-header>
    <div class="content">
      <mt-cell
        v-for="(item, index) in filterLists"
        :key="index"
        :title="item.title"
        :value="item.label"
        is-link
        @click.native="getDetail(item.title)"
      ></mt-cell>
      <!-- 测试移动界面文本px单位的情况 -->
      <div class="info">文本信息</div>
      <!-- 测试移动界面文本px单位的情况 -->
      <mt-tabbar v-model="selected" class="footer">
        <mt-tab-item id="home">
          <i class="iconfont icon-shouye" />
          <span>首页</span>
        </mt-tab-item>
        <mt-tab-item id="application">
          <i class="iconfont icon-yingyongzhongxin" />
          <span>应用中心</span>
        </mt-tab-item>
        <mt-tab-item id="person">
          <i class="iconfont icon-wode" />
          <span>我的</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script type="text/javascript">
import 'assets/js/mint.js'
export default {
  name: 'mobile',
  data () {
    return {
      selected: 'home',
      lists: [
        {
          title: '首页',
          label: '详情',
          id: 'home'
        },
        {
          title: '应用中心',
          label: '详情',
          id: 'application'
        },
        {
          title: '我的',
          label: '详情',
          id: 'person'
        }
      ]
    }
  },
  computed: {
    filterLists () {
      const { selected, lists } = this
      return lists.filter(item => item.id === selected)
    }
  },
  methods: {
    getDetail (title) {
      this.$router.push({ name: 'detail', params: { title } })
    }
  },
  mounted () {
    console.log(window.screen.width)
  },
  // 配置移动界面meta
  metaInfo () {
    return {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1,user-scalable=no'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import "~assets/css/m-index.less";
.mobile {
  /deep/ .setting {
    font-size: 19px;
  }
  .content {
    margin-top: 40px;
    .info {
      width: 100px;
      height: 30px;
      line-height: 30px;
      background: pink;
      font-size: 20px;
    }
    .footer {
      height: 44px;
      display: flex;
      align-items: center;
      /deep/ .mint-tab-item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .mint-tab-item-label {
          display: flex;
          flex-direction: column;
          line-height: inherit;
        }
      }
    }
  }
}
</style>
