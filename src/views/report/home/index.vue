<template>
  <div class="app-container">
    <div align="left" style="margin-bottom:10px;">
      <el-button type="success" @click="handleCreate" icon="el-icon-edit"
        >Add</el-button
      >
    </div>
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table
      ref="appTable"
      v-loading="listLoading"
      :data="homeList"
      row-key="id"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="300px"
        align="center"
        label="Name"
        width="200"
      >
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="App Name">
        <template slot-scope="{ row }">
          <span>{{ row.appName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Object ID" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.objectId }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Default Page URI" width="200">
        <template slot-scope="{ row }">
          <span>{{ row.defaultPageURI }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Created Time">
        <template slot-scope="{ row }">
          <span>{{ row.createdTime }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="Modified Time">
        <template slot-scope="{ row }">
          <span>{{ row.modifiedTime }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Actions">
        <template slot-scope="{ row }">
          <el-button type="primary" size="mini" @click="editHome(row.id)">
            Edit
          </el-button>
          <el-button type="danger" size="mini" @click="delHome(row.id)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- create dialog -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="130px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="URI" prop="defaultPageURI">
          <el-input v-model="temp.defaultPageURI" />
        </el-form-item>
        <el-form-item label="Created By" prop="createdBy">
          <el-input v-model="temp.createdBy" />
        </el-form-item>
        <el-form-item label="Created Time" prop="createdTime">
          <el-date-picker
            v-model="temp.createdTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="Please pick a datetime"
          />
        </el-form-item>
      </el-form>
      <!-- button -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getHomeList , createHome, updatedHome} from "@/api/home";

export default {
  name: "Home",

  data() {
    return {
      homeList: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      textMap: {
        update: "Edit",
        create: "Create"
      },
      temp: {
        id: undefined,
        name: "",
        appName: "",
        objectId: undefined,
        createdTime: new Date(),
        defaultPageURI: "",
        createdBy: ""
      },
      dialogFormVisible: false,
      dialogStatus: "",
      rules: {
        name: [
          {
            required: true,
            message: "name is required",
            trigger: "blur"
          }
        ],
        createdTime: [
          {
            required: true,
            message: "createdTime is required",
            trigger: "change"
          }
        ],
        objectId: [
          { required: true, message: "objectId is required", trigger: "blur" }
        ],
        uri: [{ required: true, message: "uri is required", trigger: "blur" }],
        createdBy: [
          { required: true, message: "created By is required", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.fetchList();
  },
  methods: {
    resetTemp() {
      this.temp = {
        id: undefined,
        name: "",
        appName: "",
        objectId: undefined,
        createdTime: new Date(),
        defaultPageURI: "",
        createdBy: ""
      }
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
          this.temp.objectId = parseInt(Math.random() * 10) + 20000;
          createHome(this.temp).then(() => {
            this.homeList.unshift(this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Created Successfully",
              type: "success",
              duration: 2000
            });
          });
          // this.fetchList();
        }
      });
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          updatedApp(this.temp).then(() => {
            const index = this.homeList.findIndex(v => v.id === this.temp.id);
            this.homeList.splice(index, 1, this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Update Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleDelete(row, index) {
      this.$notify({
        title: "Success",
        message: "Delete Successfully",
        type: "success",
        duration: 2000
      });
      this.homeList.splice(index, 1);
    },
    async fetchList() {
      this.listLoading = true;
      const { data } = await getHomeList(this.listQuery);
      this.homeList = data.items;
      this.total = data.total;
      this.listLoading = false;
    }
  }
};
</script>

<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>

<style scoped>
.icon-star {
  margin-right: 2px;
}
.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d {
  margin-top: 15px;
}
</style>
