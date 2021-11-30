<template>
    <div class="header">
      <Header :url="userImageUrl" />
    </div>
  <div class="setting-page">

    <div class="mainbody">
      <div class="form-container">
        <el-form
          ref="Form"
          :model="FormData"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="FormData.name"></el-input>
          </el-form-item>
          <el-form-item label="目标词书" prop="vocabulary">
            <el-select v-model="FormData.vocabulary" placeholder="CET-4">
              <el-option label="高考" value="GaoZhongluan_2"></el-option>
              <el-option label="CET-4" value="CET4luan_1"></el-option>
              <el-option label="CET-6" value="CET6luan_1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >Create</el-button
            >
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Settings",
  components: {
    Header,
  },
  data() {
    return {
      FormData: {
        name: "",
        vocabulary: "",
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    uerName() {
      return this.$store.state.user.uerName;
    },
    userImageUrl() {
      return this.$store.state.user.userImageUrl;
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.setting-page {
  background-color: rgb(239, 242, 245);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
}

.mainbody {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  border-radius: 6px;
  background-color: #fff;
  width: 70%;
  border-radius: 50px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  padding: 20px;
}
</style>