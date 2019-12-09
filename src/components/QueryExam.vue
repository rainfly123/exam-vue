<template>
  <div>
<el-dialog
  title="提示"
  :visible.sync="AreyousureDelete"
  width="30%"
  center>
  <span>确认删除</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="AreyousureDelete = false">取 消</el-button>
    <el-button type="primary" @click="Delete">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="提示"
  :visible.sync="AreyousurePublish"
  width="30%"
  center>
  <span>确认操作</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="AreyousurePublish= false">取 消</el-button>
    <el-button type="primary" @click="Publish">确 定</el-button>
  </span>
</el-dialog>



  <h2>考试列表</h2>
 <el-button style="position: fixed;top:50px;left:50px;" icon="el-icon-plus" type="primary" @click="ShowCreateExam=true">创建考试</el-button>
  <createxam v-if="ShowCreateExam" v-on:closeCreatexam="closeCreatexam">
  </createxam>
 <el-divider></el-divider>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">

    <el-table-column
      label="序号"
      prop="id"
      align="center"
      style="width: 20%;">
    </el-table-column>

    <el-table-column
      prop="title"
      align="center"
      label="考试名称"
      style="width: 20%;">
      <template slot-scope="scope">
      <el-input size="small" v-model="scope.row.title" v-if="scope.row.isSet"></el-input> <span v-if="!scope.row.isSet">{{scope.row.title}}</span>
      </template>
    </el-table-column>


    <el-table-column
      prop="flags"
      align="center"
      label="标签"
      style="width: 20%;">

      <template slot-scope="scope">
      <el-input size="small" v-model="scope.row.flags" v-if="scope.row.isSet"></el-input> <span v-if="!scope.row.isSet">{{scope.row.flags}}</span>
      </template>
    </el-table-column>

    <el-table-column
      prop="date"
      label="日期"
      align="center"
      style="width: 20%;">
    </el-table-column>

    <el-table-column
      label="操作"
      align="center"
      style="width: 20%;">
      <template slot-scope="scope">
    <el-button-group>
    <el-button size="small" type="primary" round @click="handleQueryItems(scope.$index, scope.row)">查看</el-button>
    <el-button size="small" type="warning" round  icon="el-icon-edit"@click="enableEdit(scope.$index, scope.row)">{{scope.row.isSet?'保存':"修改"}}</el-button>
    <el-button size="small" type="danger" round @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    <el-button size="small" type="info" round @click="handlePublish(scope.$index, scope.row)">
  {{scope.row.published?'已发布':"发布"}}</el-button>
    </el-button-group>
      </template>
    </el-table-column>

  </el-table>
 <el-divider></el-divider>
  </div>
</template>

<script>
  import CreateExam from '@/components/CreateExam'
  export default {
    components: { 'createxam':CreateExam },
    data() {
      return {
        AreyousureDelete:false,
        AreyousurePublish:false,
        ShowCreateExam:false,
        handling:0,
        tableData: [{
          examid: 1,
          title: '初中英语二年级考试',
          flags: '高三 初一',
          date: '2016-05-02',
          published: true,
          isSet: false
        }, {
          date: '2016-05-04',
          id: 2,
          flags: '高三 初一',
          title: '初中英语二年级考试',
          published: false,
          isSet: false
        }, {
          date: '2016-05-01',
          id: 3,
          flags: '高三 初一',
          title: '初中英语二年级考试',
          isSet: false
        },
        {
          date: '2016-05-03',
          id: 4,
          title: '初中英语二年级考试',
          isSet: false
        },
        {
          date: '2016-05-03',
          id: 5,
          title: '初中英语二年级考试',
          isSet: false
        },
        {
          date: '2016-05-03',
          id: 6,
          title: '初中英语二年级考试',
          isSet: false
        },
        ]
      }
    },
   methods: {
          closeCreatexam(title, flags) { 
                        this.ShowCreateExam = false
                        console.log(title,flags)
                        var formatDate = function () {  
                                var date = new Date();
				var y = date.getFullYear();  
				var m = date.getMonth() + 1;  
				m = m < 10 ? ('0' + m) : m;  
				var d = date.getDate();  
				d = d < 10 ? ('0' + d) : d;  
				var h = date.getHours();  
				var minute = date.getMinutes();  
				minute = minute < 10 ? ('0' + minute) : minute; 
				var second= date.getSeconds();  
				second = minute < 10 ? ('0' + second) : second;  
				return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;  
			}
                        var l =  this.tableData.length
                        var id = 1
                        if (l > 0)
                            id = this.tableData[l - 1].id + 1
                        var one = {id:id, title:title, flags:flags.join(), isSet:false, date:formatDate()}
                        this.tableData.push(one)
                        console.log(formatDate())},

          handleDelete(index, row) {
            console.log(index, row.title);
            this.tableData.splice(this.tableData.indexOf(row), 1);
            this.AreyousureDelete = true
            this.handling = row.examid
          },
          Delete(){
              this.AreyousureDelete = false
              this.$message({
                message: '删除成功 ' + this.handling,
                type: 'success',
                center: 'true',
                duration: 1000
            });
          },
          Publish(){
              this.AreyousurePublish = false
              this.tableData[this.displayItem].published = !this.tableData[this.displayItem].published 
              this.$message({
                message: '操作成功'+this.handling,
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
             this.$message({
                message: '保存成功',
                type: 'success',
                center: 'true',
                duration: 1000
            });
            }
            row.isSet = !row.isSet;

          },
          handlePublish(index, row) {
             this.handling = row.examid
             this.displayItem = this.tableData.indexOf(row)
             //save data
             console.log(row)
             this.AreyousurePublish  = true
          },

          handleQueryItems(index, row) {
            this.$router.push({name:'QueryItem',query: {examid: row.id}});

          }



    }
  }
</script>
