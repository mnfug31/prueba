<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tu nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="¿Cómo te llamas?"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Nombre receta:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <div>
        <!-- Styled -->
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Inserta la imagen aquí..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    
        <!-- Plain mode -->
        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
      </div>

      <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Escribe aquí tu receta!"
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>


      <b-button type="submit" variant="primary">Subir</b-button>
      <b-button type="reset" variant="danger">Borrar</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
    }
    },
    data() {
      return {
        file1: null,
        file2: null
      }
    },
  
  data() {
      return {
        text: ''
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>