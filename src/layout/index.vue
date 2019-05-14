<template>
       <el-container>
          <el-header v-show="$route.path !='/login'">
            <Header></Header>
          </el-header>
          <el-container>
            <!-- <el-aside :style="$store.state.openWidth" width="200px">
              <asideLeft></asideLeft>
            </el-aside>
            <el-main>
              <Main></Main>
            </el-main> -->
            <router-view></router-view>

      </el-container>
</el-container>
</template>

<script>
import Header from "./header"
import asideLeft from "./aside"
import Main from "./main"
  export default {
    components:{
      Header,
      asideLeft,
      Main
    }
    
  }
</script>

<style lang="scss" scoped>
.el-header{
  position: relative;
  z-index: 1000;
}
.el-aside,.el-menu-vertical-demo.el-menu{
  transition: max-width 0.3s;
}
    .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
     background-color:#545c64;
    color:#fff;
  }
  
  .el-aside {
     background-color:#545c64;
    color:#fff;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color:#eee;
    box-sizing: border-box;
    
  }
  
  section.el-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
    border: 0;
  } 
  .child-view{
      position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ;
  }
</style>