<template>
  <div class="content">
      <div class="top">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item >
            <el-input v-model="formInline.user" placeholder="关键字"></el-input>
          </el-form-item>
       
          <el-form-item>
            <el-button type="primary" >查询</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary">新建</el-button>
        <el-button type="primary">批量删除</el-button>
        <el-button type="primary">导出</el-button>
      </div>

      <div class="table">
                <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="招标项目"
             >
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="投标公司"
              prop="office"
             >
            </el-table-column>
            <el-table-column
              label="投标文件"
              prop="exe"
             >
            </el-table-column>
            <el-table-column width="200" label="操作">
              <template slot-scope="scope">
                <!-- 要跳到的 -->
                <el-button
                  size="mini"
                  type="primary"
                  @click="go(scope.row.meshods)"                  
                  >{{scope.row.meshods}}</el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
      <div class="page">
              <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
      </el-pagination>

      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .top{
    background-color: #fff;
    padding: 5px 0px 5px 10px;
  }.table{
    margin-top: 0px;
  }
  .page{
    margin-top: 10px;
    text-align: center;
  }
</style>


<script>
  export default {
    data() {
      return {
         tableData: [{
          date: '2016-05-02',
          name: '蓝天教育项目招标公告',
          type:"已审核",
          office:"上海风一有限公司",
          exe:"投标文件1",
          meshods:"发送中标通知书"

        }, {
          date: '2016-05-04',
          name: '蓝天教育项目招标公告',
          type:"已审核",
          office:"上海风一有限公司",
          exe:"投标文件2",
          meshods:"录入中标信息"

        }, {
          date: '2016-05-01',
          name: '蓝天教育项目招标公告',
          type:"未审核",
          office:"上海风一有限公司",
          exe:"投标文件3",
          meshods:"发送中标通知书"


        }, {
          date: '2016-05-03',
          name: '蓝天教育项目招标公告',
          type:"已审核",
          office:"上海风一有限公司",
          exe:"投标文件4",
          meshods:"发送中标通知书"

        }],
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       go(v){
      if(v=="录入中标信息"){
        this.$router.push("/inputItemChild1")
      }
    }
    },
   
  }
</script>