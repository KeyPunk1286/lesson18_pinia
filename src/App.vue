<template>
    <div class="container">
        <nav>
            <router-link to="/">головна</router-link> | <router-link to="/friends">друзі</router-link> |
            <router-link to="/gifts">подарунки</router-link> | <router-link to="/assignment">призначення</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
@import '@/assets/scss';
.container {
    max-width: 1200px;
    margin: 0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}
// #app {
// }

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
