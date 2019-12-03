<template>
 <div>

  <h2>考试&nbsp;{{ $route.query.examid}}&nbsp;步骤</h2>
  <el-button style="position: fixed;top:50px;left:50px;" icon="el-icon-plus" type="primary" @click="ShowDial=true">新增步骤</el-button>
  <br>
  <br/>

<el-card v-for="item in tableData" class="box-card" :key="item.id" shadow="hover">
  <div slot="header" class="clearfix">
    <span>步骤序号: {{item.id}}</span>
    <el-button style="float: right; padding: 5px ; margin: 3px;" :disabled="item.type == 'audio'" type="warning" icon="el-icon-edit"@click="enableEdit(item)">{{item.isSet ? '保存':"修改"}}</el-button>
    <el-button style="float: right; padding: 5px;margin:3px;" type="danger" icon="el-icon-close" @click="handleDelete(item)">删除</el-button>
  </div>
  <div class="text item">
     <span v-if="item.type == 'audio'">音频文件</span>
     <span v-if="item.type == 'tts'">语音指令</span>
     <span v-if="item.type == 'record'">设备录音</span>
  </div>
  <div class="text item">
     <a v-if="item.type == 'audio'" :href="item.audiourl"><el-button type="info">播放</el-button></a>
  </div>
  <div class="text item">
      <el-input size="medium" v-model="item.command" v-if="item.isSet && item.type=='tts'"></el-input> 
     <span style="display:inline-block;width:250px" v-if="!item.isSet && item.type=='tts'">{{item.command}}</span>

  </div>
  <div class="text item">
      <el-input size="medium" v-model="item.duration" v-if="item.isSet && item.type=='record'""></el-input> <span v-if="!item.isSet && item.type=='record'" >{{item.duration}} &nbsp秒</span>
  </div>
  <div class="text item">
      <el-input size="medium" v-model="item.key" v-if="item.isSet && item.type=='record'"></el-input> <span v-if="!item.isSet && item.type=='record'">{{item.key}}</span>
  </div>
</el-card>

<createitem v-bind:dialogVisible="ShowDial" :examid="examid" :itemid="itemid" v-on:createItem="getMsgFromSon"></createitem >
  </div>
</template>

<script>

import CreateItem from '@/components/CreateItem'
  export default {
    components: { 'createitem':CreateItem },
    data() {
      return {
        ShowDial: false,
        tableData: [{
          id: 1,
          type: 'tts',
          command: "下面请听一段音频，然后1分钟准备，按录音键开始录音，再次按录音键结束录音",
          duration: '',
          key: '',
          audiourl: '',
          isSet: false
        }, {
          id: 2,
          type: 'audio',
          duration: '',
          command: '',
          key: '',
          audiourl: "https://resource.qctchina.top/a.mp3",
          isSet: false
        }, {
          id: 3,
          type: 'record',
          command: '',
          duration: '30',
          key: "there is a cat , it's eating fish",
          audiourl: '',
          isSet: false
        },
        {
          id: 4,
          type: 'tts',
          duration: '',
          command: "下面请听一段音频，然后1分钟准备，按录音键开始录音，再次按录音键结束录音",
          key: '',
          audiourl: '',
          isSet: false
        },
        {
          id: 5,
          type: 'audio',
          command: '',
          duration: '',
          key: '',
          audiourl: "https://resource.qctchina.top/a.mp3",
          isSet: false
        },
        {
          id: 6,
          type: 'record',
          command: '',
          duration: '10',
          key: "there is a cat",
          audiourl: '',
          isSet: false
        },
        ]
      }
    },
   methods: {
          handleDelete(row) {
            console.log(row);
            this.tableData.splice(this.tableData.indexOf(row), 1);
            this.$message({
                message: '删除成功',
                type: 'success',
                center: 'true',
                duration: 1000
            });
          },
          enableEdit(row) {
            if (row.isSet) {
             //save data
             var index = this.tableData.indexOf(row)
             this.tableData[index] = row
             console.log(row)
             if (row.type != 'audio') {
               this.$message({
                  message: '保存成功',
                  type: 'success',
                  center: 'true',
                  duration: 1000
                }); }
            }
            row.isSet = !row.isSet;

          },
          getMsgFromSon(data){
                console.log("receive msg")
                console.log(data)
                this.ShowDial = false
                var tmp = {...data}
                this.tableData.push(tmp)
         }
    },
   computed: {
       itemid:function(){
           var l = 0
           l = this.tableData.length
           if (l > 0)
               return this.tableData[l - 1].id + 1
           else
               return 1
       },
     examid:function(){
       return this.$route.query.examid
     }
   }
  }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 500px;
    margin:0 auto;
    margin-bottom: 20px;
  }
</style>
