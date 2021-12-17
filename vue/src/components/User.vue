<template>
  <el-card class="card" shadow="hover">
    <div class="user-greeting">
      <div class="user-image">
        <el-avatar :src="url" shape="circle" size="60"></el-avatar>
      </div>
      <div class="greeting">
        <span>{{ `${getState}，${userName}` }}</span>
      </div>
    </div>
    <hr />
    <div class="btn-container">
      <el-button type="primary"  @click="toReview" style="margin:10px 0"
        >开始复习</el-button
      >
      <el-button type="success"  @click="toLearning" style="margin:10px 10px;"
        >开始学习</el-button
      >
    </div>
  </el-card>
</template>

<script>
export default {
  name: "User",
  props: {
    url: String,
    userName: String,
  },
  data() {
    return {};
  },

  created: function () {},
  computed: {
    getState() {
      // 获取当前时间
      let timeNow = new Date();
      // 获取当前小时
      let hours = timeNow.getHours();
      // 设置默认文字
      let state = ``;
      // 判断当前时间段
      if (hours >= 0 && hours <= 10) {
        state = `早上好`;
      } else if (hours > 10 && hours <= 14) {
        state = `中午好`;
      } else if (hours > 14 && hours <= 18) {
        state = `下午好`;
      } else if (hours > 18 && hours <= 24) {
        state = `晚上好`;
      }
      return state;
    },
  },
  methods: {
    toLearning() {
      // 设置学习的模式，[learn];
      this.$store.commit("setLearningMode", "learn");
      // 进入学习界面
      this.$router.push("/learning");
    },
    toReview() {
      // 设置学习的模式，[review];
      this.$store.commit("setLearningMode", "review");
      // 进入学习界面
      this.$router.push("/learning");
    },
  },
};
</script>

<style scoped>

.card {
  margin: 25px 0px;
  border-radius: 6px;
  padding: 0px;
  height: 100%;
  max-width: none;
  max-height: 229px;
  border-color: transparent;
  flex: 1;
}

.user-greeting {
  display: flex;
  align-items: center;
}

.greeting {
  height: auto;
  margin-left: 10px;
  display: flex;
}
.greeting span {
  align-self: center;
}

.btn-container {
  margin-top: 3vh;
  width:100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
}

@media (max-width: 707px) {
  .card {
    margin: 10px 0 0 0;
  }
}
</style>