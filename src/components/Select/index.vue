<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      size="large"
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <slot />
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "待办",
        },
        {
          value: "选项2",
          label: "进行",
        },
        {
          value: "选项3",
          label: "取消",
        },
        {
          value: "选项4",
          label: "完成",
        },
      ],
      value: "",
    };
  },
};
</script>

<style scoped></style>
