<template>
<!-- 头部导航 -->
  <div>
      <el-menu default-active="1" active-text-color="#ffd04b" class="el-menu-demo" background-color="#545c64"
      text-color="#fff" mode="horizontal" @select="handleSelect">
        <div style="float:left;display:flex;" index="1">
          <div class="logo"></div>
          <el-menu-item index="1" @click="go('/ywbl')">业务办理</el-menu-item>
          <el-menu-item index="2" @click="go('/user')">业务审核</el-menu-item>
          <el-menu-item index="3" @click="go('/pbgl')" >评标管理</el-menu-item>
        </div>
        <div style="float:right;display:flex;">
          <el-menu-item index="7">
            <img style="width:40px;border-radius: 50%" src="http://img1.mydrivers.com/img/20181105/Sc468f356-6839-4b7b-8bd4-4dd06b218478.jpg" alt="">
          </el-menu-item>
          <el-menu-item index="8">
          <el-badge :value="12" class="item">
            <el-button size="small" icon="el-icon-message-solid">消息</el-button>
        </el-badge></el-menu-item>
          <el-submenu index="9">
            <template slot="title"><i class="el-icon-s-custom"></i>admin</template>
            <el-menu-item index="9-1">更改用户</el-menu-item>
            <el-menu-item index="9-2">修改密码</el-menu-item>
            <el-menu-item index="9-3" @click="outLogin">退出登录</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .el-menu.el-menu--horizontal{
    border: 0;
    // padding-left:200px; 
  }
  .el-menu-item.is-active{
    border-bottom: 1px solid orange;
    
  }
  .el-menu-item{
    text-align: center;
    position: relative;
  }
  .logo{
    width: 200px;
    height: 56px;
    background:url("../../assets/logo.png");
    background-size: 100% 100%;
    border-radius: 8px;

  }
</style>



<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    go(path){
      console.log(path)
      this.$router.push(path)
    },
    outLogin(){
       this.$confirm('是否退出登录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push("/login")
          this.$message({
            type: 'success',
            message: '退出成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
    }
    },
  }
</script>