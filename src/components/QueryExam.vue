<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">

    <el-table-column
      label="序号"
      prop="id"
      align="center"
      width="180">
    </el-table-column>

    <el-table-column
      prop="title"
      align="center"
      label="考试名称">
      <template slot-scope="scope">
      <el-input size="small" v-model="scope.row.title" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)" v-if="showEdit[scope.$index]"></el-input> <span v-if="!showEdit[scope.$index]">{{scope.row.name}}</span>
      </template>
    </el-table-column>


    <el-table-column
      prop="flags"
      align="center"
      label="标签">
    </el-table-column>

    <el-table-column
      prop="date"
      label="日期"
      align="center"
      width="180">
    </el-table-column>

    <el-table-column
      prop="no"
      label="操作"
      align="center"
      width="180">
      <template slot-scope="scope">
    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>






  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        showEdit: [1,1,0,0], //显示编辑框
        tableData: [{
          id: '1',
          title: '初中英语二年级考试',
          flags: '高三 初一',
          date: '2016-05-02',
          no: '<a>i'
        }, {
          date: '2016-05-04',
          id: '2',
          flags: '高三 初一',
          title: '初中英语二年级考试',
        }, {
          date: '2016-05-01',
          id: '3',
          flags: '高三 初一',
          title: '初中英语二年级考试',
        },
        {
          date: '2016-05-03',
          id: '4',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '5',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '6',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '7',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '8',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '9',
          title: '初中英语二年级考试'
        },
       {
          date: '2016-05-03',
          id: '10',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '11',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '12',
          title: '初中英语二年级考试'
        },

        ]
      }
    },
   methods: {
          handleDelete(index, row) {
            console.log(index, row.title);
            this.tableData.splice(this.tableData.indexOf(row), 1);
          }
    }
  }
</script>
