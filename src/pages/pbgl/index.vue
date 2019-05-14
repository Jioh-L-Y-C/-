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
    {id:"1", path:"/pbgl" ,title:"评标管理", icon:"el-icon-data-board",children:[
      {id:"1-1", path:"/pbglitem1" ,title:"评审专家", icon:"el-icon-brush",children:[]},
    {id:"1-2", path:"/pbglitem2" ,title:"招标文件审核", icon:"el-icon-location",children:[]},
    {id:"1-3", path:"/pbglitem3" ,title:"招投标结果", icon:"el-icon-notebook-1",children:[]},
    {id:"1-4", path:"/pbglitem4" ,title:"中标信息", icon:"el-icon-thumb",children:[]},
    ]},
    

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