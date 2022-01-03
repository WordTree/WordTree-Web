<template>
  <div class="body">
    <div
      class="register-card"
      style="width: 400px; margin: 150px auto; z-index: 10"
    >
      <el-card shadow="always" class="card">
        <div
          style="
            color:rgb(100, 150, 230);
            font-size: 35px;
            text-align: center;
            font-weight: bold;
            padding: 30px;
          "
        >
          Register
        </div>
        <el-form :model="form" :rules="rules" ref="form" size="normal">
          <el-form-item prop="userID" style="padding-left:40px">
            <el-input
              placeholder="账号"
              prefix-icon="el-icon-user-solid"
              style="width: 90%"
              v-model="form.userID"
            >
              <template #prefix>
                <el-icon class="el-input__icon"><User/></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" style="padding-left:40px">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              style="width: 90%"
              v-model="form.password"
              show-password
            >
              <template #prefix>
                <el-icon class="el-input__icon"><Key/></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="confirm" style="padding-left:40px">
            <el-input
              placeholder="请再次输入密码"
              style="width: 90%"
              v-model="form.confirm"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item style="padding-left:140px">
            <el-button style="width: 40%;" type="warning" @click="register" 
              >注 册</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";
import {Key} from "@element-plus/icons"
import {User} from "@element-plus/icons"

export default {
  name: "Register",
  components:{
    User,
    Key
  },
  data() {
    return {
      form: {},
      rules: {
        userID: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirm: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    register() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.form.password !== this.form.confirm) {
            this.$message({
              type: "error",
              message: "两次密码输入不一致",
            });
            return;
          }
          request.post("/user/register", this.form).then((res) => {
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "注册成功！",
              });
              this.$router.push("/login"); //注册成功
            }
            else {
              this.$message({
                type: "error",
                message: res.msg,
              });
            }
          });
        }
      });
    },
  },
};
</script>


<style scoped>
.body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
  min-height: 100vh;
  background-color: rgb(242,193,195);
  background-image: radial-gradient(
      closest-side,
      rgb(190, 218, 240),
      rgba(235, 105, 78, 0)

    ),
    radial-gradient(closest-side, rgba(244,207,201, 1), rgba(243, 11, 164, 0)),
    radial-gradient(
      closest-side,
      rgba(176,215,248, 1),
      rgba(254, 234, 131, 0)
    ),
    radial-gradient(
      closest-side,
      rgba(226,235,242, 1),
      rgba(170, 142, 245, 0)
    ),
    radial-gradient(
      closest-side,
      rgba(122,134,202, 1),
      rgba(248, 192, 147, 0)
    );
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
    110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
    -30vmax -10vmax, 50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body::after {
  content: "";
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.card {
  border-radius: 10px;
  background-color: rgba(236,232,230, 0.15);
  border-color: transparent;
}

@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
      110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
      -30vmax -10vmax, 50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax,
      90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax -20vmax,
      -40vmax -20vmax, 40vmax 60vmax;
  }
  50% {
    background-size: 80vmax 80vmax, 110vmax 110vmax, 80vmax 80vmax,
      60vmax 60vmax, 80vmax 80vmax;
    background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax,
      20vmax 10vmax, 30vmax 70vmax;
  }
  75% {
    background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax,
      90vmax 90vmax, 70vmax 70vmax;
    background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax,
      -10vmax 10vmax, 40vmax 60vmax;
  }
}

.register-card {
  position: relative;
}
</style>