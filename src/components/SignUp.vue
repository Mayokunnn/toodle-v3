<template>
  <div class="h-full grid items-center justify-center">
    <Form>
      <h2
        class="capitalize text-center font-bold text-darkVeryDesaturatedBlue text-lg"
      >
        Sign Up
      </h2>
      <FormInput title="name" type="name" />
      <FormInput title="email" type='email' />
      <FormInput title="password" type="password" />

      <div class="p-1 tablet:p-1.5">
        <button
          class="w-full mx-auto px-3 py-1.5 bg-lightGrayishBlue rounded hover:bg-lightDarkGrayishBlue transition-colors"
        >
          Sign Up
        </button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import Form from "./Form.vue";
import FormInput from "./FormInput.vue";
</script>

<style lang="scss" scoped></style>
