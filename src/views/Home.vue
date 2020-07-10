<template>
    <div>
        <Til></Til>
        <router-view></router-view>
    </div>
</template>

<script>
import Til from "../components/til"
    export default {
        components:{
            Til
        }
    }
</script>

<style scoped>

</style>