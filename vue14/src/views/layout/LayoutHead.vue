<template>
  <div class="layout-head">
    <p>万和银行后台管理系统</p>
    <p>
        <span>admin</span>
        <span class="u-exit" @click="logout">退出系统</span>
    </p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component,Vue } from "vue-property-decorator";


@Component({
  components:{
  
  }
})
export default class LayoutHead extends Vue {
  logout(){
     
       (this as any).$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.removeItem("myToken");
          this.$router.replace("/login");
         
        }).catch(() => {
               
        });
  }
}
</script>
<style>
  .layout-head{
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        background: #003040;
        color:white;
        display:flex;
        justify-content: space-between;
        line-height: 80px;
        padding: 0 20px;
    }
    .u-exit{
      margin-left: 30px;
    }
</style>