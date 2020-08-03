<template>
<div class="table-data">
  <div class="search-box">
  <el-input v-model="searchVal" placeholder="请输入搜索的名称" class="m-txt" size="small"></el-input>
  <el-button type="primary" size="small" icon="el-icon-search"
  @click="handleSearch">搜索</el-button>
  </div>

  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
       <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="card"
        label="卡类型">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="联系方式">

      </el-table-column>
      <el-table-column
       
        label="操作">
        <template slot-scope="scope">
      <el-button size="small" @click="handleEdit(scope)">编辑</el-button>
      <el-button size="small" type="danger" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pages">
       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      
      :page-sizes="[5, 10, 20]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
    <edit-dialog :dialogVisible="dialogVisible" @closeDialog="closeDialogFun"
    :form="formData"></edit-dialog>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component,Vue,Provide } from "vue-property-decorator";
import EditDialog from "./EditDiaiog.vue"

@Component({
  components:{
  EditDialog
  }
})
export default class BankCustomors extends Vue {
  @Provide() formData:Object={
    id:0,
    name:"",
    gender:"",
    email:"",
    card:"",
    tel:"",
    registdate:"",
  }
  @Provide() dialogVisible:boolean=false;
  @Provide() tableData:any=[];
   @Provide() searchVal:string="";
   @Provide() page:number=1;
   @Provide() size:number=5;
   @Provide() total:number=0;
  created(){
    // 发送axios
    this.getData();
  }
  getData(){
    (this as any).$axios(`/api/zhaocustomers/listbypage?page=${this.page}&size=${this.size}`).then((res:any)=>{
     this.tableData=res.data.data.customers
     this.total=res.data.data.total
    })
  }
  handleSizeChange(val:number):any{
    this.size=val;
   this.page=val;
    this.searchVal?this.getSearchData():this.getData();
  }
    handleCurrentChange(val:number):any{
    this.page=val;
    this.searchVal?this.getSearchData():this.getData();
  }
  handleSearch():void{
    this.page=1;
    this.getSearchData();
  }
  getSearchData(){
    (this as any).$axios(`/api/zhaocustomers/listbypageandname?page=${this.page}&size=${this.size}&cname=${this.searchVal}`).then((res:any)=>{
      console.log(res);
      this.tableData = res.data.data.customers
      this.total=res.data.data.total;
    })
  }
  handleEdit(data:any){
    this.formData= data.row;
    this.dialogVisible = true;

  }
  handleDelete(data:any){
    console.log("del",data);
    (this as any).$confirm('此操作是否删除记录','删除',{
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      type:'warning'
    }).then(()=>{
      (this as any).$axios.delete(`/api/zhaocustomers/del?id=${data.row.id}`)
      .then((res:any)=>{
 (this as any).$message({
        type:'success',
        message: res.data.message
      });
      this.tableData.splice(data.$index,1);
      })
     

  }).catch(()=>{

  });
}
  closeDialogFun(){
    this.dialogVisible = false;
  }
}
</script>
<style  scoped>

 .search-box{
    margin-top: 20px;
    display: flex;
    margin-bottom: 10px;
  }
  .search-box .m-txt{
    width: 250px;
    margin-right: 20px;
  }
  .pages{
    margin-top:20px;
  }




</style>