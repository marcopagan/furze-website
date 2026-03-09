<script lang="ts">
	import About from "$lib/components/About.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
	import Splash from "$lib/components/Splash.svelte";
	import type { Slide } from "$lib/types/Slide";
    import { onMount } from 'svelte';

    const slides : Slide[] = [
        {image: "/imgs/IMG_0975.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1011.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1055.jpg", alt:"Furze"}
    ];
    let visible = false
    onMount(() => {

        const splashTimer = setTimeout(() => {
            visible = true;
        }, 2000);

    return () => {
      clearTimeout(splashTimer);
    };
  });
</script>

<Splash/>
{#if visible}
<main>
    <Carousel
        {slides}
        autoplay
        speed={2000}
    />
</main>

<About/>
{/if}