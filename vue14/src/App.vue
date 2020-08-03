<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script lang="ts">

  import { Component,Prop,Vue } from "vue-property-decorator";
  import { State,Getter,Mutation,Action} from "vuex-class";
  @Component({
    components:{}
  })
export default class App extends Vue{
  @Action("setUser") setUser:any;
  created(){
    this.setUser(localStorage.myToken)
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
