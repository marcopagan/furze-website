<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let visible = false;
  let showTree = false;

  onMount(() => {
    visible = true;

    const logoTimer = setTimeout(() => {
      showTree = true;
    }, 1000);

    const hideTimer = setTimeout(() => {
      visible = false;
    }, 4500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(hideTimer);
    };
  });
</script>

{#if visible}
  <div class="splash-container" out:fade={{ duration: 400 }}>
    {#if showTree}
        <img src="FURZE_logo-01.svg" alt="Tree of the logo" in:fade={{ duration: 200 }}>
    {/if}
    <img src="FURZE_logo-02.svg" alt="Dots of the logo">
    
    <!--<svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="blue" stroke="black" stroke-width="2" style="view-transition-name: dot-0"/>
    </svg>-->
  </div>
{/if}

<style>
  .splash-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    width: 100dvw;
    height: 100vh;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
    z-index: 9999;
  }
  img{
    width: auto;
    height: 60%;
    position: absolute;
  }

  @media (max-width: 576px) {
    img{height: 50%;}
  }
</style>