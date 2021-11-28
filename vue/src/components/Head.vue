<template>
    <div style="height: 50px; line-height: 50px; border-bottom:1px solid #ccc; display: flex">
        <div style="width: 200px;padding-left: 30px; font-weight: bold; color: seagreen;font-size: large">WordTree
        </div>
        <div style="flex: 1"></div>
        <div style="width: 100px">
            <el-dropdown>
                <span class="el-dropdown-link">
                UserName
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

<script lang="ts" setup>
export default {
  name: 'Head'
}

</script>

<style scoped>

</style>