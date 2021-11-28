<template>
  <div class="home">
    <div class="header"><Header /></div>
    <div class="User">
      <div class="word-target">
        <text-card title="复习计划" :content="`${reviewWordCount} words`" />
        <text-card
          title="学习进度"
          :content="`${learnedWordCount} / ${totalWordCount} words`"
        />
      </div>
      <div id="user-greeting">
        <User :url="userImageUrl" :userName="userName" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextCard from "@/components/TextCard.vue";
import User from "@/components/User.vue";;
export default {
  name: "Home",
  components: {
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
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(239, 242, 245);
  height: 100vh;
}

.User {
  display: flex;
  flex-wrap: wrap-reverse;
}

#user-greeting {
  flex:1;
  height: 100%;
}
</style>