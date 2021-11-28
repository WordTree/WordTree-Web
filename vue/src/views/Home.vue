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
        <WordDataColumn :data="columnChartData"/>
      </div>
      <div class="circle-chart">

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

export default {
  name: "Home",
  components: {
    WordDataColumn,
    Header,
    TextCard,
    User,
  },
  data() {
    return {
      reviewWordCount: 0,
      learnedWordCount: 0,
      totalWordCount: 0,
      userImageUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      userName: "Lxy",
      columnChartData:[
        {
          "date":'11-24',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-24',
          "value":25,
          "type":"learn"
        },
                {
          "date":'11-25',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-25',
          "value":25,
          "type":"learn"
        },
                {
          "date":'11-26',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-26',
          "value":25,
          "type":"learn"
        },
                {
          "date":'11-27',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-27',
          "value":25,
          "type":"learn"
        },
                {
          "date":'11-28',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-28',
          "value":25,
          "type":"learn"
        },
                {
          "date":'11-29',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-29',
          "value":25,
          "type":"learn"
        },
                {
          "date":'11-30',
          "value":40,
          "type":"review"
        },
                {
          "date":'11-30',
          "value":25,
          "type":"learn"
        }
      ],
    };
  },
  created() {
    //
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: rgb(239, 242, 245);
  height: 100vh;
}

.User {
  display: flex;
  flex-wrap: wrap-reverse;
  height:auto;
}



.header {
  height:50px;
}

.user-greeting {
  flex:1;
  padding:0 10px;
  height:279px;
}

@media (max-width:707px) {
  .word-target {
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  margin:0 10px;
}

.user-greeting {
  height:231px;
  margin:20px 0px;
}
}


.bottom-chart {
  display:flex;
  flex-wrap:nowrap;
  width:100%;
}

.column-chart {
  flex:1;
}

.circle-chart {
  width:400px;
}

</style>



