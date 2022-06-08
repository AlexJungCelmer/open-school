<template>
  <div class="q-pa-md row items-start q-gutter-md">
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const myForm = ref(null)

    function validate () {
      myForm.value.validate().then(success => {
        if (success) {
          // yay, models are correct
        }
        else {
          // oh no, user has filled in
          // at least one invalid value
        }
      })
    }

    // to reset validations:
    function reset () {
      myForm.value.resetValidation()
    }

    return {
      myForm,
      // ...
    }
  },
  data () {
    return {
      school: {}
    }
  },

  created () {
    this.$refs.myForm.validate().then(success => {
      if (success) {
        // yay, models are correct
      }
      else {
        // oh no, user has filled in
        // at least one invalid value
      }
    })

    // to reset validations:
    this.$refs.myForm.resetValidation()
    // this.$store.dispatch('school/getUserSchools')
  }
}
</script>

<style>

</style>
