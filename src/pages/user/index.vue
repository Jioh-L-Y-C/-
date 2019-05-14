<template>
  <el-container  class="content">
    <el-aside :style="$store.state.openWidth" width="200px">
              <asideLeft :navList="navList"></asideLeft>
    </el-aside>
    <Main></Main>
  </el-container>
</template>

<script>

  export default {
    data(){
      return {
             navList :[ //导航栏菜单
    {id:"1", path:"/" ,title:"业务审核", icon:"el-icon-location",children:[{id:"1-1",path:"/item1" ,title:"项目审核", icon:"el-icon-heavy-rain"},{id:"1-2",path:"/item2" ,title:"投标资格审核", icon:"el-icon-heavy-rain"}]},

  ],
      }
    },
    components:{
    }
  }
</script>

<style lang="scss" scoped>
 .el-menu-item{
  background:orange;
  height: 100%;
}

   .el-aside {
     background-color:#545c64;
    color:#fff;
    text-align: center;
    line-height: 200px;
  }
  
  section.el-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
 
</style>