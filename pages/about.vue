<script setup lant="ts">
import { ref } from 'vue';

const selectedStack = ref('FrontendStack');

const showFrontendStack = () => {
  selectedStack.value = 'FrontendStack';
};

const showToolsStack = () => {
  selectedStack.value = 'ToolsStack';
};
</script>
<template>
    <div class="about container">
        <div class="about_text">
          <h1>Обо мне</h1>
          <p>Я - front-end разработчик, стремящийся к созданию веб-сайтов, которые не только функциональны, 
            но и приносят удовольствие пользователю.<br>
            <br>
            Еще в школе я увлекся веб-разработкой - желания понять,
            как создаются те волшебные страницы, которые мы видим в интернете каждый день. 
            Этот путь привел меня к изучению HTML, CSS и JavaScript,
            создавая уникальные и красочные веб-проекты.
          </p>
          <h2>Технический стек</h2>
          <section class="about_text_stack">
            <div class="stack_left">
              <button @click="showFrontendStack" class="stack_button" :class="{ 'selected': selectedStack === 'FrontendStack' }" >Frontend</button>
              <button @click="showToolsStack" class="stack_button" :class="{ 'selected': selectedStack === 'ToolsStack' }">Tools</button>
            </div>
            <div class="stack_right">
              <FrontendStack v-if="selectedStack === 'FrontendStack'" />
              <ToolsStack v-if="selectedStack === 'ToolsStack'" />
            </div>
          </section>
        </div>
        <div class="about_image"><img src="../assets/img/humans-finn.gif" alt="Finn"></div>
    </div>
</template>
<style scoped>
.about {
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
.about_text {
    flex: 1;
    white-space: pre-wrap;
}
.about_text p{
    line-height: 2.5;
}
.about_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.about_text_stack{
  display: flex;
  flex-direction: row;
  padding-bottom: 5%;
}
.stack_left{
  display: flex;
  flex-direction: column;
}
.stack_button {
  text-align: start;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-color: #8aadf4;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  cursor: pointer;
  font-size: large;
  color:white;
  background-color: transparent;
}
.selected{
  border-color: #f10b0b;
}
.stack_right{
  padding: 0 2%;
}
@media screen and (max-width: 768px) {
  .about {
    justify-content: unset;
    flex-direction: column;
  }
  .about_text_stack{
    flex-direction: column;
  }
  .stack_left{
    flex-direction: row;
    margin-bottom: 10px;
  }
  .stack_button{
    border-left: none;
  }
  .selected{
    background-color: #8aadf4;
    border-radius:10px;
  }
}
@media screen and (max-width: 430px){
  .about {
    overflow: unset;
  }
}
</style>