<template>
 <div class="chart" style="width:400px;height:300px;" ref="mychart">
     
 </div>   
</template>
<script lang="ts">
import { Component,Vue, Prop} from "vue-property-decorator";
import echarts from "echarts";
@Component({
  components:{}
})
export default class Charts extends Vue {
  @Prop({type:String,default:"line"}) readonly chartType!:string;
  @Prop(Object) chartData!:string | null;
  mounted(){
      this.drawChart();
  }
  drawChart(){
    //   初始化echarts对象
    let chart = echarts.init((this as any).$refs.mychart as HTMLCanvasElement);
    if(chart == undefined){
        (this as any).$message({
type:"error",
message:"charts error"
        });
        return;
        
    }
    switch(this.chartType){
        case "line":
            chart.setOption((this as any).getLine());
            break;
            case "bar":
                 chart.setOption((this as any).getBar());
                break;
            case "pie":
                 chart.setOption((this as any).getLine());
                break;

    }
  }
  getLine(){
      return{
          title:{
              text:"商品销售",
              subtext:"goods show",
              x:"center"
          },
          xAxis:{
              type:"category",
              data:(this as any).chartData.xAxisData
          },
          yAxis:{
              type:"value"
          },
          series:[
              {
                  data:(this as any).chartData.yAxisData,
                  type:"line"
              }
          ]
      };
  }
  getBar(){
    return{
        xAxis: {
        type: 'category',
        data:(this as any).chartData.xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data:(this as any).chartData.yAxisData,
        type: 'bar',
        barWidth:"30%",
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }],

    }  
  }
}
</script>