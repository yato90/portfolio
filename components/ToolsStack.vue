<template>
    <div class="Tool_stack">
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
import vscode from "../assets/img/stack/vscode.svg";
import npm from "../assets/img/stack/npm.svg";

const technologies = ref([
    { id: 1, name: 'Vscode', icon: vscode },
    { id: 2, name: 'npm', icon: npm },
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