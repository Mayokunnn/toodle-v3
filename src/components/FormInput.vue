<template>
  <div class="input_container">
    <label class="capitalize">{{ title }}</label>
    <div>
      <input class="input" :type="type" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  type?: string;
}>();
</script>

<style scoped>
.input {
  @apply p-1 tablet:p-1.5 border border-lightGrayishBlue rounded w-full focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-lightDarkGrayishBlue;
}

.input_container {
  @apply p-1 tablet:p-1.5 w-full space-y-2;
}
</style>
