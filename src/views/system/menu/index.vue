<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        placeholder="Enter a name or description for the search"
        style="width: 350px;margin-right:10px"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />

      <el-button
        v-waves
        class="filter-item"
        type="success"
        icon="el-icon-search"
        @click="handleFilter"
      >
        Search
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="warning"
        icon="el-icon-refresh-left"
        @click="handleReset"
      >
        Reset
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        Add
      </el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="#" width="80">
        <template slot-scope="{ $index }">
          <span>{{ $index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="Menu Title">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="Icon">
              <i :class="props.row.icon"></i>
            </el-form-item>
            <el-form-item label="Order">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="Permission ID" label-width="120px">
              <span>{{ props.row.authId }}</span>
            </el-form-item>
            <el-form-item label="Component Path" label-width="150px">
              <span>{{ props.row.path }}</span>
            </el-form-item>
            <el-form-item label="isVisible">
              <span>{{ props.row.hidden }}</span>
            </el-form-item>
            <el-form-item label="Created Time" label-width="120px">
              <span>{{ props.row.created }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="Menu Title" prop="name" width="180">
      </el-table-column>
      <el-table-column label="Icon">
        <template slot-scope="{ row }">
          <i :class="row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column label="Order" prop="sort"> </el-table-column>
      <el-table-column label="Permission ID" prop="authId" width="180">
      </el-table-column>
      <el-table-column
        label="Component Path"
        prop="path"
        width="180"
      ></el-table-column>
      <el-table-column label="isVisible">
        <template slot-scope="{ row }">
          <el-switch v-model="row.hidden"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="Created Time" prop="created" width="180"> </el-table-column>
      <el-table-column label="Operation" width="280">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"

        style="width: 580px; margin-left:50px;"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="Menu Type" >
              <el-radio-group v-model="temp.type">
                <el-radio-button label="Catalogue"></el-radio-button>
                <el-radio-button label="Menu"></el-radio-button>
                <el-radio-button label="Button"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="Menu Icon" prop="icon">
              <el-autocomplete
                class="inline-input"
                v-model="selectIcon"
                :fetch-suggestions="querySearch"
                placeholder="click select icon"
                prefix-icon="el-icon-search"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="width:700px">
          <el-col :span="10">
            <el-form-item label="Menu Visible" label-width="100px">
              <el-radio-group v-model="temp.hidden" >
                <el-radio-button label="visible"></el-radio-button>
                <el-radio-button label="inVisible"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item
              label="Menu Title"
              required
              label-width="100px"
              style="width:200px"
            >
              <el-input v-model="temp.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10" style="margin-right:10px">
            <el-form-item label="Route Path" required label-width="100px">
              <el-input v-model="temp.path"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="Menu Order" label-width="100px">
              <el-input-number
                v-model="temp.sort"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="10"
              ></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="">
            <el-form-item label="Superior Category" label-width="150px">
              <el-select v-model="temp.parentId" placeholder="Please Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.el-autocomplete {
  width: 478px;
}
</style>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "Top Category"
        }
      ],
      selectIcon: "",
      icons: [],
      temp: {
        id: undefined,
        name: "",
        type: "",
        icon: "",
        hidden: "",
        path: "",
        parentId: [],
        sort: null
      },
      rules: {
        type: [
          { required: true, message: "type is required", trigger: "change" }
        ],
        timestamp: [
          {
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change"
          }
        ],
        title: [
          { required: true, message: "title is required", trigger: "blur" }
        ]
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "Edit Menu",
        create: "Add Menu"
      },
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      },
      tableData: [
        {
          id: "12987122",
          name: "Menu Management",
          hidden: true,
          sort: "1",
          path: "--",
          authId: "--",
          icon: "el-icon-menu",
          created: "2020-09-22"
        },
        {
          id: "12987122",
          name: "System Management",
          hidden: false,
          sort: "2",
          path: "--",
          authId: "--",
          icon: "el-icon-document",
          created: "2020-09-22"
        }
      ]
    };
  },
  mounted() {
    this.icons = this.loadAll();
  },
  methods: {
    chooseFn() {
      console.log("----", this.temp.type);
    },
    handleReset() {},
    handleFilter() {},
    handleChange() {
      console.log("");
    },
    handleSelect(item) {
      console.log(item);
    },
    querySearch(queryString, cb) {
      var icons = this.icons;
      var results = queryString
        ? icons.filter(this.createFilter(queryString))
        : icons;

      // results = '<i class="el-icon-setting" />'
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return icon => {
        return (
          icon.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "el-icon-setting" },
        { value: "el-icon-document" },
        { value: "el-icon-delete-solid" },
        { value: "el-icon-location" },
        { value: "el-icon-phone" }
      ];
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: "",
        type: "",
        icon: "",
        timestamp: new Date(),
        hidden: "",
        path: "",
        parentId: []
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    }
  }
};
</script>
