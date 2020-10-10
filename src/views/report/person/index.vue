<template>
  <div class="app-container">
    <div align="left" style="margin-bottom:10px;">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="success"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        Add
      </el-button>
    </div>
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table
      ref="personTable"
      v-loading="listLoading"
      :data="personList"
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
        min-width="100px"
        align="center"
        label="Name"
      >
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Email" width="200">
        <template slot-scope="{ row }">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="phone">
        <template slot-scope="{ row }">
          <span>{{ row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" align="center" label="Object ID" >
        <template slot-scope="{ row }">
          <span>{{ row.objectId }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" align="center" label="Created By">
        <template slot-scope="{ row }">
          <span>{{ row.createdBy }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Created Time">
        <template slot-scope="{ row }">
          <span>{{ row.createdTime }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column width="180px" align="center" label="Modified Time">
        <template slot-scope="{ row }">
          <span>{{ row.modifiedTime }}</span>
        </template>
      </el-table-column> -->

      <el-table-column width="250px" align="center" label="Actions">
        <template slot-scope="{ row,$index }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button type="info" size="mini" @click="handleView(row)">
            View
          </el-button>
          <el-button type="danger" size="mini" @click="handleDelete(row,$index)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- pagination -->
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchList"
    />

    <!-- create dialog -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="right"
        label-width="130px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="temp.email" />
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="temp.phone" />
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
        <el-form-item label="Modified Time" prop="modifiedTime">
          <el-date-picker
            v-model="temp.modifiedTime"
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
          v-if="dialogStatus !== 'view'"
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
import { getPersonList, createPerson, updatedPerson } from "@/api/person";
import Pagination from "@/components/Pagination";

export default {
  name: "Person",
  components: { Pagination },
  data() {
    var checkEmail = (rule, valur, cb) => {
      //  验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (ragEmail.test(value)) {
        // 合法的邮箱
        return cb();
      }
      cb(new Error("Please enter the correct email address"));
    };
    var checkMobile=(rule, value, cb)=> {
      const regMobile = /^((13[0-9])|(17[0-1,6-8])| (15[^4,\\D])|(18[0-9]))\d{8}$/;

      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("Please enter the correct phone number"));
    }

    return {
      personList: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      textMap: {
        update: "Edit",
        create: "Create",
        view: "View"
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
        email: [
          { required: true, message: "email is required", trigger: "blur" },
          {
            type: "email",
            message: "Please enter the correct email address",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            required: true,
            message: "phone is required",
            trigger: "blur"
          },
          {validator:checkMobile,trigger:["blur", "change"]}
        ],
        objectId: [
          { required: true, message: "objectId is required", trigger: "blur" }
        ],

        createdTime: [
          {
            required: true,
            message: "createdTime is required",
            trigger: "change"
          }
        ],

        createdBy: [
          { required: true, message: "created By is required", trigger: "blur" }
        ]
      },
      temp: {
        id: null,
        name: null,
        objectId: null,
        createdTime: null,
        modifiedTime: null,
        modifiedBy: null,
        createdBy: null,
        email: null,
        phone: null
      }
    };
  },
  created() {
    this.fetchList();
  },
  methods: {
    resetTemp() {
      this.temp = {
        id: null,
        name: null,
        objectId: null,
        createdTime: null,
        modifiedTime: null,
        modifiedBy: null,
        createdBy: null,
        email: null,
        phone: null
      };
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
          createPerson(this.temp).then(() => {
            this.personList.unshift(this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Created Successfully",
              type: "success",
              duration: 2000
            });
          });
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
          updatedPerson(this.temp).then(() => {
            const index = this.personList.findIndex(v => v.id === this.temp.id);
            this.personList.splice(index, 1, this.temp);
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
    handleView(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.dialogStatus = "view";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleDelete(row, index) {
      this.$notify({
        title: "Success",
        message: "Delete Successfully",
        type: "success",
        duration: 2000
      });
      this.personList.splice(index, 1);
    },
    async fetchList() {
      this.listLoading = true;
      const { data } = await getPersonList(this.listQuery);
      this.personList = data.items;
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
