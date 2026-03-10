<script lang="ts">
	import About from "$lib/components/About.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
	import Splash from "$lib/components/Splash.svelte";
	import type { Slide } from "$lib/types/Slide";
    import { onMount } from 'svelte';

    const slides : Slide[] = [
        {image: "/imgs/IMG_0975.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1011.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1055.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1165.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1314.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1423.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1437.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1462.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1506.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1771.jpg", alt:"Furze"}
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
    />
</main>

<About/>
{/if}