<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view/>
    </div>
</template>

<script>
// 引入rem脚本文件
import "../static/js/rem.js";
export default {
    name: "App",
    created() {
        // page load and read vuex state grom localStorage
        localStorage.getItem("userMsg") &&
        this.$store.replaceState(
            Object.assign(
            this.$store.state,
            JSON.parse(localStorage.getItem("userMsg"))
            )
        );

        //page refresh save vuex statw to localStorage
        window.addEventListener("beforeunload", () => {
        localStorage.setItem("userMsg", JSON.stringify(this.$store.state));
        });
    }
};
</script>

<style lang="less">
@import "../static/less/base.less";
#app {
    height: 100%;
}
</style>