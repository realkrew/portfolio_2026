<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Main from "@/components/Main.vue";
</script>

<template>
  <v-app id="app">
    <v-main>
      <div class="content-wrapper px-2">
        <div class="header">
          <p class="icon">💻</p>
          <h1 class="d-flex flex-column flex-sm-row align-center justify-center ga-2 gp-sm-0 mt-2">
            <span>사이트를</span>
            <span>새롭게 준비중입니다</span>
          </h1>
          <div class="d-flex flex-column flex-sm-row align-center justify-center ga-2 gp-sm-0 mt-4">
            <p>그리고 저는 현재</p>
            <p><span>프로젝트 투입 중</span>이에요</p>
          </div>
        </div>
        <div class="rive-container"></div>
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
/* 1. 폰트 정의 (주석 수정) */
@font-face {
  font-family: 'memoment';
  src: url('./fonts/memomentKkukkkuk.ttf') format('truetype');
}

* {
  word-break: keep-all;
  line-height: 1.2;
}

.icon {
  font-size: 80px;
}

/* 2. 제목 스타일 */
h1,
p {
  text-align: center;
  font-family: 'memoment', sans-serif; /* 폰트가 안 나올 경우를 대비해 sans-serif 추가 */
}

h1 {
  font-size: 50px;
}

p {
  font-size: 32px;

  span {
    color: rgb(var(--v-theme-primary));
    background-color: rgb(var(--v-theme-on-primary));
    display: inline-block;
    border-radius: 8px;
    padding: 0 8px;
  }
}



/* 3. 중앙 정렬 레이아웃 */
.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh; /* 화면 꽉 차게 중앙 정렬 */
}

.header {
  width: 100%;
  position: inherit;
  z-index: 2;
}

.rive-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
