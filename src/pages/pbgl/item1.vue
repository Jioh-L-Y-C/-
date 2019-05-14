<template>
  <div class="content">
      <div class="top">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="关键字">
            <el-input v-model="formInline.user" placeholder="关键字"></el-input>
          </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >查询</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="onAdd">新增专家</el-button>
        <el-button type="primary">批量删除</el-button>
        <el-button type="primary">导出</el-button>
      </div>

      <div class="table">
                <el-table
            :data="tableData"
            style="width: 100%">

              <el-table-column
              type="selection"
              width="55">
              </el-table-column>
            <el-table-column
              label="项目名称"
              align="center"
             >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.project }}</span>
              </template>
            </el-table-column>
           
               <el-table-column
              label="项目建议书"
              align="center"
             >
              <template slot-scope="scope">
             
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>

                <el-table-column
              align="center"
              label="项目可行性研究报告"
              width="400"
             >
              <template slot-scope="scope">
              
                <span style="margin-left: 10px">{{ scope.row.address }}</span>
              </template>
            </el-table-column>
        
            <el-table-column
              label="创建时间"
              align="center"
              sortable
             >
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.date }}</el-tag>
                  </div>
              </template>
              
            </el-table-column>
           
            <el-table-column width="170"    align="center" label="专家" >
            <template>
                <el-button type="primary" >抽取</el-button>
              </template>
            </el-table-column>
          </el-table>
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
        lock:false,//是否新建
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
      },
      onAdd(){
        this.lock =true
      }
    }
  }
</script>