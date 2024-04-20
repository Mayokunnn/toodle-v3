<template>
  <select class="input" v-model="filter">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="important">Important</option>
  </select>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const filter = ref("all");
</script>

<style scoped>
.input {
  @apply p-1 border border-lightGrayishBlue rounded  focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-lightDarkGrayishBlue;
}
</style>
