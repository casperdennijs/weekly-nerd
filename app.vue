<template>
  <NuxtPage />
  <Menu />
</template>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');

  *, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: unset;
    border: 2px dashed yellow !important;
    border-radius: 10px;
    transition: unset;
  }

  html, body, #__nuxt, main {
    height: 100%;
  }

  body {
    background-color: #101010;
  }

  main {
    font-family: "Roboto", sans-serif;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 200ms;
  }
  
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(4px);
  }
</style>
