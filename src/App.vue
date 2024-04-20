<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen grid grid-rows-[5rem_1fr]">
    <div
      class="flex items-center text-lightDarkGrayishBlue gap-5 justify-end bg-lightVeryGrayishBlue border-b border-lightDarkGrayishBlue p-2 laptop:p-[1.5rem_4.8rem]"
    >
      <icon
        name="fa-regular-moon"
        fill="hsl(236, 9%, 61%)"
        hover="true"
        animation="pulse"
        scale="1.5 "
      />
      <div class="flex gap-4 items-center">
        <img
          class="rounded-full h-10 w-10 contain cursor-pointer"
          src="https://picsum.photos/200"
          alt="avatar"
        />
        <h2 class="text-lg">Olojo Feranmi</h2>
      </div>
    </div>
    <main class="h-full p-5 bg-white">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
