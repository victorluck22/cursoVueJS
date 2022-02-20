<template>
<div>
  <Header/>
  <PrimeiroComponente/>
  <p class="paragrafo-pai">O dado do app é {{ testando }}</p>
  <LifeCycle />
  <Pessoa />
</div>
  
</template>

<script>
import Header from "./components/Header.vue";
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";


export default {
  name: "App",
  components: {
    Header,
    PrimeiroComponente,
    LifeCycle,
    Pessoa
  },
  data() {
    return {
      testando: 'teste 5555'
    }
  }
}
</script>
<style>
  body {
    background-color: #333;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    color: burlywood;
  }
  a:hover {
    color: green;
  }

  .teste {
    background-color: #000;
  }


</style>