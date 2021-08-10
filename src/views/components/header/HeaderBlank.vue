<template>
    <div class="header flex-base">
        <transition name="fade-transverse" class="flex-center-row">
            <div :class="isCollapse ? 'logo logo-collapse' : 'logo'">
                <object v-show="!isCollapse" :data="imgSrc[0]" width="210" height="50" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
                <object v-show="isCollapse" :data="imgSrc[1]" width="55" height="50" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
            </div>
        </transition>
        <div class="flex-space-between cc-width">
            <div class="cc-pointer flex-center-row cc-ml-5">
                <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
            </div>
            <div class="flex-center-row cc-mr-20" :class="isCollapse ? 'cc-text-right info-collapse' : 'cc-text-right info'">
                <router-link to="/demo">Demo</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            imgSrc: [require("@/assets/images/header/kehu.svg"), require("@/assets/images/header/shebao.svg")],
            isCollapse: false,
        };
    },
    methods: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse;
            this.$emit("isCollapse", this.isCollapse);
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    .logo {
        background-color: #000;
    }
}
</style>
