<template>
    <el-scrollbar>
        <el-menu router :default-active="$router.currentRoute.path">
          <template v-for="(item,index) in getRourters" >
            <div  v-if="item.children&&item.children.length>0" :key="index">
               <el-menu-item v-if="item.children.length==1" :index="item.children[0].path" :key="item.name">
                  <i :class="item.children[0].meta.icon"></i>
                  <span slot="title" style="margin-left:10px;">{{item.children[0].meta.title}}</span>
              </el-menu-item>
              <el-submenu v-else :index="item.children[0].path" :key="item.name">
                  <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title" style="margin-left:10px;">{{item.meta.title}}</span>
                   </template>
                   <el-menu-item style="margin-left:20px;" v-for="child in item.children" :index="child.path" :key="child.name">
                       <i :class="child.meta.icon"></i>
                      <span slot="title">{{child.meta.title}}</span>
                   </el-menu-item>
              </el-submenu>
              </div>
          </template>
        </el-menu>
    </el-scrollbar>
</template>
<script lang="ts">
// @ is an alias to /src
import { Component,Vue } from "vue-property-decorator";

  import { State,Getter,Mutation,Action} from "vuex-class";
@Component({
  components:{

  }
})
export default class SliderBar extends Vue {
  @Getter("routers")getRourters:any;
  created(){
    console.log("rr:",this.getRourters)
  }
}
</script>