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
        <text-card title="复习计划" :content="`${reviewWordCount} words`" />
        <text-card
          title="学习进度"
          :content="`${learnedWordCount} / ${totalWordCount} words`"
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
      yesterdayTimeCount: 0,
      weeklyTimeCount: 0,
      columnChartData: [
        {
          date: "11-24",
          value: 0,
          type: "Review",
        },
        {
          date: "11-24",
          value: 25,
          type: "Learn",
        },
        {
          date: "11-25",
          value: 40,
          type: "Review",
        },
        {
          date: "11-25",
          value: 25,
          type: "Learn",
        },
        {
          date: "11-26",
          value: 40,
          type: "Review",
        },
        {
          date: "11-26",
          value: 25,
          type: "Learn",
        },
        {
          date: "11-27",
          value: 40,
          type: "Review",
        },
        {
          date: "11-27",
          value: 25,
          type: "Learn",
        },
        {
          date: "11-28",
          value: 40,
          type: "Review",
        },
        {
          date: "11-28",
          value: 25,
          type: "Learn",
        },
        {
          date: "11-29",
          value: 40,
          type: "Review",
        },
        {
          date: "11-29",
          value: 25,
          type: "Learn",
        },
        {
          date: "11-30",
          value: 40,
          type: "Review",
        },
        {
          date: "11-30",
          value: 25,
          type: "Learn",
        },
      ],
      circleChartData: [
        {
          type: "认识",
          value: 20,
        },
        {
          type: "了解",
          value: 20,
        },
        {
          type: "熟悉",
          value: 30,
        },
        {
          type: "掌握",
          value: 10,
        },
        {
          type: "烂熟于心",
          value: 20,
        },
      ],
      lineChartData: [
        {
          date: "11-24",
          time: 25,
        },
        {
          date: "11-25",
          time: 60,
        },
        {
          date: "11-26",
          time: 33,
        },
        {
          date: "11-27",
          time: 10,
        },
        {
          date: "11-28",
          time: 40,
        },
        {
          date: "11-29",
          time: 56,
        },
        {
          date: "11-30",
          time: 80,
        },
      ],
    };
  },
  created() {
  },
  computed:{
    userImageUrl(){
      return this.$store.state.user.userImageUrl;
    },
    userName(){
      return this.$store.state.user.userName;
    }
  }
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
  margin-right:15px;
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
  position:relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(239, 242, 245);
  flex-direction: column;
}
</style>



