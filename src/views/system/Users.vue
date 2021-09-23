<template>
  <el-row>
    <el-col :span="24" class="flex-space-between">
      <el-form ref="form" :model="formSearch" label-width="0">
        <el-form-item><el-input v-model="formSearch.name" placeholder="Please input"></el-input></el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="toCreateUser">新增</el-button>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="账户名称" width="180" />
        <el-table-column prop="name" label="账号" width="180" />
        <el-table-column prop="name" label="年龄" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="name" label="状态" width="180" />
        <el-table-column prop="name" label="操作" width="180" />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      formSearch: {
        name: ""
      },
      tableData: [],
    }
  },
  created() {
    this.tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ];
  },
  methods: {
    toCreateUser() {
      this.$router.push({ path: "/system/users/create" });
    }
  }
};
</script>

<style scoped></style>
