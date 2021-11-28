<template>
    <div class="header">
        <span class="logo">WordTree</span>
      <div style="flex: 1"></div>
        <div class="drop-items">
          <el-dropdown>
             <div class="user-image">
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
                <el-dropdown-item divided>个人中心</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
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