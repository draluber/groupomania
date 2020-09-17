<template>
  <div id="app">
    <div id="logo">
      <img src="./assets/logoGeneral.png" alt="logo du groupe">    
    </div>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand><router-link to="/home" ><img src="./assets/logoGeneral.png" class="d-inline-block align-top" width="180px" height="40px"></router-link> </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="!Logged"><router-link to="/inscription" >Inscription</router-link></b-nav-item>
        <b-nav-item v-if="Logged"><router-link to="/profil" >Admin</router-link></b-nav-item>
        <b-nav-item v-if="Logged"><router-link to="/profil" >Déconnexion</router-link></b-nav-item>  
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-if="Logged">
        <b-nav-item-dropdown right>
           <template v-slot:button-content>
             <em>{{userPseudo}}</em>
           </template>
           <b-dropdown-item><b-link to="/profil">Profil</b-link></b-dropdown-item>
           <b-dropdown-item v-on:click="logout">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>

  <div id="viewTotalContent">
    <router-view/>
  </div>
  </div></div>
</template>
<script>
export default {
  name: "App" ,
    data () {
      return {
        Logged: false,
        userPseudo: "Olivier",
      }
    },
    methods: {
      logout (){
        localStorage.clear();
        this.$router.push('home');
      }
    }
}
</script>
<style lang="scss">
#app {
 -webkit-font-smoothing: antialiased;
 text-align: center;
 color: #a10f0f;
}
#viewTotalContent{
  width: 98%;
  margin: auto;
}
#logo img {
  width: 30%;
  margin-top: 5%;
  margin-bottom: 5%;
}

@media only screen and (min-width: 1200px) {
   #app{
     width: 60%;
     margin: auto;
    
   }
  
}

</style>
