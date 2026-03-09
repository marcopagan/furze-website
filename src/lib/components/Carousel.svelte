<script lang="ts">
	import type { Slide } from '$lib/types/Slide';

	interface Props {
		slides: Slide[];
		autoplay?: boolean;
		speed?: number;
	}

	let { 
		slides = [], 
		autoplay = false, 
		speed = 3000, 
	}: Props = $props();

	let currentIndex = $state<number>(0);
	let container = $state<HTMLDivElement | undefined>();
	let interval: ReturnType<typeof setInterval> | undefined;

	function scrollTo(index: number): void {
		if (!container) return;
		
		const targetIndex = (index + slides.length) % slides.length;
		const slideWidth = container.offsetWidth;
		
		container.scrollTo({
			left: slideWidth * targetIndex,
			behavior: 'smooth'
		});
		
		currentIndex = targetIndex;
	}

	const next = () => scrollTo(currentIndex + 1);
	const prev = () => scrollTo(currentIndex - 1);

	$effect(() => {
		if (autoplay) {
			interval = setInterval(next, speed);
			return () => clearInterval(interval);
		}
	});

	function handleScroll(event: UIEvent): void {
		const target = event.currentTarget as HTMLDivElement;
		const index = Math.round(target.scrollLeft / target.offsetWidth);
		if (index !== currentIndex) currentIndex = index;
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
				<img src={slide.image} alt={slide.alt}/>
			</div>
		{/each}
	</div>

	<button 
        class="nav-button prev"
		onclick={prev}
		aria-label="Previous slide"
	>
		←
	</button>
	<button 
        class="nav-button next"
		onclick={next}
		aria-label="Next slide"
	>
		→
	</button>

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
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE/Edge */
		scroll-behavior: smooth;
		max-height: calc(100vh);
		max-height: calc(100dvh);
	}

	.carousel-container::-webkit-scrollbar {
		display: none; /* Chrome/Safari */
	}

	.carousel-slide {
		/*flex: 0 0 100%;*/
		width: 100%;
		scroll-snap-align: start;
	}

	/* Navigation Buttons */
	.nav-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(255, 255, 255, 0.8);
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: opacity 0.3s, background 0.2s;
		opacity: 0; /* Hidden by default */
		z-index: 10;
	}

	.carousel-wrapper:hover .nav-button {
		opacity: 1; /* Show on hover */
	}

	.nav-button:hover {
		background: var(--bg);
	}

	.prev { left: 1rem; }
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
		background: #FAF0E6AA;
		cursor: pointer;
		transition: all 0.3s ease;
		padding: 0;
	}

	.dot.active {
		background: var(--bg);
		transform: scale(1.3);
	}
</style>