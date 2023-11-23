<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      text: "Yato Front-end developer",
      animatedText: "",
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      let i = 0;
      const speed = 50;

      const type = () => {
        if (i < this.text.length) {
          this.animatedText += this.text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };
      type();
    },
  },
});
</script>
<template>
    <div class="home">
        <div class="home_text">
          <div class="home_text-centr">
            <h1 id="animated-text">{{ animatedText }}</h1>
            <p>Я начинающий frontend разработчик, стремящийся к тому, чтобы воплощать свои идеи 
                в интерактивных и креативных веб-проектах.
            </p>
          </div>
        </div>
        <div class="home_image"><img src="../assets/img/humans-finn.gif" alt="Finn"></div>
    </div>
</template>

<style>
.home {
    display: flex;
    justify-content: space-between;
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
.home_text {
    flex: 1;
    white-space: pre-wrap;
    display: flex;
    align-items: center;
}
.home_text-centr{
  text-align: center;
}
.home_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#animated-text::after {
  content: "|";
  animation: blink-caret 0.7s infinite;
}
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
@media screen and (max-width: 625px) {
  .home {
    justify-content: unset;
    flex-direction: column;
  }
}
</style>