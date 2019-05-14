<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
  export default {
    created(){
    },
    data(){
      return {
        pathLink:''
      }
    },
      // 监听,当路由发生变化的时候执行
      watch:{
        $route(to,from){
          this.pathLink =to.path
        }
      },
  }
</script>

<style lang="scss" scoped>

</style>