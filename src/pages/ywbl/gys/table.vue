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
              label="招标日期"
             >
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="中标公告"
             >
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column width="200" label="操作">
              <template>
                <el-button
                  size="mini"
                  type="primary"
                  @click="goToYl"
                  >预览</el-button>
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
    margin-bottom: 10px;
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
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '蓝天教育项目招标公告',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '蓝天教育项目招标公告',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '蓝天教育项目招标公告',
          address: '上海市普陀区金沙江路 1516 弄'
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
      goToYl(){
        this.$router.push("/tabltableItem")
      }
    }
  }
</script>