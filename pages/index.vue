<template>
  <main>
    <h1>Casper den Nijs</h1>
    <p>Front-end Developer @ <a href="https://bluedesk.nl" target="_blank" tabindex="0">Bluedesk <i class="fa-solid fa-up-right-from-square"></i></a></p>
  </main>
</template>

<style scoped>
  main {
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
  }

  h1 {
    color: #fff;
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 200;
  }

  a {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid #fff;
  }

  i {
    font-size: 12px;
    vertical-align: middle;
  }
</style>