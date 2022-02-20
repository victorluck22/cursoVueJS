<template>
  <h1>Meu nome é {{ name }}</h1>
</template>

<script>
export default {
  name: 'LifeCycle',
  data(){
    return {
      name: 'TBD'
    }
  },
  created() {
    setTimeout(() =>
    this.name = 'Victor'
    , 1000)    
  },
  mounted() {
    setTimeout(() =>
    this.name = 'Victor Luck'
    , 2000)  
  }
}
</script>

