<template>
  <div class="home">
    <div class="header"><Header :url="userImageUrl" /></div>
    <div class="User">
      <div class="line-chart">
        <div class="line-caption" style="margin: 20px 20px 0px 20px">
          <span class="caption-text"> 今日学习时间 </span>
        </div>
        <div class="line-chart-content">
          <span style="font-size: 33px; padding-bottom: 0px; margin: 10px">
            {{ learningTimeCount }}
          </span>
          <span style="font-size: 20px">min</span>
        </div>
        <div class="line-chart-container">
          <WordDataLine :data="lineChartData" />
        </div>
        <div
          class="lone-chart-footer"
          style="
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
          "
        >
          <span class="caption-text"
            >昨日学习时长：{{ yesterdayTimeCount }} min</span
          >
          <span class="caption-text" style="margin-right: 20px"
            >近七日学习时长：{{ weeklyTimeCount }} min</span
          >
        </div>
      </div>
      <div class="word-target">
        <text-card title="复习计划" :content="`${reviewWordCount} Words`" />
        <text-card
          title="学习进度"
          :content="`${learnedWordCount} / ${totalWordCount} Words`"
        />
      </div>
      <div class="user-greeting">
        <User :url="userImageUrl" :userName="userName" />
      </div>
    </div>
    <div class="bottom-chart">
      <div class="column-chart">
        <div class="column-caption">
          <span class="caption-text">近七天学习统计</span>
        </div>
        <WordDataColumn :data="columnChartData" />
      </div>
      <div class="circle-chart">
        <div class="circle-caption">
          <span class="caption-text">单词统计</span>
        </div>
        <WordDataCircle :data="circleChartData" />
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/WordTree/WordTree-Web">@WordTree</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextCard from "@/components/TextCard.vue";
import User from "@/components/User.vue";
import WordDataColumn from "../components/WordDataColumn";
import WordDataCircle from "@/components/WordDataCircle";
import WordDataLine from "@/components/WordDataLine";
import request from "../utils/request";
import DataLoader from "../utils/dataLoader"
import {Column, Line, Pie} from "@antv/g2plot";

export default {
  name: "Home",
  components: {
    WordDataColumn,
    WordDataCircle,
    WordDataLine,
    Header,
    TextCard,
    User,
  },
  data() {
    return {
      reviewWordCount: 0,
      learnedWordCount: 0,
      totalWordCount: 0,
      learningTimeCount: 0,
      columnChartData: [],   //柱状图数据
      circleChartData: [],   //饼图数据
      lineChartData: [],    //曲线图数据
      dataLoader:new DataLoader()
    };
  },

  created() {
    this.init();
  },
  methods:{
    init(){
      let userJson = localStorage.getItem("user");
      if (!userJson) {
        this.$router.push("/login");
        return
      }else{
        let user = JSON.parse(userJson);
        this.$store.commit('setUser',user);
        request.get("/statistic/"+user.userID + "/" + user.targetBook).then(res => {
          this.reviewWordCount = res.data.reviewWordCount;
          this.learnedWordCount = res.data.learnedWordCount;
          this.totalWordCount = res.data.totalWordCount;
          this.columnChartData = this.dataLoader.loadData("column",res.data.columnChartData);
          this.circleChartData = res.data.circleChartData;
          this.lineChartData = this.dataLoader.loadData("line",res.data.lineChartData);
          
        })
      }
    },
  },
  computed: {
    userImageUrl() {
      return this.$store.getters.userImageUrl;
    },
    userName() {
      return this.$store.state.user.userName;
    },
    yesterdayTimeCount(){
      return this.$data.lineChartData[5].time;
    },
    weeklyTimeCount(){
      let sum = 0;
      for(const item of this.$data.lineChartData)
        sum += item.time;
      return sum;
    },
    learningTimeCount(){
      return this.$data.lineChartData[6].time;
    }

  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: rgb(239, 242, 245);
  height: 100%;
  min-height: 100vh;
}

.User {
  display: flex;
  flex-wrap: wrap-reverse;
  height: auto;
}

.header {
  height: 50px;
}

.user-greeting {
  flex: 1;
  padding: 0 10px;
  height: 279px;
  margin-right: 15px;
}

.bottom-chart {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.column-chart {
  margin: 0 0 0 25px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  border-color: transparent;
  padding: 15px;
  flex-shrink: 2;
}

.column-chart:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.circle-chart {
  min-width: 500px;
  margin: 0 25px;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 6px;
  border-color: transparent;
  padding: 15px;
  flex: 1;
}

.circle-chart:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.line-chart {
  height: 229px;
  margin: 25px 0px 25px 25px;
  border-radius: 6px;
  padding: 0px;
  max-width: 440px;
  max-height: 229px;
  border-color: transparent;
  flex: 1;
  background-color: #fff;
}

.line-chart:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.caption-text {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  color: rgb(89, 89, 89);
}

.line-chart-content {
  padding: 5px 30px;
}

.line-chart-container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

@media (max-width: 707px) {
  .word-target {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 10px;
  }

  .user-greeting {
    height: 231px;
    margin: 20px 0px;
  }

  .column-chart {
    background-color: #fff;
    border-radius: 6px;
    border-color: transparent;
    padding: 15px;
    width: 100%;
    margin: 0 10px;
  }

  .circle-chart {
    width: 100%;
    margin: 10px;
  }

  .bottom-chart {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .line-chart {
    width: 100%;
    margin: 10px;
    align-self: center;
    max-width: none;
  }
}
.footer {
  align-self: center;
  height: 200px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(239, 242, 245);
  flex-direction: column;
}

.caption-text {
  font-size: 14px;
  margin-bottom: 20px;
  color: rgb(89, 89, 89);
}

</style>



