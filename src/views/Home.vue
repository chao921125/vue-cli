<template>
  <h1>都有啥？咋实现的？</h1>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="动态菜单" name="1">
      <div>只做到了菜单级别，如果想要做按钮级别，最好使用自定义指令</div>
      <ol>
        <li>明确自身业务需求，根据实际业务来设计和实现</li>
        <li>在router中首先配置一些静态的页面路由，比如登录、注册</li>
        <li>在store里面请求获取权限菜单，然后处理成router（根据需要自己修改数据格式、字段啥的）</li>
        <li>我在这里也将静态菜单搞进去了，思路呢还是仿着动态的来，只不过模拟了返回数据，这样一个数据既可以实现了菜单，又能够完成路由，减少后期改动量。</li>
      </ol>
    </el-collapse-item>
    <el-collapse-item title="Axios封装" name="2">
      <div>我感觉这个没啥好说的，巴拉巴拉巴拉巴拉，看着官方的文档就出来了，看你自己的实际需求吧。不过一定要处理好request和response，格式一定约定好，别特么一会返回一个{data: {}}，一会返回一个{result: {}}}，这样的后端杀了祭天吧。</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const activeName = ref("1");

    return {
      activeName,
    }
  },
});
</script>

<style scoped lang="scss"></style>
