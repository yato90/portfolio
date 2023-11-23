<script setup lang="ts">
import { ref } from 'vue';
import yam_music from "../assets/img/project/yam_music.png";
import color_generator from "../assets/img/project/color_generator.png";
import landing_example from "../assets/img/project/landing_example.png";
import uber_example from "../assets/img/project/uber_example.png";

const projects = ref([
    { id: 1, link:'yam-music', name: 'Yam_music', img: yam_music, description: "Музыкальный сервис, разработанный с использованием фреймворка Vue.js"},
    { id: 2, link:'color-generator', name: 'Color_generator', img: color_generator, description: "Простой цветовой генератор"},
    { id: 3, link:'landing_example', name: 'Landing_example', img: landing_example, description: "landing example Nuxt 3"},
    { id: 4, link:'Uber-example', name: 'Uber', img: uber_example, description: "Верстка uber с использованием sass"},
]);
const getImgPath = (img: string) => {
  return img;
};
</script>
<template>
    <div class="project container">
        <h1>Мои проекты</h1>
        <div class="project_example">
            <div class="project_block" v-for="work in projects">
                <a :href="`https://github.com/yato90/${work.link}`">
                    <div class="background"
                    :key="work.id"
                    :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${getImgPath(work.img)})` }"
                    ></div>
                    <div class="project_text">
                        <h2>{{ work.name }}</h2>
                        <p>{{ work.description }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style>
.project {
    overflow: auto;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    color:white;
    border-radius: 20px;
    background-color: hsla(0,0%,6%,.6);
    backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.project  h1{
    margin-top: 10px;
    margin-bottom: 10px;
}
.project_example{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.project_block{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    cursor: pointer;
    transition-duration: .2s;
    transition-property: all;
    border-radius:10px;
}
.project_block:hover{
    border:solid;
    border-width: 1px;
    transform: scale(1.04);
}
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-clip: padding-box;
    background-position: center;
    background-size: cover;
    filter: brightness(50%);
}
.project_text {
    font-size: 30px;
    color:white;
    font-family:'Kreadon', sans-serif;

    text-align: center;
    align-items: center;
    position: relative;
}
@media screen and (max-width: 430px){
  .project {
    overflow: unset;
  }
}
@media screen and (max-width: 345px){
  .project_block {
    width: 240px;
  }
}
</style>