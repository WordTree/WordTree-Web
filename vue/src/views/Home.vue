<template>
  <div class="home">
    <div class="header"><Header :url="userImageUrl" /></div>
    <div class="User">
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
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextCard from "@/components/TextCard.vue";
import User from "@/components/User.vue";
import WordDataColumn from "../components/WordDataColumn";
import WordDataCircle from "@/components/WordDataCircle";
export default {
  name: "Home",
  components: {
    WordDataColumn,
    WordDataCircle,
    Header,
    TextCard,
    User,
  },
  data() {
    return {
      reviewWordCount: 0,  //今天需要复习的单词量
      learnedWordCount: 0,  //已经学习的单词总量
      totalWordCount: 0,  //需要学习的单词总量
      userImageUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      userName: "Lxy",
      columnChartData: [
        {
          date: "11-24",
          value: 40,
          type: "review",
        },
        {
          date: "11-24",
          value: 25,
          type: "learn",
        },
        {
          date: "11-25",
          value: 40,
          type: "review",
        },
        {
          date: "11-25",
          value: 25,
          type: "learn",
        },
        {
          date: "11-26",
          value: 40,
          type: "review",
        },
        {
          date: "11-26",
          value: 25,
          type: "learn",
        },
        {
          date: "11-27",
          value: 40,
          type: "review",
        },
        {
          date: "11-27",
          value: 25,
          type: "learn",
        },
        {
          date: "11-28",
          value: 40,
          type: "review",
        },
        {
          date: "11-28",
          value: 25,
          type: "learn",
        },
        {
          date: "11-29",
          value: 40,
          type: "review",
        },
        {
          date: "11-29",
          value: 25,
          type: "learn",
        },
        {
          date: "11-30",
          value: 40,
          type: "review",
        },
        {
          date: "11-30",
          value: 25,
          type: "learn",
        },
      ],
      circleChartData: [
        {
          type:"认识",
          value:20,
          phase:1
        },
        {
          type:"了解",
          value:20,
          phase:2
        },
        {
          type:"熟悉",
          value:30,
          phase:3
        },
        {
          type:"掌握",
          value:10,
          phase:4
        },
        {
          type:"烂熟于心",
          value:20,
          phase:5
        },
      ],
    };
  },
  created() {
    this.refreshUser();
  },
  methods:{
    refreshUser(){
      let userJson = localStorage.getItem("user");
      if (!userJson) {
        this.$router.push("/login");
        return
      }else{
        let user = JSON.parse(userJson);
        this.userImageUrl = user.avator;
        this.userName = user.userName;
      }
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
}

.bottom-chart {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.column-chart {
  margin: 0 25px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  border-color: transparent;
  padding: 15px;
  flex-shrink:2;
}

.column-chart:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.circle-chart {
  min-width: 500px;
  margin: 0 25px 0 0;
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

@media (max-width: 707px) {
  .column-chart {
    background-color: #fff;
    border-radius: 6px;
    border-color: transparent;
    padding: 15px;
    width: 100%;
    margin: 0 10px;
  }

  .circle-chart {
    width:100%;
    margin: 10px;
  }

  .bottom-chart {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}

.caption-text {
  font-size: 14px;
  margin-bottom: 20px;
  color: rgb(89, 89, 89);
}

</style>



