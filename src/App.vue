<template>
  <div id="app">
    <layout></layout>
    
  </div>
</template>

<script>
  import layout from './layout'
export default {
  data(){
    return{
      a:false
    }
  },
  name: 'App',
  components:{
    layout
  }
}
</script>
<style>
  *{
  margin: 0;
  padding: 0;
}
body,html{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#app{
  width: 100%;
  height: 100%;
}
 .page{
    margin-top: 10px;
    text-align: center;
  }
  .top{
    background-color: #fff;
    padding: 5px 0px 5px 10px;
    margin-bottom:10px;
    border-radius: 5px;
  }.table{
    margin-top: 0px;
    border-radius: 5px;

  }
.el-header{
  padding: 0 !important;
}
.el-badge__content.is-fixed {
    position: absolute;
    top: 15px !important;
    right: 10px;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(100%);
}
.slide-verify-slider[data-v-6dd9a078] {
  
    width: 394px !important;

}
</style>
