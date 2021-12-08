<template>
  <div class="page">
    <div class="mainbody">
      <audio ref="phonePlayer" :src="phoneUrl"></audio>
      <div class="word-panel">
        <div class="word-text">
          <span>{{ wordText }}</span>
        </div>
        <div class="phone">
          <button class="phone-switch-btn" @click="switchPhone()">
            <span>{{ phonelog }}</span>
          </button>
          <span @click="playPhone">{{ phone }}</span>
        </div>
      </div>
      <div class="btn-panel">
        <div class="answer-btn-container" :class="{ shake: noActivated }">
          <button @click="check($event)">
            <span class="btn-text">{{ btnText[0] }}</span>
          </button>
        </div>
        <div class="answer-btn-container">
          <button @click="check($event)">
            <span class="btn-text">{{ btnText[1] }}</span>
          </button>
        </div>
        <div class="answer-btn-container">
          <button @click="check($event)">
            <span class="btn-text">{{ btnText[2] }}</span>
          </button>
        </div>
        <div class="answer-btn-container">
          <button @click="check($event)">
            <span class="btn-text">{{ btnText[3] }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/utils/list.js";

export default {
  name: "Learning",
  data() {
    return {
      words: {},
      phoneType: 0,
      btnText: ["权限", "Text2", "Text3", "Text4"],
    };
  },
  methods: {
    switchPhone() {
      if (this.phoneType === 0) this.phoneType = 1;
      else if (this.phoneType === 1) this.phoneType = 0;
      setTimeout(() => {
        this.playPhone();
      }, 200);
    },
    playPhone() {
      this.$refs.phonePlayer.play();
    },
    check(event){
        const text = event.target.getElementsByTagName('span')[0].innerHTML;
        if(text===this.trans)
            console.log("success");
        else
            console.log("false");
            noActivated = true;
    }
  },
  created() {
    const returnedWords = [
      {
        word: "access",
        uk_phone: "[uk'ækses]",
        us_phone: "[us'æksɛs]",
        rem_method: "ac ＋ cess(去) → 来去要走通道 → 通道",
        cn_tran: "权限",
        word_type: "v",
      },
    ];
    this.$data.words = new List(returnedWords);
  },
  computed: {
    wordText() {
      return this.words.data().word;
    },
    phonelog() {
      if (this.phoneType === 0) return "美";
      else if (this.phoneType === 1) return "英";
    },
    phone() {
      if (this.phoneType === 1) return this.words.data().uk_phone;
      else return this.words.data().us_phone;
    },
    phoneUrl() {
      return (
        "http://dict.youdao.com/dictvoice?type=" +
        this.phoneType +
        "&audio=" +
        this.wordText
      );
    },
    trans(){
        return this.words.data().cn_tran;
    }
  },
};
</script>

<style scoped>
.page {
  height: 100%;
  min-height: 100vh;
  background-color: rgb(239, 242, 245);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainbody {
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 46px #d9d9d9, -20px -20px 46px #ffffff;
  min-height: 60vh;
  min-width: 60vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.word-text {
  text-align: center;
  font-family: Helvetica;
  font-size: 58px;
  letter-spacing: 4px;
}

.word-panel {
  min-height: 10vh;
}

.btn-panel {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  margin-top: 20px;
  flex: 1;
}

.phone {
  text-align: center;
}

.phone-switch-btn {
  border-color: transparent;
  border-radius: 30%;
  position: relative;
  width: 40px;
  right: 5px;
}

.answer-btn-container {
  width: 100%;
  text-align: center;
}

.answer-btn-container button {
  width: 80%;
  height: 100px;
  background-color: rgb(238, 242, 245);
  border-color: transparent;
  border-radius: 10px;
}

.btn-text {
  font-family: Helvetica;
  font-size:24px;
}

.shake {
	-webkit-animation: shake-horizontal 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: shake-horizontal 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

/**
 * ----------------------------------------
 * animation shake-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}



</style>