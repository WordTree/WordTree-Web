<template>
    <el-card class="card" shadow="hover">
        <div class="title">{{title}}</div>
        <div class="content">
            <span>{{content}}</span>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'TextCard',
    props: {
        title:String,
        content:String,
    }
}
</script>

<style scoped>
    .title {
        font-size:14px;
        margin-bottom:20px;
        color:rgb(89,89,89);
    }

    .card {
        margin:25px;
        border-radius: 6px;
        padding:0px;
        width: 440px;
        max-height:100px;
        border-color:transparent;
        flex: 1;
    }

    .content {
        font-size:24px;
        padding-bottom: 10px;
    }
</style>