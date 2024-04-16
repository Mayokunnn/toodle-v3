<template>
    <div class="w-full">
        <input type="checkbox" v-model="isCompleted"/>
        <p></p>
        <input type="checkbox" v-model="isImportant"/>
        <div class="flex flex-col space-between">
            <span></span><span></span><span></span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

    const isCompleted = ref(false)
    const isImportant = ref(false)
</script>

<style lang="scss" scoped>

</style>