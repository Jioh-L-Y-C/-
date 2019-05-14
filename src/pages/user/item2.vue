<template>
  <div class="content">
      <div class="top">
          <el-form :inline="true" class="demo-form-inline">
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
              align="center" 
             >
              <template slot-scope="scope" >
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
            align="center" 
              label="招标公司"
              prop="office"
             >
            </el-table-column>
            <el-table-column
            align="center" 
              label="审核状态"
              prop="result"
             >
            </el-table-column>
            <el-table-column width="400" align="center" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="eitd(scope.row)"
                  >审核</el-button>
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


      <!-- 修改弹框 -->
      <el-dialog
      center
        title="审批文件"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <div>
        <el-form  label-width="90px" >
          <el-form-item  label="招标项目">
            <el-input value="蓝天教育项目"></el-input>
          </el-form-item>
          <el-form-item label="投标公司">
            <el-input value="师弟师妹说项目建议书" ></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-input  value="1014-01-24"></el-input>
          </el-form-item>
          <el-form-item label="项目可行性研究报告">
            <el-input value="研究报告"></el-input>
          </el-form-item>
          <el-form-item label="审核状态">
            <el-input  value="已审核"></el-input>
          </el-form-item>
        </el-form>
        </div>
        <el-button type="primary" @click="ok">审批</el-button>
      </el-dialog>
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

div.el-dialog__header {
    background: #eee !important;
    padding: 20px 20px 10px;
}
</style>


<script>
  export default {
    data() {
      return {
        formData:{
          a:"",
          b:"",
          c:"",
          d:"",
          e:""
        },
        dialogVisible:false,
         tableData: [{
          date: '2016-05-02',
          name: '蓝天教育项目',
          type:"已审核",
          office:"师弟师妹说项目建议书",
          exe:"1014-01-24",
          expert:"研究报告",
          result:"未过审核",
          idea:"非常符合要求"

        }, {
          date: '2016-05-04',
          name: '蓝天教育项目',
          type:"已审核",
          office:"师弟师妹说项目建议书",
          exe:"1014-01-24",
          expert:"研究报告",
          result:"未过审核",
          idea:"非常符合要求"

        }, {
          date: '2016-05-01',
          name: '蓝天教育项目',
          type:"未审核",
          office:"师弟师妹说项目建议书",
          exe:"1014-01-24",
          expert:"研究报告",
          result:"通过审核",
          idea:"非常符合要求"


        }, {
          date: '2016-05-03',
          name: '蓝天教育项目',
          type:"未过审核",
          office:"师弟师妹说项目建议书",
          exe:"1014-01-24",
          expert:"研究报告",
          result:"未过审核",
          idea:"非常符合要求"

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
      eitd(row){
        // console.log(result)
        if(row.result=="未过审核"){
         this.$message({
          message:"审批成功",
          type:"success"
        })
        row.result = "通过审核"
        }else{
          this.$message({
          message:"已通过审核，不能再操作",
          type:"warning"
        })
        }
      },
      upload(){
        this.$message({
          message:"上传成功",
          type:"success"
        })
      },
      ok(){
        this.dialogVisible=false
         this.$message({
          message:"审批成功",
          type:"success"
        })
      }
    }
  }
</script>