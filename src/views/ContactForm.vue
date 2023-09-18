   <script setup>
  
  import axios from 'axios';
   import { ref } from 'vue';

   
  const email = ref('');
  const name = ref('');
  const phone = ref('');
  const work = ref('');
  const metros = ref('');
  const mensajeEnviado = ref (null);



  const enviarFormulario  = async () => {
    try {
      const response = await axios.post( "http://localhost:8080/acc_house", {
        email: email.value,
        name: name.value,
        phone: phone.value,
        work: work.value,
        metros: metros.value,
      })

      if (response.status === 200){
        mensajeEnviado.value = 'Tu mensaje se envio correctamente'
      }

    } catch (error) {
     console.error ('Error al eviar el formulario:' , error);
  }
  
};
  
  
  
  
  
  
  
  
  
  
  
  
  
  </script>



  <template>
    <body class="mx-3">
      <div class="container mt-5">
        <h1></h1>
      </div>
  
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">CONTACTA CON NOSOTROS</h5>
          <h6 class="card-subtitle mb-2 text-muted">Queremos escucharte</h6>
          <p class="card-text">Si quieres información sobre cualquiera de nuestros trabajos, rellena nuestro formulario y nos pondremos en contacto contigo lo antes posible.</p>
          <p class="card-text">Telefono : 675601567</p>
          <p class="card-text">Email : francamocha@gmail.com</p>
        </div>
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
          <button type="submit" class="btn btn-success">Enviar</button>
        </div>
      </form>
      <div class="mt-3" v-if="mensajeEnviado">{{ mensajeEnviado }}</div>
    </body>
  </template>
  
  <style scoped>
  .card {
    margin-top: 120px; 
  }
  </style>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  