<template>
    <div class="contact">
        <div class="contact_band"></div>
        <div class="contact_link">
            <a href="https://github.com/yato90">
                <img src="../assets/img/github.png" width="36" alt="GitHub" data-nuxt-img="">
            </a>
            <a href="https://t.me/Yaboku10">
                <img src="../assets/img/telegram.png" width="36" alt="telegram" data-nuxt-img="">
            </a>
        </div>
        <div class="contact_band"></div>
    </div>
</template>
<style scoped>
.contact{
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-right: 2%;
}
.contact_band{
    border: 0 solid #e5e7eb;
    border-width: 1px;
    height: 100%;
    border-radius: 10px;
}
.contact_link{
    display: flex;
    flex-direction: column;
}
.contact a{
    margin-bottom: 10%;
}
.contact a:hover{
    transform: scale(1.2);
}
@media screen and (max-width: 625px) {
    .contact{
        flex-direction: row;
        margin-right: none;
        margin: 10% 1%;
    }
    .contact_band{
        height: auto;
        width: 100%;
    }
    .contact_link{
        flex-direction: row;
        margin: 0 2%;
    }
}
</style>