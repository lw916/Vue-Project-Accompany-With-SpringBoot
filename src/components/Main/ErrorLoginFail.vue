<template>
  <el-container style="height:100%">
    <el-header>
      <i class="el-icon-arrow-left" style="float:left;line-height: 60px" @click="returnFrontPage"/> Title
    </el-header>
    <el-main>
      <h1>不登陆就想偷看的孩子不是好孩子哦！</h1>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "ErrorLoginFail",
  methods:{
    returnFrontPage(){
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

</style>