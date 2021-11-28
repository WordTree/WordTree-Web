<template>
    <el-card class="card" shadow="hover">
        <div class="user-greeting">
            <div class="user-image">
                <el-avatar
                :src="url"
                shape="circle"
                size="60"
                 ></el-avatar>
            </div>
            <div class="greeting">
                <span>{{`${getState}，${userName}。`}}</span>
            </div>
        </div>
        <hr>
    </el-card>
</template>

<script>
export default {
    name: 'User',
    props: {
        url:String,
        userName:String
    },
    data() {
        return {
         
        }
    },

    created:function(){
      
    },
    computed: {
        getState() {
            // 获取当前时间
            let timeNow = new Date();
            // 获取当前小时
            let hours = timeNow.getHours();
            // 设置默认文字
            let state= ``;
            // 判断当前时间段
            if (hours >= 0 && hours <= 10) {
                state = `早上好`;
            } else if (hours > 10 && hours <= 14) {
                state= `中午好`;
            } else if (hours > 14 && hours <= 18) {
                state= `下午好`;
            } else if (hours > 18 && hours <= 24) {
                state= `晚上好`;
            }
            return state;
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .card {
        margin:25px 0px;
        border-radius: 6px;
        padding:0px;
        height: 100%;
        max-width: 1400px;
        max-height:229px;
        border-color:transparent;
        flex: 1;
    }

    .user-greeting {
        display: flex;
    }

    .greeting {
        height: auto;
        margin-left:10px;
        display: flex;
    }
    .greeting span {
        align-self: center;
    }
</style>