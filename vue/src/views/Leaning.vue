<template>
  <div class="page">
    <div class="mainbody">
      <audio ref="phonePlayer" :src="phoneUrl"></audio>
      <div class="word-panel" v-if="showWordPanel">
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
      <div class="btn-panel" v-if="showBtnPanel">
        <div class="answer-btn-container">
          <button
            :disabled="btndisabled"
            ref="ansBtn1"
            id="ans-btn-1"
            @click="check($event)"
            :class="{ shake: shakeActivated[0], turnGreen: isCorrect[0] }"
          >
            <span class="btn-text">{{ btnText[0] }}</span>
          </button>
        </div>
        <div class="answer-btn-container">
          <button
            :disabled="btndisabled"
            ref="ansBtn2"
            id="ans-btn-2"
            @click="check($event)"
            :class="{ shake: shakeActivated[1], turnGreen: isCorrect[1] }"
          >
            <span class="btn-text">{{ btnText[1] }}</span>
          </button>
        </div>
        <div class="answer-btn-container">
          <button
            :disabled="btndisabled"
            ref="ansBtn3"
            id="ans-btn-3"
            @click="check($event)"
            :class="{ shake: shakeActivated[2], turnGreen: isCorrect[2] }"
          >
            <span class="btn-text">{{ btnText[2] }}</span>
          </button>
        </div>
        <div class="answer-btn-container">
          <button
            :disabled="btndisabled"
            ref="ansBtn4"
            id="ans-btn-4"
            @click="check($event)"
            :class="{ shake: shakeActivated[3], turnGreen: isCorrect[3] }"
          >
            <span class="btn-text">{{ btnText[3] }}</span>
          </button>
        </div>
      </div>
      <div class="info-panel" v-if="showInfoPanel">
        <div class="trans">
          <ul>
            <li class="tran" v-for="(tran, index) in trans" :key="index">
              <div class="tran-text">
                <span>{{ tran.wordType }}.{{ tran.cnTran }}</span>
              </div>
            </li>
          </ul>
          <div style="margin-left: 40px"></div>
        </div>
        <div class="phrases" v-if="showPhrases">
          <ul>
            <li v-for="(phrase, index) in phrases" :key="index">
              <div class="phrase-text">
                <span>{{ phrase.enPhrase }}</span>
                <span style="margin-left: 20px">{{ phrase.cnPhrase }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="sentences" v-if="showSentences">
          <ul>
            <li v-for="(sentence, index) in sentences" :key="index">
              <div class="en-sentence-text">
                <span>{{ sentence.enSentence }}</span>
              </div>
              <div class="cn-sentence-text">
                <span>{{ sentence.cnSentence }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="rem" v-if="showRem">
          <span style="margin: 15px 5px 15px 40px">{{ remMethod }}</span>
        </div>
        <div class="nextBtn">
          <button id="nextWord" @click="showMemoryPage">
            <span>Continue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 74 74"
              height="34"
              width="34"
            >
              <circle
                stroke-width="3"
                stroke="black"
                r="35.5"
                cy="37"
                cx="37"
              ></circle>
              <path
                fill="black"
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="confirm-panel" v-if="showConfirmPanel">
        <div
          class="sentences"
          style="padding: 20px 10px; height: 100%"
          v-if="showSentences && words.current.strangeDegree != 1"
        >
          <span style="font-size: 20px">{{ sentences[0].enSentence }}</span>
        </div>
        <div class="hint" v-if="words.current.strangeDegree == 1">
          <span>最后一步，在没有提示的情况下回忆单词</span>
        </div>
        <div class="confirm-btn-container">
          <div class="confirm-btn">
            <button @click="confirm">认识</button>
            <button @click="showInfo">不认识</button>
          </div>
        </div>
      </div>
      <div class="spell-panel" v-if="showSpellPanel">
        <div class="input-container">
          <input
            type="text"
            autofocus="true"
            @keyup.enter="spellCheck"
            v-model="inputSpell"
            :class="{shakeText:spellShake,greenText:greenText}"
            ref="spellingBox"
          />
          <div style="margin-top: 10px">
            <span>{{ getTrans(this.trans) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordList from "@/utils/list.js";
import request from "@/utils/request.js";

export default {
  name: "Learning",
  data() {
    return {
      words: {},
      phoneType: 0,
      btnText: ["Text1", "Text2", "Text3", "Text4"],
      shakeActivated: [false, false, false, false],
      isCorrect: [false, false, false, false],
      showWordPanel: true,
      showBtnPanel: true,
      showInfoPanel: false,
      btndisabled: false,
      showPhrases: true,
      showSentences: true,
      showRem: true,
      showConfirmPanel: false,
      showSpellPanel: false,
      inputSpell: "",
      spellShake:false,
      greenText:false,
      allowCommit:true
    };
  },
  methods: {
    // 切换单词发音的类型，英/美，切换时自动播放。
    switchPhone() {
      if (this.phoneType === 0) this.phoneType = 1;
      else if (this.phoneType === 1) this.phoneType = 0;
      setTimeout(() => {
        this.playPhone();
      }, 200);
    },
    // 控制播放器对象播放单词的读音
    playPhone() {
      this.$refs.phonePlayer.play();
    },
    // 检查选择的解释是否正确
    check(event) {
      var text = "";
      const btn = event.target;
      this.btndisabled = true;
      var index = 0;
      switch (btn) {
        case this.$refs.ansBtn1:
          index = 0;
          text = this.btnText[0];
          break;
        case this.$refs.ansBtn2:
          index = 1;
          text = this.btnText[1];
          break;
        case this.$refs.ansBtn3:
          index = 2;
          text = this.btnText[2];
          break;
        case this.$refs.ansBtn4:
          index = 3;
          text = this.btnText[3];
          break;
        default:
          {
            text = btn.innerHTML;
            switch(text) {
              case this.btnText[0]:
                index = 0;
                break;
              case this.btnText[1]:
                index = 1;
                break;
              case this.btnText[2]:
                index = 2;
                break;
              case this.btnText[3]:
                index = 3;
                break;
              default:
                throw "按钮渲染错误";
            }
          }
      }
      if (text === this.getTrans(this.trans)) {
        this.isCorrect[index] = true;
        this.words.current.strangeDegree -= 1;
        setTimeout(() => {
          this.isCorrect[index] = false;
        }, 1000);
      } else {
        this.shakeActivated[index] = true;
        setTimeout(() => {
          this.shakeActivated[index] = false;
        }, 1000);
      }
      setTimeout(() => {
        this.showInfo();
      }, 1000);
    },
    // 向服务器发送请求，请求新一轮单词
    getNewWords() {
      let userJson = localStorage.getItem("user");
      let user = JSON.parse(userJson);
      request
        .get("/memory/newWords", {
          params: {
            userID: user.userID,
            needCount: user.needCount,
          },
        })
        .then((res) => {
          this.words = new WordList(res.data);
        });
    },
    // 随机给四个按钮赋值
    updateExplans() {
      var randomWords = this.words.getFourNodes();
      var explans = [];
      for (var word of randomWords) {
        explans.push(this.getTrans(word.data.translations));
      }
      this.btnText = explans;
    },
    // 根据 translations 对象拼凑翻译
    getTrans(trans) {
      var res = "";
      for (var tran of trans) {
        res += tran.wordType + "." + tran.cnTran + ";";
      }
      return res;
    },
    // 展示单词的详细信息
    showInfo() {
      this.showBtnPanel = false;
      this.showConfirmPanel = false;
      this.showSpellPanel = false;
      this.showInfoPanel = true;
      this.showWordPanel = true;
    },
    // 根据单词的不同阶段，渲染不同的界面用于复习
    showMemoryPage() {
        this.words.next();
      this.inputSpell = "";
      switch (this.words.current.strangeDegree) {
        case 3: {
          this.showWordPanel = true;
          this.showBtnPanel = true;
          this.showInfoPanel = false;
          this.btndisabled = false;
          this.updateExplans();
          break;
        }
        case 2: {
          this.showWordPanel = true;
          this.showBtnPanel = false;
          this.showInfoPanel = false;
          this.showConfirmPanel = true;
          break;
        }
        case 1: {
          this.showWordPanel = true;
          this.showBtnPanel = false;
          this.showInfoPanel = false;
          this.showConfirmPanel = true;
          break;
        }
        case 0: {
          this.showInfoPanel = false;
          this.showWordPanel = false;
          this.showBtnPanel = false;
          this.showSpellPanel = true;
          setTimeout(() => {
            this.$refs.spellingBox.focus();
          },200)
        }
      }
    },
    // 用于【阶段三】，用户点击【认识】之后触发的事件
    confirm() {
      this.words.current.strangeDegree -= 1;
      this.showInfo();
    },
    // 用于【阶段四】，用于检查用户的拼写是否正确，并控制相关的动画
    spellCheck() {
      if(!this.allowCommit){
        return;
      }
      this.$refs.spellingBox.disabled = true;
      this.allowCommit = false;
      if (this.inputSpell == this.wordText) {
        this.greenText = true;
        setTimeout(() => {
          this.greenText = false;
          this.inputSpell = "";
          this.allowCommit = true;
          this.$refs.spellingBox.disabled = false;
          this.words.delete();
          this.showMemoryPage();
        },800)
      }else{
        this.spellShake = true;
        setTimeout(() => {
          this.spellShake = false;
          this.showInfo();
          this.allowCommit = true;
          this.$refs.spellingBox.disabled = false;
        }, 800);
      }
    },
  },
  beforeCreate() {
    let userJson = localStorage.getItem("user");
    let user = JSON.parse(userJson);
    request
      .get("/memory/newWords", {
        params: {
          userID: user.userID,
          needCount: user.needCount,
        },
      })
      .then((res) => {
        this.words = new WordList(res.data);
      });
  },
  created() {
    var _this = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key == 13) {
        if (_this.showInfoPanel) {
          _this.showMemoryPage();
        }
      }
    };
  },
  mounted() {
    this.updateExplans();
  },
  computed: {
    // 返回单词的word部分
    wordText() {
      return this.words.data().word;
    },
    // 根据发音类型，返回对象的读音标签
    phonelog() {
      if (this.phoneType === 0) return "美";
      else if (this.phoneType === 1) return "英";
    },
    phone() {
      if (this.phoneType === 1) return this.words.data().ukPhone;
      else return this.words.data().usPhone;
    },
    // 拼接发音URl
    phoneUrl() {
      return (
        "http://dict.youdao.com/dictvoice?type=" +
        this.phoneType +
        "&audio=" +
        this.wordText
      );
    },
    trans() {
      return this.words.data().translations;
    },
    sentences() {
      if (this.words.data().sentences.length === 0) {
        this.showSentences = false;
      } else {
        this.showSentences = true;
      }
      return this.words.data().sentences;
    },
    phrases() {
      if (this.words.data().phrases.length === 0) {
        this.showPhrases = false;
      } else {
        this.showPhrases = true;
      }
      return this.words.data().phrases;
    },
    remMethod() {
      if (this.words.data().remMethod === null) {
        this.showRem = false;
      } else {
        this.showRem = true;
      }
      return this.words.data().remMethod;
    },
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
  position: relative;
  top: 20px;
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
  margin-top: 30px;
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
  height: 9vh;
  background-color: rgb(238, 242, 245);
  border-color: transparent;
  border-radius: 20px;
}

.answer-btn-container button[disabled] {
  width: 80%;
  height: 9vh;
  background-color: rgb(238, 242, 245);
  border-color: transparent;
  border-radius: 10px;
  color: black;
}

.btn-text {
  font-family: Helvetica;
  font-size: 24px;
}

.info-panel {
  font-size: 20px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.trans {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  height: auto;
  padding: 5px;
  box-sizing: border-box;
  margin: 5px 0;
}

.rem {
  width: 100%;
  background-color: rgb(247, 248, 250);
  border-radius: 10px;
  height: auto;
  padding: 10px 5px;
  box-sizing: border-box;
  margin: 15px 0;
}

.trans ul li {
  list-style: none;
  margin: 10px 0;
}

.tran-text {
  font-family: Helvetica;
}

.sentences {
  margin: 10px 0;
  width: 100%;
  background-color: rgba(238, 242, 245, 0.5);
  border-radius: 10px;
  height: auto;
  padding: 5px;
  box-sizing: border-box;
}

.confirm-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
}

.confirm-btn-container {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.confirm-btn {
  width: 100%;
  position: relative;
  bottom: 5vh;
  display: flex;
  justify-content: space-around;
}

.confirm-btn button {
  width: 10vw;
  height: 4.5vh;
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

.confirm-btn button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

.confirm-btn button:hover {
  color: #e8e8e8;
}

.confirm-btn button:hover::before {
  width: 100%;
}

.sentences li {
  list-style: none;
}

.en-sentence-text {
  margin: 0;
}

.cn-sentence-text {
  margin-bottom: 15px;
}

.nextBtn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
}

.hint {
  color: grey;
  position: relative;
  top: 3vh;
  left: 2vw;
}

.spell-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  bottom: 5vh;
}

.input-container input {
  font-size: 60px;
  letter-spacing: 10px;
  border-width: 0;
  text-align: center;
}

.input-container input:focus {
  outline: none;
}

.input-container input[disabled] {
  background-color: transparent;
}

#nextWord {
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 10px 20px;
  border-radius: 100px;
  background: #cfef00;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  flex: 0;
}

#nextWord:hover {
  background: #a6c900;
}

#nextWord:active {
  transform: scale(0.95);
}

#nextWord:hover svg {
  transform: translateX(5px);
}

#nextWord > svg {
  width: 34px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

.phrases {
  width: 100%;
  background-color: rgba(238, 242, 245, 0.5);
  border-radius: 10px;
  height: auto;
  padding: 5px;
  box-sizing: border-box;
  margin: 15px 0;
}

.phrases li {
  list-style: none;
}

.phrase-text {
  margin: 5px 0;
}

.shake {
  -webkit-animation: shake-horizontal 0.8s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

.shakeText {
    -webkit-animation: shake-text-horizontal 0.8s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: shake-text-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
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
    background-color: rgba(249, 37, 36, 0.5);
  }
}

@-webkit-keyframes shake-text-horizontal {
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
@keyframes shake-text-horizontal {
  0%{
    color:red;
  }
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
    color:red;
  }
}

.turnGreen {
  animation-name: turnGreen;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.greenText {
  color:#3CDC14;
}


@keyframes turnGreen {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
  }
  20%,
  40%,
  60% {
  }
  80% {
  }
  90% {
    background-color: rgba(60, 220, 20, 0.5);
  }
}
</style>