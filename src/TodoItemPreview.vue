<template>
  <div v-if="showModal" class="overlay"></div>
  <div
    v-if="showModal"
    class="h-full tablet:absolute w-full z-10 grid justify-center items-center"
  >
    <div
      class="w-[280px] h-fit tablet:w-[500px] bg-white shadow-lg rounded-lg p-2 tablet:p-4 text-sm tablet:text-sm"
    >
      <div class="p-1 tablet:p-1.5 w-full">
        <label class="uppercase font-bold">Title: </label>
        <h2 class="capitalize font-medium ">Blehh bcjhbc dsbsdhi dccbhui</h2>
      </div>
      <div class="p-1  tablet:p-1.5 w-full overflow-scroll">
        <label class="uppercase font-bold">Description: </label>
        <p class="max-h-[250px] p-1.5">Notes Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe at quos soluta molestias. Ipsa tenetur esse et? Sint doloribus, unde reprehenderit obcaecati magni nemo maxime illum aliquam eum tempora ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias asperiores cumque ea aspernatur deleniti dolorem ut voluptatem nam omnis doloribus enim saepe, quia accusamus, nemo eos nostrum! Quis, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed odit dolorem maxime eaque accusantium provident, perspiciatis dolorum quas delectus? Odit recusandae voluptate ab aliquid impedit inventore aliquam fugit similique.</p>
      </div>
      <div class="p-1 tablet:p-1.5">
      <button class="w-full mx-auto px-3 py-1.5 bg-gray-500 rounded">
        Edit
      </button>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showModal = ref(true);
</script>

<style scoped>
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
