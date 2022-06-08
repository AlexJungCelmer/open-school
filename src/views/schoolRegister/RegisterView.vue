<template>
  <q-page class="flex items-center justify-center">
    <q-form
      @submit="registerSchool"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="school.name"
        label="Nome da sua escola"
        hint="Escola de educação básica Fulano Beltrano"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, preencha o campo']"
      />

      <q-input
        filled
        v-model="school.email"
        label="E-mail da escola"
        hint="Não use seu e-mail pessoal!!!"
        type="email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, preencha o campo']"
      />

      <q-input
        filled
        type="number"
        v-model="school.inep"
        label="Código INEP da escola"
        maxlength="8"
        minlength="8"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Entre com o código da escola.',
        ]"
      />

      <div>
        <q-toggle v-model="school.accept_terms" label="Eu aceito compartilhar os dados da minha escola." />
      </div>
      <div>
        <q-toggle v-model="school.has_medium_teaching" label="Minha escola tem ensino médio." />
      </div>

      <div>
        <q-btn label="Enviar" type="submit" color="primary" class="q-mx-auto flex"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import School from '@/services/School'
export default {
  data () {
    return {
      school: {
        name: 'Teste',
        email: 'alex@celmer.dev',
        inep: '12345678',
        accept_terms: false,
        has_medium_teaching: false
      }
    }
  },

  methods: {
    registerSchool: function () {
      const vm = this
      const schoolApi = new School()
      schoolApi.registerSchool(vm.school).then(resp => {
        vm.$q.notify({
          message: resp.data.message,
          color: 'green'
        })
        vm.$router.push({ name: 'home' })
      }).catch(err => {
        vm.$q.notify({
          message: err.response.data.message,
          color: 'red'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
main{
  max-width: 800px;
  margin: auto;
}
</style>
