<script lang="ts">
	import About from "$lib/components/About.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
	import type { Slide } from "$lib/types/Slide";

    const slides : Slide[] = [
        {image: "/imgs/IMG_0975.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1011.jpg", alt:"Furze"},
        {image: "/imgs/IMG_1055.jpg", alt:"Furze"}

    ];

</script>

<main>
    <div>
    <Carousel
        {slides}
        autoplay
        autoplaySpeed={2000}
    />
    </div>
</main>

<About/>
