<template>
  <h1>都有啥？咋实现的？</h1>
  <van-button type="primary">主要按钮</van-button>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
    <van-cell title="单元格" is-link />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
  </van-cell-group>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
}
</style>
