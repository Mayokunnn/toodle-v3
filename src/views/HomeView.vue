<template>
  <main class="relative h-full flex flex-col tablet:items-center px-3">
     <p
      class="text-[red] absolute bottom-10 right-10 z-10 font-semibold px-2 rounded py-1.5 bg-red-100 cursor-pointer"
    >
      Logout
    </p>
    <NavBar/>
    <ul class="shadow-lg w-full tablet:max-w-[70%] laptop:max-w-[50%] divide-y-2">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />

    </ul>
  </main>
</template>

<script lang="ts" setup>
import NavBar from "../components/NavBar.vue";
import TodoItem from "../components/TodoItem.vue";
</script>

<style lang="scss" scoped></style>
