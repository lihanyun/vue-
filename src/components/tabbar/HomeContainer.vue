<template>
<div>
<h1>
        主页
    </h1>

    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbolist" :key="item.url">
            <img :src="item.img" alt="">
        </mt-swipe-item>

  
    </mt-swipe>

    <!-- 六宫格区域 -->
   
         <ul class="mui-table-view mui-grid-view mui-grid-6">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                   <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu2.png" alt=""> 
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu5.png" alt=""> 
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <<img src="../../images/menu1.png" alt=""> class="mui-icon mui-icon-gear"></<img src="../../images/menu1.png" alt="">>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <<img src="../../images/menu1.png" alt=""> class="mui-icon mui-icon-info"></<img src="../../images/menu1.png" alt="">>
		                    <div class="mui-media-body">about</div></a></li> -->
		           <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <<img src="../../images/menu1.png" alt=""> class="mui-icon mui-icon-more"></<img src="../../images/menu1.png" alt="">>
		                    <div class="mui-media-body">more</div></a></li> -->
		        </ul> 
 
   
</div>
    
</template>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

}
.mint-swipe-item{
    &:nth-child(1){
        background-color: red;
    }
     &:nth-child(2){
        background-color:blue;
    }
     &:nth-child(3){
        background-color: burlywood;
    }
}
ul{
background-color: white;
border: 0;
outline: none;
img{
    width: 60px;
    height: 60px;
}
.mui-media-body{
    font-size:13px;
}
} 
.mui-table-view.mui-grid-6 .mui-table-view-cell{
    border: 0;
    outline: none;
}
</style>
<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return{
            lunbolist: []
        };
    },
    created(){
      
    },
    methods:{


        // getLunbotu(){
        //     this.$http.get("http://vue.studyit.io/api/getlunbo" ).then(result=>{
        //         var result=result.body
        //         if (result.status===0){
        //             this.lunbolist=result.message
        //             Toast('加载轮播图成功')
        //         }
        //         else{
        //            Toast('加载轮播图失败')
        //         }
        //     })
        // }
    }
}
</script>


