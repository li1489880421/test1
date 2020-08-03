<template>
  <div class="hello">
    <h1>password</h1>
    <login-head></login-head>
    <h3>忘记密码</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginHead from "./loginhead.vue"
@Component({
    components:{
        LoginHead
    }
})
export default class HelloWorld extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>