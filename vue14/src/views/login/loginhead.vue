<template>
  <div class="login-header">
    <h1>万和后台管理系统</h1>
    <div class="container">
        <slot name="container"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
     .login-header{
        width: 500px;
        margin:50px auto;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
        padding: 20px;
        border-radius: 10px;
        border:1px solid #ccc;
       
    }
    .login-header h2{
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
        font-weight: bold;
        
    }
</style>