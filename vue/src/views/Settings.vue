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
          class="Form"
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
      <span>头像</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="FormData.imageUrl"
                :src="FormData.imageUrl"
                class="avatar"
              />
              <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('Form')"
              >Create</el-button
            >
            <el-button @click="resetForm('Form')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { Plus } from "@element-plus/icons";
export default {
  name: "Settings",
  components: {
    Header,
    Plus,
  },
  data() {
    return {
      FormData: {
        name: "",
        vocabulary: "",
        imageUrl: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input user name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 8,
            message: "Length should be 3 to 8",
            trigger: "blur",
          },
        ],
        vocabulary: [
          {
            required: true,
            message: "Please select target vocabulary",
            trigger: "change",
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
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

.Form{
  display:flex;
  flex-direction: column;
  align-items:center;
}
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar-uploader-icon svg {
  margin-top: 74px; /* (178px - 28px) / 2 - 1px */
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>