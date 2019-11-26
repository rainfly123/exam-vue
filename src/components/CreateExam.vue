<template>
<div class="tag-group">
  <el-link icon="el-icon-edit">标签</el-link>
  &nbsp;
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </el-tag>
</div>
</template>

<script>
  export default {
  name: 'CreateExam',
  data() {
      return {
        items: [
          { type: 'success', label: '三年级' },
          { type: 'success', label: '四年级' },
          { type: 'info', label: '五年级' },
          { type: 'danger', label: '六年级' },
          { type: 'warning', label: '七年级' },
          { type: 'warning', label: '八年级' },
          { type: 'warning', label: '九年级' }
        ]
      }
    }
  }

</script>

<style>
</style>
