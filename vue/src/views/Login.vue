<template>
  <div class="body">
    <div
      class="login-card"
      style="width: 400px; margin: 150px auto; z-index: 10; max-width: 600px"
    >
      <el-card shadow="always" class="card">
        <div
          style="
            color: rgba(129,192,176,1);
            font-size: 35px;
            text-align: center;
            font-weight: bold;
            padding: 30px;
          "
        >
          Login
        </div>
        <el-form :model="form" :rules="rules" ref="form" size="normal">
          <el-form-item prop="userID" style="padding-left: 43px">
            <el-input
              placeholder="账号"
              prefix-icon="el-icon-user-solid"
              style="width: 90%"
              v-model="form.userID"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" style="padding-left: 43px">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              style="width: 90%"
              v-model="form.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 110px">
            <el-button style="width: 30%" type="primary" @click="login"
              >登 录</el-button
            >
            <el-button style="width: 30%" @click="register">注 册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Login",
  data() {
    return {
      form: {},
      rules: {
        userID: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    //每次跳转到登录界面则移除缓存的用户信息
    localStorage.removeItem("user");
  },
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          request.post("/user/login", this.form).then((res) => {
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "登录成功！",
              });

              localStorage.setItem("user", JSON.stringify(res.data)); //缓存用户信息

              this.$router.push("/"); //登录成功
            } else {
              this.$message({
                type: "error",
                message: res.msg,
              });
            }
          });
        }
      });
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
  min-height: 100vh;
  /* background-color: #e493d0; */
  background-color: rgb(170, 209, 222);
  background-image: radial-gradient(
      closest-side,
      /* rgba(235, 105, 78, 1), */ rgba(113, 151, 170, 1),
      rgba(235, 105, 78, 0)
    ),
    radial-gradient(closest-side, rgb(210, 231, 240), rgba(243, 11, 164, 0)),
    radial-gradient(
      closest-side,
      /* rgba(254, 234, 131, 1), */ rgba(237, 213, 160, 1),
      rgba(254, 234, 131, 0)
    ),
    radial-gradient(
      closest-side,
      /* rgba(170, 142, 245, 1), */ rgba(199, 163, 124, 1),
      rgba(170, 142, 245, 0)
    ),
    radial-gradient(
      closest-side,
      /* rgba(248, 192, 147, 1), */ rgba(255, 215, 0, 1),
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
  background-color: rgba(170, 209, 222, 0.15);
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

.login-card {
  position: relative;
}
</style>