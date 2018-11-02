<template>
    <div class="page">
        <message ref="message"></message>
		<headers :tabname="$t('m.HeaderIndex')"></headers>
        <!-- 切换中英文 -->
        <div class="langBox" @click="changeLang">{{$t('m.local')}}</div>
        <!-- 内容 -->
        <transition :name="slidename">
			<div class="container" v-show="mainarea">
			

			</div>
		</transition>
        <footers :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></footers>
    </div>
</template>

<script>
import Headers from "./base/Header.vue";
import Footers from "./base/Footer.vue";
// import Message from "./base/Message.vue";
// import vMusicList from '@/components/musicList.vue'
export default {
    data() {
        return {
            mainarea: false
        }
        
    },
    // 模板
    components: {
        Headers,
        Footers,
        // Message
    },
    // 计算属性
    computed:{

    },
    // 生命周期
    
    // 方法
    methods: {  
        //  切换语言包
        changeLang() {
            this.$i18n.locale = "zh"
                ? (this.$i18n.locale = "en")
                : (this.$i18n.locale = "zh");
        }
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../static/less/variable.less";
@import "../../static/css/swiper.min.css";
    .langBox {
        position: fixed;
        right: 0.2rem;
        top: 0.2rem;
        font-size: 0.26rem;
        z-index: 10;
        color: white;
    }
    
</style>
