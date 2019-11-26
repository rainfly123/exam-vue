<template>
<div class="tag-group">
  <p><b> 添加考试</b></p> 
  <div>
  <i class="el-icon-document"></i>
  考试名称
  <el-input style="width:550px"
    placeholder="请输入考试名称"
    v-model="title">
  </el-input>
  </div>
  <p>
  <div>
  <i class="el-icon-edit"></i>
  标签
  &nbsp;
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    @click="choseFlag(item)"
    effect="plain">
    {{ item.label }}
    <i v-if="item.icon" class="el-icon-success"></i>
  </el-tag>
  </div>
</div>
</template>

<script>
  export default {
  name: 'CreateExam',
  data() {
      return {
        flags: [],
        items: [
          { type: 'success', icon:false,  label: '三年级' },
          { type: 'info', icon:false,  label: '四年级' },
          { type: 'success',    icon:false,  label: '五年级' },
          { type: 'danger',  icon:false,  label: '六年级' },
          { type: 'warning', icon:false,  label: '七年级' },
          { type: 'info', icon:false,  label: '八年级' },
          { type: 'success', icon:false,  label: '九年级' },
          { type: 'warning', icon:false,  label: '高一' },
          { type: 'info', icon:false,  label: '高二' },
          { type: 'success', icon:false,  label: '高三' },
        ],
      title: '',
      }
    },
  methods: {
      choseFlag(tag) {
          tag.icon = !tag.icon 
          if (tag.icon) 
             this.flags.push(tag.label)
          else
             this.flags.splice(this.flags.indexOf(tag.label), 1);
          console.log(this.flags);
          console.log(this.title);
        }
    }
  }

</script>

<style>
</style>
