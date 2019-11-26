<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">

    <el-table-column
      label="序号"
      align="center"
      width="180">
      <template slot-scope="scope">
      <span>{{scope.$index}}</span>
        </template>
    </el-table-column>

    <el-table-column
      prop="title"
      align="center"
      label="考试名称">
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
        tableData: [{
          id: '1',
          title: '初中英语二年级考试',
          flags: '高三 初一',
          date: '2016-05-02',
          no: '<a>i'
        }, {
          date: '2016-05-04',
          id: '1',
          flags: '高三 初一',
          title: '初中英语二年级考试',
        }, {
          date: '2016-05-01',
          id: '1',
          flags: '高三 初一',
          title: '初中英语二年级考试',
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
       {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },
        {
          date: '2016-05-03',
          id: '1',
          title: '初中英语二年级考试'
        },

        ]
      }
    },
   methods: {
          handleDelete(index, row) {
            console.log(index, row.title);
          }
    }
  }
</script>
