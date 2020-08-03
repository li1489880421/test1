<template>
  <div class="layout">
      <layout-head></layout-head>
    <conternt>
   <slider-bar slot="left"> </slider-bar>
   <!-- 组件渲染的位置 -->
   <router-view slot="content"></router-view>
    </conternt>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component,Vue } from "vue-property-decorator";
import LayoutHead from "./LayoutHead.vue"
import Conternt from "./Conternt.vue"
import SliderBar from "./SliderBar.vue"
@Component({
  components:{
  LayoutHead,
  Conternt,
  SliderBar
  }
})
export default class Index extends Vue {
  
}
</script>