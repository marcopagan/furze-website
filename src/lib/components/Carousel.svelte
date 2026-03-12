<script lang="ts">
    import type { Slide } from '$lib/types/Slide';
    import { base } from '$app/paths';

    interface Props {
        slides: Slide[];
        autoplay?: boolean;
        speed?: number;
    }

    let { 
        slides = [], 
        autoplay = true, 
        speed = 8000, 
    }: Props = $props();

    let currentIndex = $state<number>(0);
    let container = $state<HTMLDivElement | undefined>();
    let interval: ReturnType<typeof setInterval> | undefined;

    // NUOVA LOGICA: Troviamo l'elemento figlio e scorriamo verso di esso
    function scrollTo(index: number): void {
        if (!container) return;
        
        const targetIndex = (index + slides.length) % slides.length;
        const children = container.children;
        const targetElement = children[targetIndex] as HTMLElement;

        if (targetElement) {
            container.scrollTo({
                left: targetElement.offsetLeft - (container.offsetWidth / 2) + (targetElement.offsetWidth / 2),
                behavior: 'smooth'
            });
            currentIndex = targetIndex;
        }
    }

    const next = () => scrollTo(currentIndex + 1);
    const prev = () => scrollTo(currentIndex - 1);

    $effect(() => {
        if (autoplay) {
            interval = setInterval(next, speed);
            return () => clearInterval(interval);
        }
    });

    // Aggiorniamo l'indice basandoci su quale elemento è più vicino al centro/inizio
    function handleScroll(event: UIEvent): void {
        const target = event.currentTarget as HTMLDivElement;
        const children = Array.from(target.children) as HTMLElement[];
        
        // Troviamo l'indice dell'elemento più visibile
        const scrollLeft = target.scrollLeft + (target.offsetWidth / 2);
        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, i) => {
            const childCenter = child.offsetLeft + (child.offsetWidth / 2);
            const distance = Math.abs(scrollLeft - childCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        });

        if (closestIndex !== currentIndex) currentIndex = closestIndex;
    }
</script>

<div class="carousel-wrapper">
    <div
        bind:this={container}
        onscroll={handleScroll}
        class="carousel-container"
    >
        {#each slides as slide (slide.image)}
            <div class="carousel-slide">
                <img src={`${base}${slide.image}`} alt={slide.alt}/>
            </div>
        {/each}
    </div>

    <button class="nav-button prev" onclick={prev}>←</button>
    <button class="nav-button next" onclick={next}>→</button>

    <span class="nav-text">{currentIndex+1}/{slides.length}</span>

    <div class="dots-container">
        {#each slides as _, i (_.image)}
            <button
                onclick={() => scrollTo(i)}
                class="dot"
                class:active={currentIndex === i}
				aria-label="Go to slide {i + 1}"
            ></button>
        {/each}
    </div>
</div>

<style>
    .carousel-wrapper {
        position: relative;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }

    .carousel-container {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        -ms-overflow-style: none;
        scroll-behavior: smooth;
        align-items: center;
    }

    .carousel-container::-webkit-scrollbar {
        display: none;
    }

    .carousel-slide {
        flex: 0 0 auto;
        height: 100%;
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
    }

    .carousel-slide img {
        height: 100%;
        width: auto;
        display: block;
    }

	/* Navigation Buttons */
	.nav-button {
		position: absolute;
		bottom: 1rem;
		background: var(--bg);
		border: none;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s, background 0.2s;
		opacity: 0;
		z-index: 10;
	}

	.carousel-wrapper:hover .nav-button {
		opacity: 1;
	}

	.nav-button:hover {
		background: var(--acc);
	}

	.nav-text{
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		color: var(--bg);
	}

	.prev { right: 3.5rem; }
	.next { right: 1rem; }

	/* Dots */
	.dots-container {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: none;
		background: var(--bg);
		cursor: pointer;
		transition: all 0.3s ease;
		padding: 0;
	}

	.dot.active {
		background: var(--acc);
		transform: scale(1.25);
	}
</style>