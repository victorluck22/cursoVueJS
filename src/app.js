const MyNameApp = {
    data() {
        return {
            name : 'Victor',
            age  : 32
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")