<template>
  <div class="home">
 <div class="title">欢迎光临万和银行后台管理系统</div>
 <h3 class="u-description">介绍银行的相关业务</h3>
 <ul>
   <li> 1 贷款业务 </li>
   <li> 2 存款业务 </li>
   <li> 3 银行客户管理 </li>
   <li> 4 银行利率管理 </li>
   <li> 5 系统设置 </li>
 </ul>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component,Vue } from "vue-property-decorator";
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components:{
    HelloWorld
  }
})
export default class Home extends Vue {
  
}
</script>
<style scoped>
.home{
  background: #f8f8f8;
  padding: 50px;
  height: 400px;

  text-align: left;
}
h3{
  line-height: 30px;


}
.title{
 margin-bottom: 30px;
  font-weight: bold;

}
ul li{
  line-height: 30px;
}
</style>
