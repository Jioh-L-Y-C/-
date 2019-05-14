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
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
            align="center" 
              label="投标公告"
              prop="office"
             >
            </el-table-column>
            <el-table-column
            align="center" 
              label="创建时间"
              prop="exe"
             >
            </el-table-column>
            <el-table-column
            align="center" 
              label="截止时间"
              prop="expert"
             >
            </el-table-column>
            <el-table-column
            align="center" 
              label="是否已完成资格预审"
              prop="result"
             >
            </el-table-column>
            <el-table-column
            align="center" 
              label="评审意见"
              prop="idea"
             >
            </el-table-column>
            <el-table-column width="400" align="center" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="eitd"
                  >修改招标文件</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="upload"
                  >上传招标文件</el-button>
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
        title="修改招标文件"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <div>
        <el-form  label-width="90px" >
          <el-form-item  label="招标项目">
            <el-input value="蓝天教育项目"></el-input>
          </el-form-item>
          <el-form-item label="投标公告">
            <el-input value="上海风一有限公司" ></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-input  value="1014-01-24"></el-input>
          </el-form-item>
          <el-form-item label="截止时间">
            <el-input value="2017-06-05"></el-input>
          </el-form-item>
          <el-form-item label="是否已完成资格预审">
            <el-input  value="未过审核"></el-input>
          </el-form-item>
          <el-form-item label="评审意见">
            <el-input  value="已审核"></el-input>
          </el-form-item>
        </el-form>
        </div>
        <el-button type="primary" @click="ok">修改</el-button>
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
.el-dialog__header {
    background: #eee;
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
          office:"上海风一有限公司",
          exe:"1014-01-24",
          expert:"2017-06-05",
          result:"未过审核",
          idea:"非常符合要求"

        }, {
          date: '2016-05-04',
          name: '蓝天教育项目',
          type:"已审核",
          office:"上海风一有限公司",
          exe:"1014-01-24",
          expert:"2017-06-05",
          result:"通过审核",
          idea:"非常符合要求"

        }, {
          date: '2016-05-01',
          name: '蓝天教育项目',
          type:"未审核",
          office:"上海风一有限公司",
          exe:"1014-01-24",
          expert:"2017-06-05",
          result:"通过审核",
          idea:"非常符合要求"


        }, {
          date: '2016-05-03',
          name: '蓝天教育项目',
          type:"已审核",
          office:"上海风一有限公司",
          exe:"1014-01-24",
          expert:"2017-06-05",
          result:"通过审核",
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
      eitd(){
        this.dialogVisible=true
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
          message:"修改成功",
          type:"success"
        })
      }
    }
  }
</script>