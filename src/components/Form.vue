<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<style scoped>
.form {
  @apply px-5 py-5 bg-white border border-lightGrayishBlue w-[300px] tablet:w-[400px] shadow-lg flex flex-col rounded-lg gap-2;
}
</style>
