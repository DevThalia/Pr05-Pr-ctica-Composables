<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import PostCard from "../components/PostCard.vue";
import { listarPosts } from '../composables/operaciones.js';
import { ref, onMounted } from 'vue';

const posts = ref([]);

onMounted(async () => {
  posts.value = await listarPosts(); 
});
</script>
