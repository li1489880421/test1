<template>
  <el-dialog title="编辑客户资料" :visible.sync="dialogVisible"
  :show-close="false"
  :close-on-click-modal="false" label-position="left">
    <el-form :model="form" label-width="80px" :rules="rules"
    ref="ruleForm">
  <el-form-item label="编号" prop="id">
    <el-input v-model="form.id" readonly></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input v-model="form.name">
    </el-input>
  </el-form-item>
  <el-form-item label="性别" prop="gender">
    <el-radio-group v-model="form.gender" placeholder="请选择性别">
    <el-radio label="男"></el-radio>
    <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="form.email" ></el-input>
  </el-form-item>
    <el-form-item label="卡的类型" >
        <el-select v-model="form.card" placeholder="请选择卡的类型">
        <el-option label="借记卡" value="借记卡"></el-option>
        <el-option label="信用卡" value="信用卡"></el-option>
        <el-option label="亲友卡" value="亲友卡"></el-option>
        <el-option label="学生卡" value="学生卡"></el-option>
    </el-select>

  </el-form-item>
    <el-form-item label="联系方式" prop="tel">
    <el-input v-model="form.tel" ></el-input>
  </el-form-item>
  <el-form-item label="注册时间" prop="registable">
      <el-date-picker type="date"
      placeholder="选择时间"
      v-model="form.registdate" style="width:100%"
      value-format="yyyy-MM-dd"></el-date-picker>
    </el-form-item>
   

</el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')">取 消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">修改用户的信息</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import {Component,Vue,Prop,Provide} from "vue-property-decorator";

@Component({
  components:{
      
  }
})
export default class EditDialog extends Vue {
  @Prop(Boolean) dialogVisible!:boolean;
  @Prop(Object) form!:{
    id:number,
    name:string,
    gender:string,
    email:string,
    card:string,
    tel:string,
    registdate:string
  }
  @Provide() rules:any={
    name:{ required: true, message: '请输入客户名称', trigger: 'blur' },
    email:{ required: true, message: '请输入客户邮箱', trigger: 'blur' },
    tel:{ required: true, message: '请输入客户联系方式', trigger: 'blur' },  
  }
  created(){
    // console.log("this.form",this.form)
  }
  submitForm(formName:any) {
        (this as any).$refs[formName].validate((valid:any) => {
          if (valid) {
            (this as any).$axios.put(`/api/zhaocustomers/update`,this.form)
            .then((res:any)=>{
              if(res.data.errorNo==0){
                (this as any).$message({
                  message:res.data.message,
                  type:"success"
                })
              }else{
                (this as any).$message({
                  message:res.data.message,
                  type:"error"
                })
              }
              this.$emit("closeDialog");
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
}
</script>

