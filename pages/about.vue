<template>
  <main>
    <section>
      <h1>Over mij</h1>
      <p>Hey, ik ben Casper den Nijs</p>
      <p>24 jaar en werkzaam als Front-End Developer bij <a href="https://bluedesk.nl" target="_blank" tabindex="0">Bluedesk <i class="fa-solid fa-up-right-from-square"></i></a>. Ik hou ervan om mooie en gebruiksvriendelijke websites te bouwen die écht werken. Op deze site laat ik je zien waar ik de afgelopen tijd mee bezig ben geweest en waar ik enthousiast van word.</p>
    </section>
    <section>
      <img src="https://media.licdn.com/dms/image/v2/D4E03AQF2x9yZl3lT5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674830052367?e=1756339200&v=beta&t=RupcMVdozkiajEk5KADlLakr9AwCPrXGl0QbQ20D4NM" />
    </section>
  </main>
</template>

<script>

</script>

<style scoped>
  main {
    display: flex;
    overflow: hidden;
  }

  section {
    width: 50%;
    height: 100%;
  }

  section:first-child {
    background-color: #101010;
    color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  section:first-child h1 {
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  section:first-child p {
    font-size: 1.5rem;
  }

  section:last-child img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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