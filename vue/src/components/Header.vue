<template>
    <div class="header">
        <span class="logo"><router-link to="/" style="text-decoration:none;color:inherit">WordTree</router-link></span>
      <div style="flex: 1"></div>
        <div class="drop-items">
          <el-dropdown>
             <div class="user-image" type="border-card" style="" >
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
              <el-dropdown-menu style="" >
                <el-dropdown-item @click="toSettings" divided style="font-family: PingFang;letter-spacing: 1px">个人设置</el-dropdown-item>
                <el-dropdown-item @click="exit" divided style="font-family: PingFang;letter-spacing: 1px">退出登录</el-dropdown-item>
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
        },
        toSettings(){
          this.$router.push('/settings')
        }
    }
}
</script>

<style scoped>
    .header {
        display:flex;
        height: 50px;
        background-color: #fff;
    }

    .logo {
        font-size:28px;
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