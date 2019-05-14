<template>
  <div>
    <div class="top">
      <h1>蓝天教育项目招标公告</h1>
    </div>
    <el-main>
        <el-form>
            <el-form-item label="招标人信息" label-width="150px">
                <el-input placeholder="请输入招标人信息"></el-input>
            </el-form-item>
              <el-form-item  
                label="招标项目基本信息"
              label-width="150px">
                <el-input 
                 type="textarea"
              :rows="7"
                placeholder="请输入招标项目基本信息"></el-input>
            </el-form-item>
              <el-form-item label="招标项目的物质需求" label-width="150px">
                <el-input  type="textarea"
              :rows="7" placeholder="请输入招标项目的物质需求"></el-input>
            </el-form-item>
        </el-form>
    </el-main>  
    <div class="footer">
      <el-Row>
        <el-col :span=12>
          <el-button type="primary" >
            增加项目
          </el-button>
        </el-col>
        <el-col :span=12>
          <el-button type="primary" @click="$router.push('/tabltableItem')">
            发布
          </el-button>
        </el-col>
      </el-Row>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
h1{
  font-size: 30px;
  text-align: center;
  color: #000;
  font-weight: 500;
}
.el-main{
  font-size: 20px;
  line-height: 30px;
}
.el-col{
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
</style>