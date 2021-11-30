<template>
  <div class="setting-page">
    <div class="header">
      <Header :url="userImageUrl" />
    </div>
    <div class="mainbody">
      <div class="form-container">
        <el-form
          ref="Form"
          :model="FormData"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户" prop="name">
            <el-input v-model="FormData.name"></el-input>
          </el-form-item>
          <el-form-item label="Activity zone" prop="region">
            <el-select v-model="FormData.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  v-model="FormData.date1"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  v-model="FormData.date2"
                  placeholder="Pick a time"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery" prop="delivery">
            <el-switch v-model="FormData.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="Activity type" prop="type">
            <el-checkbox-group v-model="FormData.type">
              <el-checkbox label="Online activities" name="type"></el-checkbox>
              <el-checkbox
                label="Promotion activities"
                name="type"
              ></el-checkbox>
              <el-checkbox label="Offline activities" name="type"></el-checkbox>
              <el-checkbox
                label="Simple brand exposure"
                name="type"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="FormData.resource">
              <el-radio label="Sponsorship"></el-radio>
              <el-radio label="Venue"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form" prop="desc">
            <el-input v-model="FormData.desc" type="textarea"></el-input>
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
        region: "",
        date1: "",
        date2: "",
        delivery: false,
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
}
.header {
  margin-bottom: 40px;
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