<template>
  <div class="app-container">
    <el-form ref="form" :model="product" label-width="120px">
      <el-form-item label="Product Name">
        <el-input v-model="product.productName" />
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="product.price" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { addProduct } from "@/api/product/addProduct";
export default {
  data() {
    return {
      product: {
        productName: "",
        price: ""
      }
    };
  },
  methods: {
    onSubmit() {
      var vm = this;

      vm.axios({
        method:'post',
        url:'http://localhost:8082/product/addProduct',
        data:vm.product
      }).then(resp => {
        console.log(resp.data);
        if (resp.data==='success') {
          vm.$router.push("/productManager/productList");
        }
      });
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
