<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <button class="text-xl m-3 text-white w-fit px-3 py-1.5 rounded bg-gray-500" type="button" @click="count++">count is {{ count }}</button>
</template>

<style scoped></style>
