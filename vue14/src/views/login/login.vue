<template>
  <div class="login">
    <h1>login</h1>
    <login-head>
      <el-form :model="ruleForm" ref="ruleForm" slot="container" :rules="rules">
        <div class="title">
          <h3>管理员登录</h3>
        </div>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入管理员名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            v-model="ruleForm.pwd"
            autocomplete="off"
            placeholder="请输入管理员密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
         </el-form-item>
         <el-form-item>
<el-checkbox v-model="ruleForm">
  自动登录
</el-checkbox>
           <el-button type="text" class="forget" @click="$router.push('/password')">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </login-head>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import LoginHead from "./loginhead.vue";
import { State,Getter,Mutation,Action } from "vuex-class";
@Component({
  components: {
    LoginHead,
  },
})
export default class HelloWorld extends Vue {
  @Action("setUser") setUser:any;
  @Provide() ruleForm: {
    username: string;
    pwd: string;
    autoLogin:boolean;
  } = {
    username: "",
    pwd: "",
    autoLogin:true,
  };
  @Provide() rules={
      username:[{required:true,message:"请输入管理员名",trigger:"blur"}],
      pwd:[{required:true,message:"请输入管理员密码",trigger:"blur"}]
  }
  submitForm():void{
 (this.$refs["ruleForm"] as any).validate((valid:boolean) => {
          if (valid) {
            (this as any).$axios.post('/api/users/login',this.ruleForm).then
         ((res:any)=>{
             console.log("res",res);
             localStorage.setItem('myToken',res.data.data.token);
             this.setUser(res.data.data.token);
             this.$router.replace("/")
         })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
