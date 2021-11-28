<template>
    <div class="login-container">
        <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
                <div style="color: transparent">占位符</div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-form
                        ref="form"
                        :model="form"
                        :rules="rules"
                        class="login-form"
                        label-position="left"
                >
                    <div class="title">hello !</div>
                    <div class="title-tips">欢迎来到{{ title }}！</div>
                    <el-form-item style="margin-top: 40px" prop="username">
            <span class="svg-container svg-container-admin">
              <vab-icon :icon="['fas', 'user']" />
            </span>
                        <el-input
                                v-model.trim="form.username"
                                v-focus
                                placeholder="请输入用户名"
                                tabindex="1"
                                type="text"
                        />
                    </el-form-item>
                    <el-form-item prop="password">
            <span class="svg-container">
              <vab-icon :icon="['fas', 'lock']" />
            </span>
                        <el-input
                                :key="passwordType"
                                ref="password"
                                v-model.trim="form.password"
                                :type="passwordType"
                                tabindex="2"
                                placeholder="请输入密码"
                                @keyup.enter.native="handleLogin"
                        />
                        <span
                                v-if="passwordType === 'password'"
                                class="show-password"
                                @click="handlePassword"
                        >
              <vab-icon :icon="['fas', 'eye-slash']"></vab-icon>
            </span>
                        <span v-else class="show-password" @click="handlePassword">
              <vab-icon :icon="['fas', 'eye']"></vab-icon>
            </span>
                    </el-form-item>
                    <el-button
                            :loading="loading"
                            class="login-btn"
                            type="primary"
                            @click="handleLogin"
                    >
                        登录
                    </el-button>
                    <router-link to="/register">
                        <div style="margin-top: 20px">注册</div>
                    </router-link>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style scoped>
    .login-container {
        font-family: 'Quicksand', sans-serif;
        margin: 0;
        min-height: 100vh;
        background-color: #e493d0;
        background-image:
                radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
                radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
                radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
                radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
                radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
        background-size:
                130vmax 130vmax,
                80vmax 80vmax,
                90vmax 90vmax,
                110vmax 110vmax,
                90vmax 90vmax;
        background-position:
                -80vmax -80vmax,
                60vmax -30vmax,
                10vmax 10vmax,
                -30vmax -10vmax,
                50vmax 50vmax;
        background-repeat: no-repeat;
        animation: 10s movement linear infinite;
    }


    .login-container::after {
            content: '';
            display: block;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
    }
    @keyframes movement {
        0%, 100% {
            background-size:
                    130vmax 130vmax,
                    80vmax 80vmax,
                    90vmax 90vmax,
                    110vmax 110vmax,
                    90vmax 90vmax;
            background-position:
                    -80vmax -80vmax,
                    60vmax -30vmax,
                    10vmax 10vmax,
                    -30vmax -10vmax,
                    50vmax 50vmax;
        }
        25% {
            background-size:
                    100vmax 100vmax,
                    90vmax 90vmax,
                    100vmax 100vmax,
                    90vmax 90vmax,
                    60vmax 60vmax;
            background-position:
                    -60vmax -90vmax,
                    50vmax -40vmax,
                    0vmax -20vmax,
                    -40vmax -20vmax,
                    40vmax 60vmax;
        }
        50% {
            background-size:
                    80vmax 80vmax,
                    110vmax 110vmax,
                    80vmax 80vmax,
                    60vmax 60vmax,
                    80vmax 80vmax;
            background-position:
                    -50vmax -70vmax,
                    40vmax -30vmax,
                    10vmax 0vmax,
                    20vmax 10vmax,
                    30vmax 70vmax;
        }
        75% {
            background-size:
                    90vmax 90vmax,
                    90vmax 90vmax,
                    100vmax 100vmax,
                    90vmax 90vmax,
                    70vmax 70vmax;
            background-position:
                    -50vmax -40vmax,
                    50vmax -30vmax,
                    20vmax 0vmax,
                    -10vmax 10vmax,
                    40vmax 60vmax;
        }
    }

</style>