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
      ref="dragTable"
      v-loading="listLoading"
      :data="userList"
      row-key="id"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="{ row }">
          <span>{{ row.userId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="300px"
        align="center"
        label="Person Name"
        width="150"
      >
        <template slot-scope="{ row }" >
          <span>{{ row.personName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Language" width="95">
        <template slot-scope="{ row }">
          <span>{{ row.language }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Time Zone">
        <template slot-scope="{ row }">
          <span>{{ row.defaultTimeZone }}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="Status">
        <template slot-scope="{ row }">
          <span>{{ row.status }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Created Time">
        <template slot-scope="{ row }">
          <span>{{ row.createdTime }}</span>
        </template>
      </el-table-column>
      <el-table-column  align="center" label="Created By">
        <template slot-scope="{ row }">
          <span>{{ row.createdBy }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column width="180px" align="center" label="Modified Time">
        <template slot-scope="{ row }">
          <span>{{ row.modifiedTime }}</span>
        </template>
      </el-table-column> -->

      <el-table-column width="250px" align="center" label="Actions">
        <template slot-scope="{ row, $index}">
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
        label-position="left"
        label-width="130px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="Person Name" prop="personName">
          <el-input v-model="temp.personName" />
        </el-form-item>
        <el-form-item label="Language" prop="language">
          <el-select v-model="temp.language" class="filter-item" placeholder="Please select">
            <el-option v-for="item in languageOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>

        <el-form-item label="Time Zone" prop="defaultTimeZone">
          <el-select v-model="temp.defaultTimeZone" class="filter-item" placeholder="Please select">
            <el-option v-for="item in timeZoneOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>


        <el-form-item label="Status" prop="status">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
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
        <el-button v-if="dialogStatus!=='view'"
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
import { getUserList,createUser,updatedUser } from "@/api/user";
import Pagination from "@/components/Pagination";


const timeZoneOptions = [
  { key: 'Asia/Chongqing', display_name: 'Asia/Chongqing' },
  { key: 'Europe/Paris', display_name: 'Europe/Paris' },
  { key: 'US/Mountain', display_name: 'US/Mountain' },
  { key: 'Asia/Tokyo', display_name: 'Asia/Tokyo' }
]

const languageOptions = [
  { key: 'zh_CN', display_name: 'Simplified Chinese' },
  { key: 'ja_JP', display_name: 'Japanese' },
  { key: 'en_US', display_name: 'US English ' }
]

const statusOptions = [
  { key: 'active', display_name: 'Active' },
  { key: 'draft', display_name: 'Draft' },
  { key: 'pending', display_name: 'Pending' }
]



export default {
  name: "User",
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      userList: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      sortable: null,
      oldList: [],
      newList: [],
      textMap: {
        update: "Edit",
        create: "Create",
        view: "View"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      rules: {
        personName: [
          {
            required: true,
            message: "personName is required",
            trigger: "blur"
          }
        ],
        language: [
          {
            required: true,
            message: "language is required",
            trigger: "blur"
          }
        ],
        status: [
          {
            required: true,
            message: "status is required",
            trigger: "blur"
          }
        ],
        defaultTimeZone: [
          {
            required: true,
            message: "Time Zone is required",
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
      },
      temp: {
        userId: null,
        personName: null,
        password:null,
        status: null,
        language: '',
        defaultTimeZone: null,
        homeURI: '',
        home: '',
        objectID:'',
        personObjectID:'',
        modifiedBy:'',
        createdBy:'',
        createdTime: null,
        modifiedTime: null,
      },
      timeZoneOptions,
      languageOptions,
      statusOptions
    };
  },
  created() {

    this.fetchList();
  },
  methods: {
    resetTemp() {
      this.temp = {
        userId: null,
        personName: null,
        password:null,
        status: null,
        language: '',
        defaultTimeZone: null,
        homeURI: '',
        home: '',
        objectID:'',
        personObjectID:'',
        modifiedBy:'',
        createdBy:'',
        createdTime: null,
        modifiedTime: null,
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
          this.temp.userId = parseInt(Math.random() * 100) + 1024; // mock a id
          this.temp.objectId = parseInt(Math.random() * 10) + 20000;
          createUser(this.temp).then(() => {
            this.userList.unshift(this.temp);
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
      //用于延迟执行一段代码
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          updatedUser(this.temp).then(() => {
            //findIndex(函数),满足函数中的条件那么返回该元素的索引值
            const index = this.userList.findIndex(v => v.userId === this.temp.userId);

            this.userList.splice(index, 1, this.temp);
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
      this.userList.splice(index, 1);
    },
    async fetchList() {
      this.listLoading = true;
      const { data } = await getUserList(this.listQuery);
      this.userList = data.items;
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
