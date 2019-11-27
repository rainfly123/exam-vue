<template>
<div>
      <el-button type="primary" @click="dialogVisible = true">新增一项</el-button>
     <el-dialog
  title="添加考试步骤"
  :visible.sync="dialogVisible"
  width="40%"
  >
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="步骤类型" prop="type">
    <el-radio-group v-model="ruleForm.type">
      <el-radio label="audio">音频文件</el-radio>
      <el-radio label="tts">TTS指令</el-radio>
      <el-radio label="record">耳机录音</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="输入指令" prop="command">
    <el-input type="textarea" placeholder="下面收听一段录音，然后按下录音键开始录音" v-model="ruleForm.command"></el-input>
  </el-form-item>
  <el-form-item label="录音时长" prop="duration">
  <el-input type="number" placeholder="纯数字(单位秒)" v-model="ruleForm.duration"></el-input>
  </el-form-item>
  <el-form-item label="标准答案" prop="key">
    <el-input type="textarea" v-model="ruleForm.key"></el-input>
  </el-form-item>

  <el-form-item label="音频文件">
  <el-upload
  class="upload-demo"
  drag
  limit="1"
  action="https://jsonplaceholder.typicode.com/posts/"
  :before-upload="beforeAvatarUpload"
  headers="resourceid">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传mp3/wmv/aac/opus文件，且不超过50MB</div>
</el-upload>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>

</el-form>

</el-dialog>
</div>
</template>

<script>
    export default {
      data(){
          return{
            imageUrl: '',
            dialogVisible : false,
            formData: {
            items: [
            {type: 'audio',url:'https://resource.qctchina.top/a7a3f305c3a7a85274959bf0d4419898.mp3'},
            {type:'tts',command:'你好',url:"https://resource.qctchina.top/a7a3f305c3a7a85274959bf0d4419898.mp3" },
            {type: 'record', key:'hello', duration:60 , resource_id:13}
              ],
            },
            ruleForm: {
          command: '',
          duration: 60,
          key: '',
          delivery: false,
          type: [],
          resource: '',
        },
        rules: {
          type: [
            { required: true, message: '请设置类型', trigger: 'change' }
          ],
          duration: [
            { max:3, required: true, message: '请设置录音时长', trigger: 'blur' }
          ],
          command: [
            { required: true, message: '请填写语音指令', trigger: 'blur' }
          ],
          key: [
            { required: true, message: '请填写标准答案', trigger: 'blur' }
          ]
        }
            
          }
      },
      methods:{
        addDomain() {
          },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type.indexOf('audio') > - 1;
        const isLt2M = file.size / 1024 / 1024 < 50;

        if (!isJPG) {
          this.$message.error('上传文件只能是 音频 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传音频大小不能超过 50MB!');
        }
        return isJPG && isLt2M;
      }
    }
   

   
}
</script>
