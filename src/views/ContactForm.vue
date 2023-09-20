<script setup>

import axios from 'axios';
import { ref } from 'vue';


const email = ref('');
const name = ref('');
const phone = ref(0);
const work = ref('');
const metros = ref(0);
const mensajeEnviado = ref('');
const budget_price = ref (0);
const enviando = ref(false);


const enviarFormulario = async () => {

  enviando.value = true;
  try {
    const response = await axios.post("http://localhost:8080/budget/save", {
      name: name.value,
      email: email.value,
      phone: phone.value,
      work: work.value,
      metros: metros.value,
      budget_price: budget_price.value
    })

    if (response.status === 200) {
      mensajeEnviado.value = "El anunciante se pondrá en contacto con usted tan pronto como pueda. No olvide revisar su correo electrónico para poder leer la respuesta del anunciante. Recomendamos también revisar la carpeta spam del correo electrónico. Cualquier duda o problema por favor no dude en contactarnos. ¡Esperamos que sea el hogar perfecto para ti!";
    }

  } catch (error) {
    console.error('Error al eviar el formulario:', error);
  } finally {
    enviando.value = false;
  }

};













</script>



<template>
  <body class="mx-3">
    

    
    <div class="container mt-5">
      <h1 class="display-4">Rellena el formulario</h1>
    </div>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" v-model="email" required>
      </div>
      <div class="col-md-6">
        <label for="inputName" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="inputName" v-model="name" required>
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Dirección</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="">
      </div>


      <div class="col-md-6">
        <label for="inputPhone" class="form-label">Telefono</label>
        <input type="text" class="form-control" id="inputPhone" v-model="phone" required>
      </div>
      <div class="col-md-6">
        <label for="inputBudget_price" class="form-label">Budget_price</label>
        <input type="text" class="form-control" id="inputBudget_price" v-model="Budget_price" required>
      </div>
      <div class="col-md-6">
        <label for="inputWork" class="form-label">Trabajos</label>
        <select id="inputWork" class="form-select" v-model="work" required>
          <option selected>Elige...</option>
          <option>Techos</option>
          <option>Techos Desmontables</option>
          <option>Trasdosados</option>
          <option>Tabiques</option>
          <option>Molduras</option>
          <option>Muebles</option>
          <option>Insonorización y aislamientos</option>

        </select>
      </div>
      <div class="col-md-6">
        <label for="inputMetrosCuadrados" class="form-label">m/2</label>
        <input type="text" class="form-control" id="inputMetrosCuadrados" v-model="metros" required>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Verifícame
          </label>
        </div>
      </div>
      <div class="col-12">
        <div class="col-12">
          <button type="submit" class="btn btn-success" @click="enviarFormulario" :disabled="enviando">
            {{ enviando ? 'Enviando...' : 'Enviar' }}
          </button>
          
        </div>
      </div>
    </form>
    <div class="mt-3" v-if="mensajeEnviado">{{ mensajeEnviado }}</div>
  </body>
</template>
  
<style scoped>
h1 {
  margin-top: 120px;
}
</style>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  