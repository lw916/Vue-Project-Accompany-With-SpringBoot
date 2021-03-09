<template>
  <el-container style="height:10%">
    <el-header>Title</el-header>
  </el-container>
  <router-view></router-view>
</template>

<script>
export default {
name: "Head"
}
</script>

<style scoped>

.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  float: top;
}

</style>