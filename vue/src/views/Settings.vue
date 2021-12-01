<template>
  <div class="header">
    <Header :url="userImageUrl" />
  </div>
  <div class="setting-page">
    <div class="mainbody">
      <el-tabs v-model="activeName"  style="width: 50%;" >
        <el-tab-pane label="基本信息" name="first" style="border-color: transparent;display: flex;justify-content: center">
         <div class="form-container">
          <el-form
          ref="userInfoForm"
          :model="userInfoFormData"
          :rules="rules"
          label-width="120px"
          class="Form"
        >
          <el-form-item label="">
            <el-upload
                class="avatar-uploader"
                action="http://localhost:3030/files/upload"
                thumbnail-mode="true"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                style="border-radius: 50%;transform:scale(0.9)"
            >
              <img
                  v-if="userInfoFormData.avator"
                  :src="userInfoFormData.avator"
                  class="avatar"
              />
              <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="用户账号" style="transform: scale(1.05)">
            <el-input v-model="userInfoFormData.userID" disabled style=""></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="userName" style="transform: scale(1.05)">
            <el-input v-model="userInfoFormData.userName"></el-input>
          </el-form-item>
          <el-form-item label="目标词书" prop="targetBook" style="transform: scale(1.05)">
            <el-select v-model="userInfoFormData.targetBook">
              <el-option label="高考" value="GaoZhongluan_2"></el-option>
              <el-option label="CET-4" value="CET4luan_1"></el-option>
              <el-option label="CET-6" value="CET6luan_1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('userInfoForm')"
              >更新基本信息</el-button
            >
          </el-form-item>
        </el-form>
      </div>
        </el-tab-pane>
        <el-tab-pane label="安全信息" name="second" style="border-color: transparent;display: flex;justify-content: center" >
        <div class="form-container">
          <el-form
              ref="passwordForm"
              :model="passwordFormData"
              :rules="rules"
              label-width="120px"
              class="Form"
          >
            <el-form-item label="原密码"  prop="password" style="transform: scale(1.05)">
              <el-input v-model="passwordFormData.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword" style="transform: scale(1.05)">
              <el-input v-model="passwordFormData.newPassword" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="confirmPassword" style="transform: scale(1.05)">
              <el-input v-model="passwordFormData.confirmPassword" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('passwordForm')"
              >更新安全信息</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { Plus } from "@element-plus/icons";
import request from "@/utils/request";
export default {
  name: "Settings",
  components: {
    Header,
    Plus,
  },
  data() {
    return {
      userInfoFormData: {
        userName: "",
        targetBook: "",
        avator: "",
        userID:"",
        password:'',
      },
      passwordFormData:{
        password:"",
        newPassword:"",
        confirmPassword:""
      },
     activeName:"first",
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 20,
            message: "长度应为3-20个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" },
          {
          min: 6,
          max: 20,
          message: "密码长度应为6-20个字符",
          trigger: "blur",
        }
        ],
        newPassword:[
          {
            required: true,
            message: "请输入新密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "密码长度应为6-20个字符",
            trigger: "blur",
          }
        ],
        confirmPassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
        targetBook: [
          {
            required: true,
            message: "请选择目标词书",
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
      return this.$store.getters.userImageUrl;
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(formName==='passwordForm')
          {
            if(this.passwordFormData.confirmPassword!==this.passwordFormData.newPassword){
              this.$message({
                type: "error",
                message: "两次密码输入不一致",
              });
            }
            else{
              request.get("/user",{
                params:{
                  userID:this.userInfoFormData.userID,
                  password:this.passwordFormData.password,
                  newPassword:this.passwordFormData.newPassword,
                }
              }).then(res => {
                if (res.code === "0"){
                  this.$message({
                    type: "success",
                    message: "更新成功！",
                  });

                }
                else{
                  this.$message({
                    type: "error",
                    message: res.msg
                  });
                }
              })
            }
          }
          else if(formName==='userInfoForm'){
              request.put("/user",this.userInfoFormData).then(res => {
              if (res.code === "0"){
                this.$message({
                  type: "success",
                  message: "更新成功！",
                });
                localStorage.setItem("user", JSON.stringify(this.userInfoFormData)); //缓存用户信息
                this.$store.commit('setUser',this.userInfoFormData);
              }
              else{
                this.$message({
                  type: "error",
                  message: "更新失败！",
                });
              }
            })
          }


        }
        else {
          this.$message({
            type: "error",
            message: "请将表单填写完整",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res) {
      this.userInfoFormData.avator = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt5M) {
        this.$message.error("Avatar picture size can not exceed 5MB!");
      }
      return isJPG && isLt5M;
    },
  },
  created() {
    let userJson = localStorage.getItem("user");
    let user = JSON.parse(userJson);
    this.$store.commit('setUser',user);
    this.userInfoFormData.userName = user.userName;
    this.userInfoFormData.targetBook = user.targetBook;
    this.userInfoFormData.userID = user.userID;
    this.userInfoFormData.avator = this.$store.getters.userImageUrl;
  }

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
  position: relative;
  bottom: 160px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  border-radius: 50px;
  background-color: #fff;
  width: 100%;
  height:650px;
  padding: 20px;
}

.Form{
  display:flex;
  flex-direction: column;
  align-items:center;
  position:relative;
  right: 40px;
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