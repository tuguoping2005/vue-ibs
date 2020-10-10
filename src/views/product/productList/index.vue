<template>
  <div class="app-container">
    <div align="right">
      <el-button type="success" @click="addPro">Add Product</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="Index" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Product Name">
        <template slot-scope="scope">
          {{ scope.row.productName }}
        </template>
      </el-table-column>
      <el-table-column label="Price">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="Create Time">
        <template slot-scope="scope">
          {{ scope.row.created }}
        </template>
      </el-table-column>
      <el-table-column label="Update Time">
        <template slot-scope="scope">
          {{ scope.row.updated }}
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="editProduct(scope.row.id)"
          >
            Edit
          </el-button>
          <el-button size="mini" type="danger" @click="delPro(scope.row.id)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from "@/api/product/productList";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    addPro() {
      this.$router.push("/addProduct/index");
    },
    editProduct(id) {
      this.$router.push("/editProduct/index/" + id);
    },
    fetchData() {
      this.listLoading = true;
      let vm = this;
      vm.axios({
        method:'get',
        url:'http://localhost:8082/product/selectAll'
      }).then(response => {
        vm.list = response.data;
        vm.listLoading = false;
      });
    },
    delPro(id) {
      var vm = this;
      this.axios({
        url: "http://localhost:8082/product/deleteById/" + id,
        method: "delete"
      }).then(resp => {
        if (resp.data==='success') {
          //again get data
          vm.fetchData();

          //message box
          vm.$message({
            message: "delete successfully...",
            type: "success"
          });
        } else {
          vm.$message.error("delete fail...");
        }
      });
    }
  }
};
</script>

<style></style>
