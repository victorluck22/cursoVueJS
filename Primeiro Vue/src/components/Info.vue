<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias para back-end:</p>
        <ul>
            <li v-for="(technology, index) in backend_tech" v-bind:key="index">{{ technology }}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias em front-end</p>
        <ul>
            <li v-for="tech in frontend_tech" v-bind:key="language">
                {{ tech.language }}
            </li>
        </ul>
        <div>
            <button @click="showMail">{{ texto_botao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p class="teste">Para acessar meu portifílio, <a  v-bind:href="meu_link" taget="_blank">clique aqui</a></p>
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
            texto_botao : 'Mostrar e-mail',
            backend_tech: ["Javascript", "PHP", "Phyton", "VBA", "C#"],
            frontend_tech: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'Vue Js'}
            ]
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

<style>
    .paragrafo-pai {
        color: red;
    }
</style>