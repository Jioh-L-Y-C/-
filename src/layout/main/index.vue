<template>
    <el-container>
       <el-header>
         <!-- 面包屑 -->
          <mainTop></mainTop>
       </el-header>
        <el-main >                      
         <transition name="slide">
            <router-view class="child-view"></router-view>   
         </transition>          
       </el-main>
    </el-container>
</template>

<script>
import mainTop from "./mainTop"
  export default {
    components:{
      mainTop,
    }
  }
</script>

<style lang="scss" scoped>
  .el-header{
    height: 40px !important;
    padding: 0;
    margin-left: 10px;
    .el-breadcrumb {
      margin-top: 13px;
    }
  }
  main.el-main{
  width: 100%;
  height:100%;
    box-sizing: border-box;
    background: #eee;
    
  }
 
.child-view {
  position: absolute;
  left: 200px;
  top: 49px;
  width: calc(100% - 200px);
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  transition: all 0.5s ;
}
.slide-enter,
.slide-enter-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-leave-active,
.slide-enter {
  opacity: 0;
}
</style>