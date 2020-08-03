<template>
  <el-container>
    <el-aside width="200px">
      <slot name="left"></slot>
    </el-aside>
    <el-main>
      <div class="top">
        <i class="fa fa-recorder"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in breaditems" :key="index">{{ item.title }}</el-breadcrumb-item >
        </el-breadcrumb>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Content extends Vue {
  @Provide() breaditems: any;
  @Watch("$route") handleChange(to: any) {
    this.getRoutePath(this.$route);
  }
  created() {
    this.getRoutePath(this.$route);
  }
  getRoutePath(router: any) {
    let breadName = [{ path: "/", title: "后台管理系统" }];
    for (let i in router.matched) {
      if (router.matched[i].meta && router.matched[i].meta.title) {
        breadName.push({
          path: router.matched[i].path ? router.matched[i].path : "/",
          title: router.matched[i].meta.title,
        });
      }
    }
    this.breaditems = breadName;
  }
}
</script>
