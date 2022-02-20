<template>
  <div>
    <h1>Olá Vue</h1>
    <p>Meu nome é {{ name }}</p>
    <p>Trabalho como {{ occupation }}</p>
  </div>
  
</template>
<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      name : 'Victor',
      occupation : 'Dev'
    }
  }
}
</script>