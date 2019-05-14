<template>
        <div class="login-box">  
           <div id="login">
                <h1>招标管理系统</h1>  
            <form method="post">  
                <p> 
                    <el-input prefix-icon="el-icon-s-custom" v-model="User_name" placeholder="请输入用户名"></el-input>
                </p>
                <p>
                    <el-input  prefix-icon="el-icon-s-cooperation" v-model="Pass_word" show-password placeholder="请输入用户密码"></el-input>
                </p>
                <p>
                    <!-- <el-row>
                     <el-col><el-radio :span="10" v-model="radio" label="1">备选项</el-radio></el-col>
                     <el-col><el-radio :span="10" v-model="radio" label="2">备选项</el-radio></el-col>
                    </el-row> -->
                    <!-- <el-row :gutter="40">
                    <el-col :span="15"><el-radio :span="10" v-model="radio" checked=checked label="1">记住密码</el-radio></el-col>
                    <el-col :span="9"><el-radio :span="10" v-model="radio1" checked=true label="1">自动登录</el-radio></el-col>
                    </el-row> -->

                     <el-checkbox-group v-model="checkList">
                        <el-row>
                             <el-col :span="15">
                                <el-checkbox class="cb" checked label="记住密码"></el-checkbox>
                                </el-col>
                                <el-col :span="9">
                                <el-checkbox class="cb" checked label="自动登录"></el-checkbox>
                            </el-col>
                        </el-row>
                    </el-checkbox-group>
                </p>
               <p>
                    <el-button type="primary" style="width:100%" @click="goHome">登录</el-button>
               </p>
            </form>  
           </div>
            <!-- 滑动验证码 -->
           <slide-verify v-show="isLogin" :l="70"
            :r="10"
            :w="400"
            :h="300"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
        </div>  
</template>

<script>
import { setTimeout } from 'timers';
    export default {
        data(){
            return{
                User_name:'admin',
                Pass_word:122311123,
                 checkList:[],
                 msg:'',
                 isLogin:false
            }
        },methods:{
            goHome(){
               this.isLogin=true
               
            },
             onSuccess(){
                  this.$message({
                    type:'success',
                    message:'登录成功,即将跳到首页'
                })
                this.msg = 'login success'
                 setTimeout(()=>{
                    this.$router.push('/input')
                },2000)
            },
            onFail(){
                this.msg = ''
            },
            onRefresh(){
                this.msg = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-box{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0px;
        overflow: hidden;
        background: url("../../assets/loginBJ.jpg") no-repeat center center;
        background-size: 100% 100%;
    }
    #login{   
    padding: 20px 30px;
    position: absolute;   
    top: 50%;   
    left:50%;   
    margin: -150px 0 0 -150px;   
    width: 300px;   
    height: 300px;   
    background-color: rgba(0,0,0,0.5);
    border-radius: 8px;
}   
#login h1{   
    color: #fff;   
    text-shadow:0 0 10px;   
    letter-spacing: 1px;   
    text-align: center;   
}   
h1{   
    font-size: 2em;   
    margin: 0.67em 0;   
}   
p{
    margin: 20px 0;
}
.el-col.el-col-15{padding-left:15px;color:#000}
.el-col.el-col-9{padding-left:25px}
.el-radio{color: #000;}
.el-radio__input.is-checked+.el-radio__label {
    color: #eee;
}
.cb{
    color:#000 !important;
}
#slideVerify{
    height: 214px;
    position: absolute;
    top: -9px;
    left: -29px;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 100000;
}
.slide-verify-slider[data-v-6dd9a078] {
  
    width: 394px;

}
</style>