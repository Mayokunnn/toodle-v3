<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {colRef} from '../services/firebase.ts'
import { getDocs } from 'firebase/firestore';
getDocs(colRef).then(snapshot => {
  const tasks = snapshot.docs.map((doc) => {
    return {...doc.data(), task_id: doc.id}
  })
  console.log(tasks);
}).catch(err=> console.log(err.message) )

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
    <HelloWorld msg="Hey Mayokun"/>
  </h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
