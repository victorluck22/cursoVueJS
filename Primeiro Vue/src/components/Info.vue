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
        <p>Para acessar meu portifílio, <a v-bind:href="meu_link" taget="_blank">clique aqui</a></p>
        <Picture />

    </div>
</template>

<script>
import Picture from "./Picture.vue";
export default {
    name:'Info',
    data() {
        return {
            esta_trabalhando : false,
            mostrar_email: false,
            email: 'victor.luck',
            meu_link : 'https://google.com'
        }
    },
    components: {
        Picture
    }
}
</script>