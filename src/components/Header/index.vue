<template>
  <div class="header">
    <img src="/favicon.ico" alt />
    <span>天籁音乐</span>
  </div>
  
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
@import "../../style/index.less";
.header {
  color: @darkcyan2;
  font-size: @fs-l;
  // 弹性和
  display: flex;
  align-items: center;
  justify-content: center;
  .w(375);
  height: 44px;
  img {
    width: 18px;
    height: 18px;
  }
}
</style>