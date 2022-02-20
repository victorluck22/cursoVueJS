<template>
    <div>
        <h2>Nome da pessoa {{ name }}</h2>
        <Info />
        <Form/>

    </div>
</template>
<script>
import Info from './Info.vue';
import Form from './Form.vue';
export default {
    name: "Pessoa",
    components: {
        Info,
        Form
    },
    data() {
        return {
            name: 'Victor Hugo'
        }
    }
}
</script>