<template>
  <div v-if="post">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by User {{ post.userId }}</div>
    <div>{{ post.body }}</div>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; 
import { obtenerPost } from '../composables/operaciones.js';  

const route = useRoute(); 
const post = ref(null); 

const postId = route.params.id; 

onMounted(async () => {
  const postDetail = await obtenerPost(postId);
  post.value = postDetail;  
});
</script>
