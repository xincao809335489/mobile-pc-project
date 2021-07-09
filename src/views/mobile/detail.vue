<!--
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2021-07-08 17:56:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-08 19:38:39
-->
<template>
  <div class="detail">
    <mt-header :title="title">
      <router-link to="/mobile" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content">
      <mt-field
        :label="item.label"
        v-for="item in datas"
        :key="item.id"
        :type="item.type"
        :placeholder="`请输入${item.label}`"
      ></mt-field>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'detail',
  data () {
    return {
      title: '',
      datas: [
        { label: '用户名', id: 'user', type: 'text' },
        { label: '密码', id: 'password', type: 'password' },
        { label: '邮箱', id: 'email', type: 'email' },
        { label: '地址', id: 'address', type: 'url' },
        { label: '手机号', id: 'phone', type: 'tel' },
        { label: '描述', id: 'desc', type: 'textarea' }
      ]
    }
  },
  mounted () {
    this.title = this.$route.params.title
  }
}
</script>

<style lang="less" scoped>
@import "~assets/css/input-text.css";
.content {
  padding: 0 10px;
  /deep/ input::-webkit-input-placeholder {
    color: #bbb;
    font-size: 20;
  }
}
</style>
