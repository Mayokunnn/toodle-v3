<template>
  <div v-if="showModal" class="overlay"></div>
  <div
    v-if="showModal"
    class="h-full tablet:absolute w-full z-10 flex justify-center items-center"
  >
    <div
      class="w-[280px] h-fit tablet:w-[500px] bg-white shadow-lg rounded-lg p-2 tablet:p-4 text-xs tablet:text-sm"
    >
      <div class="p-1 tablet:p-1.5 w-full">
        <label class="uppercase">Title: </label>
        <div>
          <input
            class="p-1 tablet:p-1.5 border border-black rounded w-full focus:outline-none"
          />
        </div>
      </div>
      <div class="p-1 tablet:p-1.5 w-full">
        <label class="uppercase">Description: </label>
        <div>
          <textarea
            class="p-1 tablet:p-1.5 border no-drag border-black rounded w-full focus:outline-none"
          ></textarea>
        </div>
      </div>
      <div class="p-1 tablet:p-1.5">
        <label class="uppercase">Due Date: </label>
        <VueDatePicker v-model="date"></VueDatePicker>
      </div>
      
        <div class="p-1 tablet:p-1.5"><button class="w-full mx-auto px-3 py-1.5 bg-gray-500 rounded">Add</button></div>
    
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const showModal = ref(false);
const date = ref();
</script>

<style scoped>
.no-drag {
  user-drag: none;
  min-height: 250px;
  max-height: 250px;
}

@media screen and (min-width: 640px) {
  .no-drag {
    min-height: 300px;
    max-height: 300px;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 9; /* Ensure it's below the modal */
}
</style>
