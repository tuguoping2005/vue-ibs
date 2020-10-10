<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">roles: {{ roles }}</div>


  </div>
  <!-- <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="13" :xl="13">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>全国GDP分布图</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="zgdt"
          />
        </el-card>
      </el-col>
    </el-row>
  </div> -->
</template>

<script>
import { mapGetters } from "vuex";
import VabChart from "@/plugins/echarts";
export default {
  name: "Main",
  /* components: {
    VabChart
  }, */
  data() {
    return {
      //中国地图
      /* zgdt: {
        title: {
          text: "2020年全国GDP分布",
          subtext: "来源于模拟数据"
        },
        tooltip: {
          trigger: "item"
        },
        dataRange: {
          orient: "horizontal",
          min: 0,
          max: 55000,
          text: ["高", "低"],
          splitNumber: 0
        },
        series: [
          {
            name: "2020年全国地图",
            type: "map",
            roam: false,
            zoom: 1.25,
            mapType: "china",
            mapLocation: {
              x: "center"
            },
            selectedMode: "multiple",
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
            data: [
              { name: "西藏", value: 605.83 },
              { name: "青海", value: 1670.44 },
              { name: "宁夏", value: 2102.21 },
              { name: "海南", value: 2522.66 },
              { name: "甘肃", value: 5020.37 },
              { name: "贵州", value: 5701.84 },
              { name: "新疆", value: 6610.05 },
              { name: "云南", value: 8893.12 },
              { name: "重庆", value: 10011.37 },
              { name: "吉林", value: 10568.83 },
              { name: "山西", value: 11237.55 },
              { name: "天津", value: 11307.28 },
              { name: "江西", value: 11702.82 },
              { name: "广西", value: 11720.87 },
              { name: "陕西", value: 12512.3 },
              { name: "黑龙江", value: 12582 },
              { name: "内蒙古", value: 14359.88 },
              { name: "安徽", value: 15300.65 },
              { name: "北京", value: 16251.93 },
              { name: "福建", value: 17560.18 },
              { name: "上海", value: 19195.69 },
              { name: "湖北", value: 19632.26 },
              { name: "湖南", value: 19669.56 },
              { name: "四川", value: 21026.68 },
              { name: "辽宁", value: 22226.7 },
              { name: "河北", value: 24515.76 },
              { name: "河南", value: 26931.03 },
              { name: "浙江", value: 32318.85 },
              { name: "山东", value: 45361.85, selected: true },
              { name: "江苏", value: 49110.27 },
              { name: "广东", value: 53210.28 }
            ]
          }
        ]
      } */
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ...mapGetters(["roles"])

    /*
    name() {
        return this.$store.state.name
      }

    */
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
