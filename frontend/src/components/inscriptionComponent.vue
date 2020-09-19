<template>
  <div class="inscription">
    <h1>INSCRIPTION</h1>
    <b-form @submit.prevent="forminscription" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label-for="input-1" description="email">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          required
          pattern="^[^&amp;<>&quot;()'!_$*€£`+=\/;?#]+$"
          placeholder="votre email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2" description="mot de passe">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          pattern="^[^&amp;<>@&quot;`+=\/;?#]+$"
          placeholder="votre mot de passe"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">SOUMETTRE</b-button>
      <b-button type="reset" variant="danger">RESET</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "inscriptionComponent",
  data() {
    return {
      form: {
        email: "",
        password: "",
        message: null,
      },
      show: true,
    };
  },
  methods: {
    forminscription() {
      if (this.form.email === null || this.form.password === null) {
        return false;
      }
      let user = {
        email: this.form.email,
        password: this.form.password,
      };
      fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: "Bearer token",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
         this.$router.push({ name: 'Home' });
        
    },
    onReset() {
      this.form.email = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>