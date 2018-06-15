<template>
    <div class="hello">
        <header class="navbar">
            <a class="logo"></a>
            <a class="download"></a>
        </header>
        <nav class="navs"> 
            <div class="nav navigation" >
                <span v-for="(tab,index) in tabsName" v-bind:key="{index}"> 
                    <a href="#" class="item" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>  
                </span>
                <!-- <div class="cards">  
                    <div class="tab-card" style="display: block;">新歌</div>  
                    <div class="tab-card">排行榜</div>  
                    <div class="tab-card">歌单</div>  
                    <div class="tab-card">歌手</div>  
                    <div class="tab-card">搜索</div>  
                </div>   -->
                <!-- <router-link to="/new" class="item active">新歌</router-link>
                <router-link to="/chart" class="item">排行榜</router-link>
                <router-link to="/collect" class="item">歌单</router-link>
                <router-link to="/artist" class="item">歌手</router-link>
                <router-link to="/search" class="item">搜索</router-link> -->
                <!-- <a class="item nav-new active"  href="#" >新歌</a>  -->
                <!-- <a class="item nav-chart"  href="#" >排行榜</a> 
                <a class="item nav-collect"  href="#">歌单</a> 
                <a class="item nav-artist"  href="#">歌手</a> 
                <a class="item nav-search"  href="#">搜索</a>  -->
            </div> 
        </nav>
        <!-- <v-MusicList ></v-MusicList > -->
    </div>
</template>

<script>
// import vMusicList from '@/components/musicList.vue'
export default {
    name: 'HelloWorld',
    data : {
        // return {
        // msg: 'Welcome to Your Vue.js App'
        // }
         tabsName: [{  
            name: "新歌",  
            isActive: true  
        }, {  
            name: "排行榜",  
            isActive: false  
        }, {  
            name: "歌单",  
            isActive: false  
        }, {  
            name: "歌手",  
            isActive: false  
        }, {  
            name: "搜索",  
            isActive: false  
        }],  
        active: false ,
    },
    // 模板
    components: {
        //   vMusicList,
    },
    // 计算属性
    computed:{

    },
    // 方法
    methods: {  
        tabsSwitch: function(tabIndex) {
            var tabCardCollection = document.querySelectorAll(".tab-card"),  
                len = tabCardCollection.length;  

            for(var i = 0; i < len; i++) {  
                tabCardCollection[i].style.display = "none";  
                this.tabsName[i].isActive = false;  
            }  
            this.tabsName[tabIndex].isActive = true;  
            tabCardCollection[tabIndex].style.display = "block";  
        }  
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar{
        width: 100%;
        height: 8rem;
        background-color: #FF5E00;
        position: relative;
        z-index: 4;
        top: 0;
        left: 0;
    }
    .logo{
        width: 16rem;
        margin-left: 1rem;
        margin-top: 2.4rem;
        height: 3.5rem;
        display: block;
        float: left;
        background: url(../img/TB1VRVNKFXXXXXsXpXXXXXXXXXX-426-84.png) no-repeat;
        background-size: contain;
    }
    .download{
        width: 9.8rem;
        height: 8rem;
        display: block;
        background: url(../img/TB1qd4KKFXXXXb1XpXXXXXXXXXX-216-64.png) no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        right: 1rem;
        top: 0;
    }
    .navs{
        width: 100%;
        position: relative;
        z-index: 4;
        left: 0;
    }
    .navs .nav{
        width: 100%;
        height: 4rem;
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
        background-color: rgba(249,249,249,.6);
        background-image: linear-gradient(to bottom,rgba(249,249,249,.8),rgba(235,235,235,.8));
        height: 4rem;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-box;
        font-size: 1.6rem;
    }
    /* .navs .nav .item {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        flex: 1;
        display: block;
        text-align: center;
        overflow: hidden;
        color: #262b2f;
        text-decoration: none;
        line-height: 4rem;
    }
    .navs .nav .active {
        color: #ff5800;
        box-shadow: inset 0 -2px 0 #ff5800;
    } */
    
</style>
