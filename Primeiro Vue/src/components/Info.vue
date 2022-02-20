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
        <div>
            <button @click="showMail">{{ texto_botao }}</button>
        </div>
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
            meu_link : 'https://google.com',
            texto_botao : 'Mostrar e-mail'
        }
    },
    components: {
        Picture
    },
    methods: {
        showMail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.texto_botao = "Mostrar e-mail"
            }else {
                this.texto_botao = "Ocultar e-mail"
            }
        }
    }
}
</script>