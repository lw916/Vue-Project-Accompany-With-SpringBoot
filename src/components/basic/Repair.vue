<template>
  <el-container style="height:100%">
    <el-header>Title</el-header>
    <el-main>
      <div>
        <el-card class="box-card" v-for="item in RepairForm" :key="item">
          <template #header>
            <div class="card-header">
              <span>{{item.title}}</span>
            </div>
          </template>
          <div>
            {{item.event}}
          </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>添加报修事项</span>
            </div>
          </template>
          <div>
            <i class="el-icon-circle-plus-outline" style="font-size: 40px" @click="RepairDialogVisible = true"/>
          </div>
        </el-card>
        <el-dialog
            title="添加报修事项"
            v-model="RepairDialogVisible"
            width="80%"
            center
        >
          <div>
            <el-input
                prefix-icon="el-icon-user"
                placeholder="提交用户"
                v-model="RepairAddingForm.username"
                :disabled="true">
            </el-input>
            <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入报修内容"
                v-model="RepairAddingForm.event"
                style="margin-top: 20px">
            </el-input>
          </div>
          <template #footer>
          <span class="dialog-footer">
          <el-button @click="forgetDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="insert">提 交</el-button>
          </span>
          </template>
        </el-dialog>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Repair",
  data(){
    return{
      RepairForm:[
        {
          title:null,
          event:null
        }
      ],
      RepairDialogVisible:false,
      RepairAddingForm:{
        username:window.sessionStorage.getItem("user"),
        event:null
      }
    }
  },
  mounted(){
    this.RepairForm = null
    this.init()
  },
  methods:{
    init(){
      this.$http.get("/repair?username="+window.sessionStorage.getItem("user")).then(
          response => {
            if(response.data.status == 200){
              this.RepairForm = response.data.value
              this.$message.success("获取列表成功")
            }else{
              this.$message.error("获取列表失败，请联系管理员！")
            }
          }
      ).catch(
          error => console.log(error)
      )
    },
    insert(){
      this.$http.post("/repairAdd?" + this.$qs.stringify(this.RepairAddingForm)).then(
          response => {
            if(response.data.status == 200){
              this.RepairDialogVisible = false;
              this.init()
              this.$message.success("报修成功，请等待物业分配管理。")
            }else{
              this.$message.error("报修失败，请联系管理员！")
            }
          }
      )
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin: 20px;
}

</style>