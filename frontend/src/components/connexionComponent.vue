<template>
  <div class="connexion">
    <h1>Connexion</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" 
                    label="Adresse mail :"
                    label-for="input-1">
          <b-form-input id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="votre email">
          </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" 
                    label="mot de passe :"
                    label-for="input-2">
          <b-form-input id="input-2"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="votre mot de passe">
          </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">SOUMETTRE</b-button>
      <b-button type="reset" variant="danger">RESET</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'connexionComponent',
 data(){
   return{
     form :{
        email: '',
        password: '',
        message: null,
     },
     show: true
    
   }
 },
 methods: {
   onSubmit(e){
     e.preventDefault()
     if(this.form.email == null || this.form.password == null){
       return false ;  
     }
     let user = {
       email: this.form.email,
       password: this.form.password,
     };
     fetch('http://localhost:3000/api/user/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json;charset=utf-8',
         'Authorization': 'Bearer token',        
       },
       body: JSON.stringify(user)
     })
     .then(response => response.json())
     .then(data => {console.log(data)})
     .catch(error => console.log(error));
     
   },
   onReset(e){
     e.preventDefault()
      this.form.email =""
      this.form.password=""
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
