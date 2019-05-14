<template>
  <!-- 右侧导航 -->
    <el-menu
    :collapse="$store.state.isCollapse"
    :collapse-transition='true'
      default-active="1-1"
     
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="44554"  @click="open">
            <!-- <i style="font-size:30px;" :class="$store.state.isCollapse==false ? 'el-icon-s-unfold' : 'el-icon-s-fold ' " class="open" ></i> -->
             <transition name="fade">
                <i style="font-size:30px;" v-if="$store.state.isCollapse" class= 'open el-icon-s-fold '   ></i>
                        <!-- <i style="font-size:30px;" v-else class="open el-icon-s-unfold" ></i> -->
              </transition>
      </el-menu-item>
     <template v-for="items in navList">
      <!-- 单个导航 -->
      <el-menu-item :index="items.id" v-if="items.children.length==0&&items.title!=='首页'" :key="items.path+'/index'">
        <i :class="items.icon" :size=14 color="#fff"></i>
        <span slot="title" >{{items.title}}</span>
      </el-menu-item>
      <!-- 多个导航 -->
      <el-submenu :index="items.id" v-if="items.children.length!==0&&items.title!=='首页'" :key="items.path">
        <template slot="title">
          <i :class="items.icon" :size=14 color="#fff"></i>
          <span slot="title">{{items.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item) in items.children" :index="item.id" :key="item.name" @click="go(item)" >
            <i :class="item.icon" :size=14 color="#fff"></i><span > {{item.title}} </span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </template>
    </el-menu>
</template>

 
<script>
  export default {
    props:["navList"],
    data(){
        return{
          lock : false,
        }
    },
      methods:{
        open(){
           this.$store.commit('changeWidth')
        },
        go(item){
          this.$router.push(item.path)
        }
      }
  }
</script>

<style lang="scss" scoped>
.el-menu-item{
  background:orange;
  height: 60px;
}

.el-main {
    background-color:#eee;
    box-sizing: border-box;
    
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
</style>