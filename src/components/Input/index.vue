<template>
  <div>
    <div class="demo-input-suffix">
      <el-row>
        <slot />
        <el-col
          ><el-input size="large" placeholder="请输入" v-model="input">
          </el-input
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped></style>
