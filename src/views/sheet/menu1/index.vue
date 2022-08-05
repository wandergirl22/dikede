<template>
  <el-container>
    <el-header>
      <Input />
      <Select />
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </el-header>
    <el-main>
      <el-button type="warning" icon="el-icon-circle-plus-outline"
        >新建</el-button
      >
      <el-button type="text" class="text">工单配置</el-button>
      <Table />
    </el-main>
  </el-container>
</template>

<script>
import Input from "@/components/Input";
import Select from "@/components/Select";
import Table from "@/components/Table";
export default {
  data() {
    return {};
  },
  components: {
    Input,
    Select,
    Table,
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.el-header {
  display: flex;
  background-color: #fff;
  margin-top: 20px;
}
/deep/ .el-select {
  margin: 0 20px;
}
.el-button {
  height: 40px;
}
.text {
  width: 90px !important;
  height: 40px;
  background-color: #fbf4f0 !important;
  color: #655b56 !important;
}
</style>
