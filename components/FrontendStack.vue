<template>
    <div class="frontend_stack">
        <div
        v-for="technology in technologies"
        :key="technology.id"
        class="tech_block"
        @mouseover="rotateBlock(technology.id, true)"
        @mouseleave="rotateBlock(technology.id, false)"
        >
            <div class="icon" :style="{ backgroundImage: `url(${getIconPath(technology.icon)})` }"></div>
            <p>{{ technology.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import html from "../assets/img/stack/html.svg";
import css from "../assets/img/stack/css.svg";
import js from "../assets/img/stack/js.svg";
import vue from "../assets/img/stack/vue.svg";
import nuxt from "../assets/img/stack/nuxt.svg";
import tailwind from "../assets/img/stack/tailwind.svg";
import bootstrap from "../assets/img/stack/bootstrap.svg";

const technologies = ref([
    { id: 1, name: 'HTML', icon: html },
    { id: 2, name: 'CSS', icon: css },
    { id: 3, name: 'JavaScript', icon: js },
    { id: 4, name: 'Vue', icon: vue },
    { id: 5, name: 'Nuxt', icon: nuxt },
    { id: 6, name: 'Tailwind', icon: tailwind },
    { id: 6, name: 'Bootstrap', icon: bootstrap },
]);
const activeBlockId = ref(0);

const rotateBlock = (id: number, isHovered: boolean) => {
  if (isHovered) {
    activeBlockId.value = id;
  } else {
    activeBlockId.value = 0;
  }
};
const getIconPath = (icon: string) => {
  return icon;
};
</script>

<style>
</style>
  
  
  