<template>
  <div id="app">
    <!-- <LessDemo></LessDemo> -->
    <!-- <router-view></router-view> -->
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
  
</template>

<script>
// import LessDemo from './demo/less/LessDemo/index'
import Header from "./components/Header/index";
import Tab from "./components/Tab/index";

export default {
  components: {
    Header,
    Tab
  }
};
</script>

<style lang="less" scoped>
@import "./style/index.less";
#app {
  background: @black2;
  .w(375);
  height: 100vh;
}
</style>