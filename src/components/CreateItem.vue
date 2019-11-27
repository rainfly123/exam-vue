<template>
<div>
      <el-button type="primary" @click="dialogVisible = true">新增一项</el-button>
     <el-dialog
  title="添加考试步骤"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="步骤类型" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="音频文件"></el-radio>
      <el-radio label="TTS指令"></el-radio>
      <el-radio label="耳机录音"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="输入指令" prop="desc">
    <el-input type="textarea" v-model="ruleForm.command"></el-input>
  </el-form-item>
  <el-form-item label="录音时长" prop="desc">
    <el-input type="text" v-model="ruleForm.duration"></el-input>
  </el-form-item>
  <el-form-item label="标准答案" prop="desc">
    <el-input type="textarea" v-model="ruleForm.key"></el-input>
  </el-form-item>

  <el-form-item label="音频文件">
  <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
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
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
            
          }
      },
      methods:{
        addDomain() {
          },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
   

   
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
