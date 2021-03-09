<template>
  <el-container style="height: 100%">
    <el-header>Title</el-header>
    <el-main>
      <el-carousel indicator-position="outside" >
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{item}}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
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

.el-carousel_item h3{
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>