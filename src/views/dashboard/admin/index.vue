<template>
  <div class="dashbord">
    <!-- cardlist -->
    <el-row class="infoCrads" :span="24">
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-green1"
              :start-val="startVal"
              :end-val="vistors"
              :duration="2000"
            />
            <p class="cardItem_p1">Total Visitors</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user color-green1" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-blue"
              :start-val="startVal"
              :end-val="message"
              :duration="2000"
            />
            <p class="cardItem_p1">Messages</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-s-comment color-blue" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-red"
              :start-val="startVal"
              :end-val="order"
              :duration="2000"
            />
            <p class="cardItem_p1">Total Order Placeed</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-shopping-cart-2 color-red" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-green2"
              :start-val="startVal"
              :end-val="profit"
              :duration="2000"
            />
            <p class="cardItem_p1">Total Profit</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-wallet color-green2" />
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- end -->
    <!-- lineEcharts -->
    <!-- end -->
    <!-- table and pie -->
    <el-row class="tableChart">
      <el-col :span="16">
        <table-show
          :table-data="tableData"
          class="tableShow"
        />
      </el-col>
    </el-row>
    <!-- end -->
    <!-- bar chart -->
    <!-- end -->
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import TableShow from './components/TableShow'
import {
  getCardsData,
  getTableData
} from '@/api/dashboard'
export default {
  components: {
    CountTo,
    TableShow
  },
  data() {
    return {
      startVal: 0,
      vistors: 0,
      message: 0,
      order: 0,
      profit: 0,
      tableData: [],
      lineChartData: {},
      barData: {}
    }
  },
  created() {
    this._getAllData()
  },
  methods: {
    _getAllData() {
      this.$http
        .all([getCardsData(), getTableData()])
        .then(
          this.$http.spread((cardData, tabData) => {
            this.vistors = cardData.data.vistors
            this.message = cardData.data.message
            this.order = cardData.data.order
            this.profit = cardData.data.profit
            this.tableData = tabData.data.tableList
          })
        )
    }
  }
}
</script>
<style scoped lang="scss">
$mgTop: 30px;
@mixin shadow {
  box-shadow: 0 0 10px #e2e2e2;
}
.color-green1 {
  color: #40c9c6 !important;
}
.color-blue {
  color: #36a3f7 !important;
}
.color-red {
  color: #f4516c !important;
}
.color-green2 {
  color: #34bfa3 !important;
}
.dashbord {
  background-color: #f0f3f4;
}
.infoCrads {
  margin: 0 -20px 0 -20px;
  .el-col {
    padding: 0 20px;
    .cardItem {
      height: 108px;
      background: #fff;
    }
  }
}
.cardItem {
  color: #666;
  @include shadow();
  .cardItem_txt {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    padding-left: 30px;
    .cardItem_p0 {
      font-size: 20px;
      font-weight: bold;
    }
    .cardItem_p1 {
      font-size: 16px;
    }
  }
  .cardItem_icon {
    float: right;
    margin: 24px 20px 0 0;
    i {
      font-size: 55px;
    }
  }
}
.lCharts {
  background: #fff;
  margin-top: $mgTop;
  padding: 30px 0;
  @include shadow();
}
.barCharts {
  background: #fff;
  margin-top: $mgTop;
  padding: 30px 0;
  @include shadow();
}
.pieCharts {
  background: #fff;
  padding: 20px 0;
  @include shadow();
}
.tableChart {
  margin-top: $mgTop;
}
</style>
