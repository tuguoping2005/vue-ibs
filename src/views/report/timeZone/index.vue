<template>
  <div class="app-container">
    <div align="left" style="margin-bottom:10px;">
      <el-button type="success" @click="addTimeZone">Add Time Zone</el-button>
    </div>
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table
      ref="timeZoneTable"
      v-loading="listLoading"
      :data="timeZoneList"
      row-key="id"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="65px">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="300px"
        align="center"
        label="Name"
      >
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Code" width="80px">
        <template slot-scope="{ row }">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="value" width="80px">
        <template slot-scope="{ row }">
          <span>{{ row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Object ID" width="100px">
        <template slot-scope="{ row }">
          <span>{{ row.objectId }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Created Time">
        <template slot-scope="{ row }">
          <span>{{ row.createdTime}}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="Modified Time">
        <template slot-scope="{ row }">
          <span>{{ row.modifiedTime}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Actions">
        <template slot-scope="{ row }">
          <el-button
            type="primary"
            size="mini"
            @click="editTimeZone(row.id)"
          >
            Edit
          </el-button>
          <el-button
            type="danger"
            size="mini"
            @click="delTimeZone(row.id)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getTimeZoneList } from "@/api/timeZone";

export default {
  name: "TimeZone",

  data() {
    return {
      timeZoneList: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
    };
  },
  created() {
    this.fetchList();
  },
  methods: {
    addTimeZone(){

    },
    editTimeZone(){

    },
    delTimeZone(){

    },
    async fetchList() {
      this.listLoading = true;
      const { data } = await getTimeZoneList(this.listQuery);
      this.timeZoneList = data.items;
      this.total = data.total;
      this.listLoading = false;

    },

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
