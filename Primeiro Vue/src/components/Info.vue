<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>PHP</li>
            <li>Javascript</li>
            <li>VBA</li>
            <li>MYSQL</li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    </div>
</template>

<script>
export default {
    name:'Info',
    data() {
        return {
            esta_trabalhando : false,
            mostrar_email: false,
            email: 'victor.luck'
        }
    }
}
</script>