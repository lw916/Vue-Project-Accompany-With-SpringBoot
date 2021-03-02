<template>
  <el-container style="height: 100%">
    <el-header>Header</el-header>
    <el-main>
      <el-input
          placeholder="用户账户"
          prefix-icon="el-icon-user-solid"
          v-model="input1">
      </el-input>
      <el-input
          placeholder="账户密码"
          prefix-icon="el-icon-lock"
          v-model="input2">
      </el-input>
      <el-button type="primary">登陆</el-button>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

</style>