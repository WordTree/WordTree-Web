<template>
    <Head/>
    <div style="background-color: rgba(211,211,211,0.36);display: flex">
        <Home/>
    </div>

</template>

<script>
    import Head from "../components/Head";
    import Home from "../views/Home";
    export default {
        name: "Layout",
        components:{
            Home,
            Head
        }
    }
</script>

<style scoped>

</style>