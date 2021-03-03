<template>
  <el-container style="height: 100%">
    <el-header>欢迎登陆</el-header>
    <el-main>
      <div class="div">
        <el-image :src="require('../assets/logo.png')" style="width: 30%;height: 30%"></el-image>
        <el-input
            placeholder="用户账户"
            prefix-icon="el-icon-user-solid"
            v-model="LoginForm.username">
        </el-input>
        <el-input
            placeholder="账户密码"
            prefix-icon="el-icon-lock"
            v-model="LoginForm.password">
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
                v-model="ForgetForm.forgetUsername">
            </el-input>
            <el-input
                prefix-icon="el-icon-message"
                placeholder="注册时使用的邮箱"
                v-model="ForgetForm.forgetEmail">
            </el-input>
          </div>
          <template #footer>
          <span class="dialog-footer">
          <el-button @click="forgetDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="forgetDialogVisible = false">找 回</el-button>
          </span>
          </template>
        </el-dialog>
      </div>
    </el-main>
    <el-footer>copyright @blask.cn</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
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
        forgetUsername:null,
        forgetEmail:null,
      },
    }
  },
  methods:{
    login(){
      this.$http.post('/login/',this.$qs.stringify(this.LoginForm)).then(
          response => {
            if(response.data.flag == 200){
              window.sessionStorage.setItem("user",this.LoginForm.username)
              this.$router.push("/success")
              this.$message.success(response.data.messages)
            }else{
              this.$message.error(response.data.messages)
            }
          }
      ).catch(
          error => {
            console.log(error)
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