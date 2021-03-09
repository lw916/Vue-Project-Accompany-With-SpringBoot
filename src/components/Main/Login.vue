<template>
  <el-container style="height:100%">
    <el-header>Title</el-header>
    <el-main>
      <el-main>
        <div class="div">
          <el-image :src="require('../../assets/logo.png')" style="width: 30%;height: 30%"></el-image>
          <el-input
              placeholder="用户账户"
              prefix-icon="el-icon-user-solid"
              v-model="LoginForm.username">
          </el-input>
          <el-input
              placeholder="账户密码"
              prefix-icon="el-icon-lock"
              v-model="LoginForm.password"
              type="password"
          >
          </el-input>
          <el-button type="primary" @click="login">登 陆</el-button><el-button type="primary" @click="forgetDialogVisible = true">忘记密码</el-button>
          <el-dialog
              title="忘记密码"
              v-model="forgetDialogVisible"
              width="80%"
              center
          >
            <div>
              <el-input
                  prefix-icon="el-icon-user-solid"
                  placeholder="忘记账户的账户名"
                  v-model="ForgetForm.username">
              </el-input>
              <el-input
                  prefix-icon="el-icon-message"
                  placeholder="注册时使用的邮箱"
                  v-model="ForgetForm.email">
              </el-input>
            </div>
            <template #footer>
          <span class="dialog-footer">
          <el-button @click="forgetDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="forget">找 回</el-button>
          </span>
            </template>
          </el-dialog>
        </div>
      </el-main>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  <router-view></router-view>
</template>

<script>
export default {
  name:"Login",
  props: {
  },
  data(){
    return{
      LoginForm:{
        username:null,
        password:null,
      },
      forgetDialogVisible : false,
      ForgetForm:{
        username:null,
        email:null,
      },
    }
  },
  methods:{
    login(){
      this.$http.post('/login/',this.$qs.stringify(this.LoginForm)).then(
          response => {
            if(response.data.flag == 200){
              window.sessionStorage.setItem("user",this.LoginForm.username)
              this.$router.push("/home")
              this.$message.success(response.data.messages)
            }else{
              this.$message.error(response.data.messages)
            }
          }
      ).catch(
          error => {
            console.log(error)
            this.forgetDialogVisible = false
          }
      )

    },
    forget(){
      this.$http.post('/forget',this.$qs.stringify(this.ForgetForm)).then(
          response => {
            if(response.data.status == 200){
              this.$message.success("您的密码找回成功，密码为："+response.data.value)
              this.forgetDialogVisible = false
            }else{
              this.$message.error("密码找回失败，请检查输入信息。")
              this.forgetDialogVisible = false
            }
          }
      ).catch(
          error => {
            console.log(error)
            this.forgetDialogVisible = false
          }
      )
    }
  },
}
</script>

<style scoped>

.div{
  margin-top: 0;
}

.el-input,.el-button{
  margin-top:20px;
}

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