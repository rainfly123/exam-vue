<template>
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
          title: '初中英语二年级考试',
          flags: '高三 初一',
          date: '2016-05-02',
          isSet: false
        }, {
          date: '2016-05-04',
          id: '2',
          flags: '高三 初一',
          title: '初中英语二年级考试',
          isSet: false
        }, {
          date: '2016-05-01',
          id: '3',
          flags: '高三 初一',
          title: '初中英语二年级考试',
          isSet: false
        },
        {
          date: '2016-05-03',
          id: '4',
          title: '初中英语二年级考试',
          isSet: false
        },
        {
          date: '2016-05-03',
          id: '5',
          title: '初中英语二年级考试',
          isSet: false
        },
        {
          date: '2016-05-03',
          id: '6',
          title: '初中英语二年级考试',
          isSet: false
        },
        ]
      }
    },
   methods: {
          handleDelete(index, row) {
            console.log(index, row.title);
            this.tableData.splice(this.tableData.indexOf(row), 1);
          },
          enableEdit(index, row) {
            if (row.isSet) {
             //save data
             this.tableData[index] = row
             console.log(row)
            }
            row.isSet = !row.isSet;

          }

    }
  }
</script>
