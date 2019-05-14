<template>
  <div class="info">
        <div class="form">
             <el-form ref="form"  label-position="left" label-width="100px">
               <el-row :gutter="30">
                 <el-col :span="6">
                    <el-form-item label="用户名:">
                      <el-input ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="公司名称:">
                      <el-input ></el-input>
                   
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="组织机构代码:">
                                       <el-input ></el-input>

                </el-form-item>
                </el-col>
               </el-row >

                <el-row  :gutter="30">
                  <el-col :span="6">
                      <el-form-item label="法人代表人:">
                        <el-input ></el-input>
                      </el-form-item>
                    </el-col>
                  <el-col :span="6">
                  <el-form-item label="成立日期:">
                                        <el-input ></el-input>

                  </el-form-item>
                  </el-col>
                  <el-col :span="6">
                  <el-form-item label="营业期限:">
                                        <el-input ></el-input>
                  </el-form-item>
                  </el-col>
               </el-row >


               <el-row  :gutter="30">
                  <el-col :span="18">
                      <el-form-item label="经营范围:">
                          <el-input
                                type="textarea"
                                :rows="8"
                                placeholder="请输入内容"
                              >
                              </el-input>
                      </el-form-item>
                    </el-col>
               </el-row >

                <el-row  :gutter="30">
                  <el-col :span="10">
                      <el-form-item label="营业执照:">
                          <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                            <el-button type="primary">上传</el-button>
                          </el-upload>
                      </el-form-item>
                    </el-col>
               </el-row >

               
               <el-row  :gutter="30">
                  <el-col :span="6">
                    <el-form-item label="联系人:">
                      <el-input ></el-input>
                    </el-form-item>
                  </el-col> 
                   <el-col :span="6">
                    <el-form-item label="联系电话:">
                      <el-input></el-input>
                    </el-form-item>
                  </el-col> 
                  <el-col :span="6">
                    <el-form-item label="电子邮箱:">
                      <el-input ></el-input>
                    </el-form-item>
                  </el-col> 
               </el-row>

                <el-row style=" text-align: center"  :gutter="30">
                  <el-col :span="9">
                            <el-button type="primary">修改</el-button>
                  </el-col> 
                  <el-col :span="9">
                            <el-button type="success">保存</el-button>
                  </el-col> 
               </el-row>
        </el-form>
        </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.info{
  width: 100%;
  height: 100%;
}
  .form{
    background: #fff;
    // height: 40px;
    padding: 5px;
    width: 100%;
    .el-form{
      width: 70%;
    margin: 0 auto;

    }
  }
  .el-form-item {
    margin-bottom: 0px;
}
.el-row{
  margin-bottom: 10px; 
}

</style>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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