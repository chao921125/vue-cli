<template>
    <el-row>
        <el-col :span="24">截图：用html2canvas</el-col>
        <el-col :span="24">注意点：1、不可使用背景图（目前能找到的方法都试过了，无法截图成功）2、img添加跨域允许</el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-image id="imgUrl" ref="imgUrl" :src="imgUrl" crossorigin="anonymous"></el-image>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "H2c",
    data() {
        return {
            imgUrl: "https://app-funpoints-1259661131.cos.ap-hongkong.myqcloud.com/manage/produce/1605598779773.jpg"
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">

</style>
