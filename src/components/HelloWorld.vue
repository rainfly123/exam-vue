<template>
  <div class="hello">
  <router-link to="createexam">创建考试</router-link>
  <router-link to="queryexam">查询考试</router-link>
  <router-link to="queryitem">查询考试流程</router-link>
  <router-link to="createitem">添加考试流程</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
