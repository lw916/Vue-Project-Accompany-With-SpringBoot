<template>
  <el-container style="height:100%">
    <el-header><i class="el-icon-arrow-left" style="float:left;line-height: 60px" @click="returnFrontPage"/>Title</el-header>
    <el-main>
      <el-card class="box-card" v-for="item in Payment" :key="item">
        <template #header>
          <div class="card-header">
            <span>{{ '内容：' + item.name }}</span>
            <el-switch v-model="item.isSelect" @change="!item.isSelect;PaymentCount(item.isSelect,item.prices,item.id)"></el-switch>
          </div>
        </template>
          {{'价格： ' + item.prices }}
      </el-card>
      <div style="margin-bottom: 60px"></div>
      <el-footer class="pay">
        <span style="float:left;line-height: 60px">需要付款:{{prices}}</span>
        <el-button style="float:right;margin-top: 10px" type="primary" @click="pay">付款</el-button>
      </el-footer>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Payment",
  data(){
    return{
      prices:0,
      Payment:[
        {
          id:null,
          name:null,
          price:null,
          user:null,
          isSelect:false,
        }
      ],
      PaymentSelect:[]
    }
  },
  mounted() {
    this.queryPayment()
  },
  methods:{
    returnFrontPage(){
      this.$router.back()
    },
    queryPayment(){
      this.Payment = null
      this.prices = 0
      this.$http.get("payment?username=" + window.sessionStorage.getItem("user")).then(
          response => {
            if(response.data.status == 200){
              this.Payment = response.data.value
            }else if(response.data.status == 400){
              this.$message.success("该用户名下无缴费项")
            }else{
              this.$message.error("无法获取用户名下的缴费项，请联系管理员")
            }
          }
      ).catch(
          error => console.log(error)
      )
    },
    PaymentCount(flag,price,id){
      if(flag == true){
        this.prices += price
        this.PaymentSelect.push(id)
      }else{
        this.prices -= price
        this.PaymentSelect.pop(id)
      }
    },
    pay(){
      this.PaymentSelect = []
      for(let item of this.Payment){
        if(item.isSelect == true){
          this.PaymentSelect.push(item.id)
        }
      }
      this.$http.post("/pay?id=" + this.PaymentSelect).then(
          response => {
            if(response.data.status == 200){
              this.queryPayment()
              this.$message.success("付款成功！")
            }else{
              this.$message.error("付款失败！")
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
  padding: 0;
}

.pay{
  background-color: #FFFFFF;
  color: #000000;
  position:fixed;
  bottom:60px;
  width: 100%;
  margin-top: 200px;
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