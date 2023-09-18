<script setup>
import { ref, onMounted } from 'vue';



const works = ref([]);


const fetchWorks = async () => {
  try {
    const response = await fetch("http://localhost:8080/acc_house"); 
    if (response.ok) {
      works.value = await response.json();
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchWorks);

</script>


<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="work in works" :key="work.id">
        <div class="card mb-4">
          <img :src="work.photo" class="card-img-top" :alt="work.name" />
          <div class="card-body">
            <h5 class="card-title">{{ work.name }}</h5>
            <p class="card-text">{{ work.description }}</p>
            <router-link to="/Contact" class="btn btn-success">Solicita Presupuesto</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  



<style scoped>
 .row {
  margin-top: 120px;
 }

</style>