<template>
    <div>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        background-color: #999;
    }

    li {
        margin-right: 10px;
    }

    a {
        color: #DDD;
        text-decoration: none;
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275)
    }
    a:hover {
        color: turquoise;
    }
</style>