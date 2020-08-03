<template>
  <div class="charts-tab">
   <el-tabs v-model="tabPosition">
     <el-tab-pane label="折线图" name="line">
       <Charts chartType="line" :chartData="chartData"></Charts>
     </el-tab-pane>
          <el-tab-pane label="柱状图" name="bar">
       <Charts chartType="bar" :chartData="chartData"></Charts>
     </el-tab-pane>
          <el-tab-pane label="饼图" name="pie">
       <Charts chartType="pie" :chartData="chartData"></Charts>
     </el-tab-pane>
   </el-tabs>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component,Vue, Provide } from "vue-property-decorator";
import Charts from "@/components/Charts.vue"

@Component({
  components:{
  Charts
  }
})
export default class CurrentDeposit extends Vue {
  @Provide() tabPosition:string="";
  @Provide() chartData={
    xAxisData:["goods1","goods2","goods3","goods4","goods5"],
    yAxisData:[200,150,30,500,400]
  }
}
</script>
<style scoped>
.charts-tab{
  margin-top:10px;
}
</style>