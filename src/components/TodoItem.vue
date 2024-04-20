<template>
  <li
    class="grid grid-cols-[1fr_auto] gap-1 justify-between items-center bg-white text-darkVeryDesaturatedBlue px-3 py-2 rounded text-sm tablet:text-base"
  >
    <div class="flex gap-4">
      <label class="flex items-center">
        <input type="checkbox" v-model="isCompleted" class="inputcheck" />
        <span
          :class="isCompleted ? 'custom_checkbox_complete' : 'custom_checkbox'"
        ></span>
      </label>
      <div>
        <h2 class="font-semibold text-base tablet:text-xl laptop:text-xl">
          I am around
        </h2>
        <p class="text-sm tablet:text-base">I read a book jbd</p>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <label for="" class="flex items-center">
        <input class="inputcheck" type="checkbox" v-model="isImportant" />
        <span
          class="custom_star"
          :class="isImportant ? 'text-[#ffd700]' : 'text-white'"
          >&#9733;</span
        >
      </label>

      <div class="flex flex-col gap-1 justify-around">
        <span class="bg-gray-500 h-1 w-1 rounded"></span>
        <span class="bg-gray-500 h-1 w-1 rounded"></span>
        <span class="bg-gray-500 h-1 w-1 rounded"></span>
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps: {
  tasks: Object;
}

const isCompleted = ref(false);
const isImportant = ref(true);
</script>

<style lang="css" scoped>
.inputcheck {
  display: none;
  cursor: pointer;
}

.custom_checkbox {
  @apply cursor-pointer w-4 tablet:w-5 border border-black rounded-full h-4 tablet:h-5;
}

.custom_checkbox_complete {
  position: relative;
  background-color: #ffb6c1;
  @apply cursor-pointer w-4 tablet:w-5 border border-black rounded-full h-4 tablet:h-5;
}

.custom_checkbox_complete::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.custom_star {
  cursor: pointer;
  text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px,
    rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    rgb(0, 0, 0) -0.989992px 0.14112px 0px,
    rgb(0, 0, 0) -0.653644px -0.756802px 0px,
    rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    rgb(0, 0, 0) 0.96017px -0.279415px 0px; /* golden yellow */
  @apply text-xl  tablet:text-2xl;
}
</style>
