<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">

    <el-table-column
      label="步骤序号"
      prop="id"
      align="center"
      style="width: 5%;">
    </el-table-column>

    <el-table-column
      prop="type"
      align="center"
      label="步骤类型"
      style="width: 5%;">
      <template slot-scope="scope">
     <span v-if="scope.row.type == 'audio'">音频文件</span>
     <span v-if="scope.row.type == 'tts'">语音指令</span>
     <span v-if="scope.row.type == 'record'">设备录音</span>
      </template>
    </el-table-column>


    <el-table-column
      prop="audiourl"
      align="center"
      :disabled="true"
      label="音频文件"
      style="width: 20%;">
      <template slot-scope="scope">
     <a v-if="scope.row.type == 'audio'" :href="scope.row.audiourl"><el-button type="info">播放</el-button></a>
      </template>
    </el-table-column>

    <el-table-column
      prop="command"
      label="提示指令"
      align="center"
      style="width: 20%;">

      <template slot-scope="scope">
      <el-input size="small" v-model="scope.row.command" v-if="scope.row.isSet && scope.row.type=='tts'"></el-input> <span v-if="!scope.row.isSet">{{scope.row.command}}</span>
      </template>
    </el-table-column>

    <el-table-column
      prop="duration"
      label="录音时长"
      align="center"
      style="width: 20%;">
      <template slot-scope="scope">
      <el-input size="small" v-model="scope.row.duration" v-if="scope.row.isSet && scope.row.type=='record'""></el-input> <span v-if="!scope.row.isSet">{{scope.row.duration}}</span>
      </template>
    </el-table-column>

     <el-table-column
      prop="key"
      label="录音答案"
      align="center"
      style="width: 20%;">
      <template slot-scope="scope">
      <el-input size="small" v-model="scope.row.key" v-if="scope.row.isSet && scope.row.type=='record'"></el-input> <span v-if="!scope.row.isSet">{{scope.row.key}}</span>
      </template>
    </el-table-column>




    <el-table-column
      label="操作"
      align="center"
      style="width: 20%;">
      <template slot-scope="scope">
    <el-button-group>
    <el-button size="small" :disabled="scope.row.type == 'audio'" type="warning" round  icon="el-icon-edit"@click="enableEdit(scope.$index, scope.row)">{{scope.row.isSet ? '保存':"修改"}}</el-button>
    <el-button size="small" type="danger" round @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </el-button-group>
      </template>
    </el-table-column>






  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '1',
          type: 'tts',
          command: "下面请听一段音频，然后1分钟准备，按录音键开始录音，再次按录音键结束录音",
          duration: '10',
          key: '',
          isSet: false
        }, {
          id: '2',
          type: 'audio',
          duration: '',
          key: '',
          audiourl: '',
          audiourl: "https://resource.qctchina.top/a.mp3",
          isSet: false
        }, {
          id: '3',
          type: 'record',
          command: '',
          duration: '30',
          key: "there is a cat , it's eating fish",
          audiourl: '',
          isSet: false
        },
        {
          id: '4',
          type: 'tts',
          duration: '10',
          command: "下面请听一段音频，然后1分钟准备，按录音键开始录音，再次按录音键结束录音",
          key: '',
          audiourl: '',
          isSet: false
        },
        {
          id: '5',
          type: 'audio',
          command: '',
          duration: '',
          key: '',
          audiourl: "https://resource.qctchina.top/a.mp3",
          isSet: false
        },
        {
          id: '6',
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
          handleDelete(index, row) {
            console.log(index, row.title);
            this.tableData.splice(this.tableData.indexOf(row), 1);
            this.$message({
                message: '删除成功',
                type: 'success',
                center: 'true',
                duration: 1000
            });
          },
          enableEdit(index, row) {
            if (row.isSet) {
             //save data
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

          }

    }
  }
</script>
