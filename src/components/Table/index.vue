<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="num" label="序号"> </el-table-column>
    <el-table-column prop="sheet" label="工单编号"> </el-table-column>
    <el-table-column prop="serve" label="设备编号"> </el-table-column>
    <el-table-column prop="type" label="工单类型"> </el-table-column>
    <el-table-column prop="way" label="工单方式"> </el-table-column>
    <el-table-column prop="status" label="工单状态"> </el-table-column>
    <el-table-column prop="perple" label="运营人员"> </el-table-column>
    <el-table-column prop="date" label="创建日期"> </el-table-column>
    <el-table-column prop="work" label="操作"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: "1",
          sheet: "202208040001",
          serve: "01000023",
          type: "补货工单",
          way: "手动",
          status: "取消",
          perple: "运营蔡弘壮",
          date: "2022.08.04 14:39:05",
          work: "查看详情",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
