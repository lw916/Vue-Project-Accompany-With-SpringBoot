<template>
  <router-view></router-view>
  <el-container style="height:10%">
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Foot"
}
</script>

<style scoped>

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  float:bottom;
}

</style>