<template>
  <div class="content">
      <div class="top">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
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
              sortable
             >
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.project }}</span>
              </template>
            </el-table-column>
            <el-table-column sortable label="投标文件">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="$router.push('/inputItem')"
                  >上传</el-button>
              </template>
            </el-table-column>
            <el-table-column
              label="评审结果"
             >
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
           
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
    margin-top: 10px;
  }
</style>


<script>
  export default {
    data() {
      return {
         tableData: [{
          date: '2016-05-02',
          name: '通过审核',
          address: '上海市普陀区金沙江路 1518 弄',
          project:"高州教育后台管理系统招标项目"
        }, {
          date: '2016-05-04',
          name: '通过审核',
          address: '上海市普陀区金沙江路 1517 弄',
          project:"高州教育后台管理系统招标项目"
        }, {
          date: '2016-05-01',
          name: '通过审核',
          address: '上海市普陀区金沙江路 1519 弄',
          project:"高州教育后台管理系统招标项目"
        }, {
          date: '2016-05-03',
          name: '通过审核',
          address: '上海市普陀区金沙江路 1516 弄',
          project:"高州教育后台管理系统招标项目"
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
      }
    }
  }
</script>