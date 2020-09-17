<template>
  <div class="home">
    <div id="connexion">
      Vous devez vous connecter
    </div>
    <connexionComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import connexionComponent from '@/components/connexionComponent.vue'

export default {
  name: 'Home',
  components: {
    connexionComponent
  }
}
</script>
