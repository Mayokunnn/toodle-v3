<template>
  <div class="w-full tablet:max-w-[70%] laptop:max-w-[50%]">
    <div
      class="w-full flex justify-between items-center py-4 tablet:py-4 rounded"
    >
      <TodoFilter />
      <TodoSummary />
      <button
        class="bg-white shadow-lg text-darkVeryDesaturatedBlue px-1.5 tablet:px-2 py-1.5 rounded font-medium text-sm tablet:text-base"
      >
        Add task +
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TodoFilter from "./TodoFilter.vue";
import TodoSummary from "./TodoSummary.vue";
</script>

<style scoped>
</style>
