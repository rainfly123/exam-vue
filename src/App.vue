<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        <div v-show="show" class="transition-box">.el-fade-in</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
       return {
         show: true
       }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
