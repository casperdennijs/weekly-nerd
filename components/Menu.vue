<template>
    <nav class="main-nav">
      <NuxtLink to="/" class="nav-link" tabindex="0"><i class="fa-solid fa-house"></i></NuxtLink>
      <NuxtLink to="/about" class="nav-link" tabindex="0"><i class="fa-solid fa-circle-user"></i></NuxtLink>
      <NuxtLink to="/blogs" class="nav-link" tabindex="0"><i class="fa-solid fa-newspaper"></i></NuxtLink>
      <NuxtLink to="/contact" class="nav-link" tabindex="0"><i class="fa-solid fa-address-book"></i></NuxtLink>
    </nav>
</template>

<style scoped>
    nav {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 1rem;
        padding: .5rem 1.5rem;
        background: rgba(125, 125, 125, 0.25);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(125, 125, 125, 0.3);
        display: flex;
        box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
        transition: 200ms;
    }

    nav:hover {
        transform: translateX(-50%) scale(1.1);
        box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.75);
    }

    a {
        color: #fff;
        padding: .5rem;
        border-radius: 10px;
        transition: background-color 200ms;
    }

    a:hover {
        background-color: rgba(255,255,255,.1);
    }

    i {
        font-size: 25px;
    }
</style>