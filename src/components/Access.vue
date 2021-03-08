<template>
  <el-container style="height: 100%">
    <el-header><i class="el-icon-arrow-left" style="float:left;line-height: 60px"/>智能门禁</el-header>
    <el-main>
      <div>
        <h1>欢迎回家</h1>
        <h3>当前开锁的大门为：{{door}}</h3>
        <img src="../assets/pic/QRcode.png"/>
        <br>
        <el-dropdown size="mini" style="margin: 10px 0">
          <el-button type="primary" @click="QueryAccess">选择进入的大门<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in SelectForm" :key="item" @click="door=item.name,time=item.time">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <p>有效期至：{{time}}</p>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Access",
  data(){
    return{
      SelectForm:[],
      door:"大门",
      time:"2021-10-1",
    }
  },
  methods:{
    QueryAccess(){
      if(this.SelectForm.length == 0){
        this.$http.post("/access?queryUser="+window.sessionStorage.getItem("user")
        ).then(
            response =>{
              console.log(response)
              if(response.data.status == "200"){
                this.SelectForm = response.data.value
                console.log(response.data.value)
                this.$message.success("成功获取！")
              }else{
                this.$message.error("出错")
              }
            }
        ).catch(
            error => {
              console.log(error)
            }
        )
      }
    }
  }
}
</script>

<style scoped>

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  text-align: center;
  font-size: large;
  font-weight: bold;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}


</style>