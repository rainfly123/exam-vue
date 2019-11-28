<template>
<div>
     <el-dialog
  title="添加考试步骤"
  :visible.sync="dialogVisible"
  :before-close="handleClose"
  width="40%"
  >
<el-form :model="itemForm"  ref="itemForm" label-width="100px" class="demo-itemForm">
  <el-form-item label="步骤类型" prop="type">
    <el-radio-group v-model="itemForm.type">
      <el-radio label="audio">音频文件</el-radio>
      <el-radio label="tts">语音提示</el-radio>
      <el-radio label="record">耳机录音</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item v-if="itemForm.type==='tts'" label="输入指令" :rules="commandrule" prop="command">
    <el-input type="textarea" placeholder="下面收听一段录音，然后按下录音键开始录音" v-model="itemForm.command"></el-input>
  </el-form-item>
  <el-form-item v-if="itemForm.type==='record'" :rules="recordrule" label="录音时长" prop="duration">
  <el-input type="number" placeholder="纯数字(单位秒)" v-model="itemForm.duration"></el-input>
  </el-form-item>
  <el-form-item v-if="itemForm.type==='record'" :rules="recordrule" label="标准答案" prop="key">
    <el-input type="textarea" v-model="itemForm.key"></el-input>
  </el-form-item>

  <el-form-item v-if="itemForm.type==='audio'" label="音频文件">
  <el-upload
  class="upload-demo"
  drag
  :limit='1'
  action="https://jsonplaceholder.typicode.com/posts/"
  :before-upload="beforeAvatarUpload"
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传mp3/wmv/aac/opus文件，且不超过50MB</div>
</el-upload>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm('itemForm')">立即创建</el-button>
    <el-button @click="resetForm('itemForm')">重置</el-button>
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
            dialogVisible : true,
            /*
            formData: {
            items: [
            {type: 'audio',url:'https://resource.qctchina.top/a7a3f305c3a7a85274959bf0d4419898.mp3'},
            {type:'tts',command:'你好',url:"https://resource.qctchina.top/a7a3f305c3a7a85274959bf0d4419898.mp3" },
            {type: 'record', key:'hello', duration:60 , resource_id:13}
              ],
            },
            */
            itemForm: {
                type: '',
                command: '',
                duration: '10',
                key: '',
                audiourl: 'https://resource.qctchina.top/a.mp3',
              },
           commandrule: {
             command: [
               { required: true, message: '请填写语音指令', trigger: 'blur' }
             ]
           },
           recordrule: {
             key: [
               { required: true, message: '请填写标准答案', trigger: 'blur' }
             ],
             duration: [
               { min:1, max:3, required: true, message: '请设置录音时长(1-180)秒', trigger: 'blur' }
             ]
           }
          }
            
      },
      methods:{
             handleClose(done) {
             this.$router.go(-1)
          },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.itemForm);
            this.$emit('getMsgFromSon', this.itemForm)
             this.$router.go(-1)
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
    },
   watch: {
      'itemForm.type': {
          deep: true,
          immediate: true,
          handler(newtype, oldtype){console.log(newtype)}
      }
    } 
   

   
}
</script>
