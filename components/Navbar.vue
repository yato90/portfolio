<template>
    <div class="nav">
        <div class="nav_links">
            <NuxtLink v-bind:class="{ 'active-link': $route.path === '/' }" to="/"><img src="../assets/img/home.png" alt="Home"></NuxtLink>
            <NuxtLink v-bind:class="{ 'active-link': $route.path === '/about' }" to="/about"><img src="../assets/img/about.png" alt="About"></NuxtLink>
            <NuxtLink v-bind:class="{ 'active-link': $route.path === '/project' }" to="/project"><img src="../assets/img/project.png" alt="Project"></NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.active-link {
    border-radius:5px;
    background-color:gray;
}
.nav{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
    border-radius: 20px;
    background-color: hsla(0,0%,6%,.6);
    backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.nav_links{
    display: flex;
    flex-direction: column;
    width: 40%;
}
.nav a{
    margin: 30% 0;
}
.nav a:hover{
    transform: scale(1.2);
}
.nav img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
@media screen and (max-width: 625px) {
    .nav{
        margin-left: none;
        margin: 10% 8%;
    }
    .nav_links{
        flex-direction: row;
    }
    .nav a{
        margin: 10% 8%;
    }
}
</style>