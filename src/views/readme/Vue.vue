<template>
    
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured, ref } from 'vue'

export default {
    name: "Vue",
    props: {
        
    },
    data() {
        return {
            value: '1'
        }
    },
    setup(props, context) {
        console.log(props);

        console.log(context);
        
        console.log(ref(0));
        
        onBeforeMount(() => {
            console.log("onBeforeMount");
        })
        onMounted(() => {
            console.log("onMounted");
        })
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        })
        onUpdated(() => {
            console.log("onUpdated");
        })
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        })
        onUnmounted(() => {
            console.log("onUnmounted");
        })
        onActivated(() => {
            console.log("onActivated");
        })
        onDeactivated(() => {
            console.log("onDeactivated");
        })
        onErrorCaptured(() => {
            console.log("onErrorCaptured");
        })
    },
}
</script>

<style lang="scss" scoped>

</style>
