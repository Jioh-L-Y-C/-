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
    {id:"1", path:"/供应商业务" ,title:"供应商业务", icon:"el-icon-location",children:[{id:"1-1",path:"/infor" ,title:"个人信息", icon:"el-icon-document"},{id:"1-2",path:"/table" ,title:"查看公告", icon:"el-icon-heavy-rain"},{id:"1-3",path:"/input" ,title:"上传投标文件", icon:"el-icon-heavy-rain"}]},
    {id:"2", path:"/管理员业务" ,title:"管理员业务", icon:"el-icon-s-check",children:[{id:"2-1",path:"/glyMagessitem1" ,title:"项目立项", icon:"el-icon-star-on"},{id:"2-2",path:"/glyMagessitem2" ,title:"发布招标公告", icon:"el-icon-edit"},{id:"2-3",path:"/glyMagessitem3" ,title:"发售招标文件", icon:"el-icon-document"},{id:"2-4",path:"/glyMagessitem4" ,title:"发布中标公告", icon:"el-icon-heavy-rain"},{id:"2-5",path:"/glyMagessitem5" ,title:"公告管理", icon:"el-icon-heavy-rain"}]},

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