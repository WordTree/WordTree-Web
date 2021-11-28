<template>
    <div class="header">
        <span class="logo">WordTree</span>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header {
        display:flex;
        height: 50px;
        background-color: rgb(50,64,87);
    }

    .logo {
        font-size:24px;
        color:rgb(203,207,211);
        align-self: center;
        padding:20px 20px;
    }
</style>