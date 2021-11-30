<template>
    <div class="header">
        <span class="logo"><router-link to="/" style="text-decoration:none;color:inherit">WordTree</router-link></span>
      <div style="flex: 1"></div>
        <div class="drop-items">
          <el-dropdown>
             <div class="user-image" style="padding-top: 10px">
                <el-avatar
                :src="url"
                shape="circle"
                size="60"
                 ></el-avatar>
            </div>
                <span class="el-dropdown-link">
                     <i class="el-icon-caret-bottom"></i>
                </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item divided><router-link to="Settings" style="text-decoration:none;color:inherit">个人设置</router-link></el-dropdown-item>
                <el-dropdown-item @click="exit" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
      url:String,
    },
    methods:{
        exit(){
            this.$router.push("/login")

        }
    }
}
</script>

<style scoped>
    .header {
        display:flex;
        height: 50px;
        background-color: rgb(239, 242, 245);
    }

    .logo {
        font-size:24px;
        color: #5CAC44;
        align-self: center;
        padding:20px 20px;
    }

    .drop-items{
      align-self: center;
      padding:20px 20px;
      font-size:20px;
      }
</style>