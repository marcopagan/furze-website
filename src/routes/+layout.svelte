<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>Furze Arts</title>
	<meta charset="UTF-8">
  	<meta name="description" content="Furze Arts was founded in 2025 as an artist-led platform for residencies, site-specific exhibitions, and research-based workshops. It aims to create frameworks where art becomes a tool for ecological awareness and collective participation.">
  	<meta name="keywords" content="furze, exhibitions, workshops, community, residencies, ecology, collective">
  	<meta name="author" content="Furze Arts">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://furzedomain.ext" />
	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Furze Arts">
	<meta property="og:description" content="Furze Arts was founded in 2025 as an artist-led platform for residencies, site-specific exhibitions, and research-based workshops. It aims to create frameworks where art becomes a tool for ecological awareness and collective participation.">
	<meta property="og:url" content="https://furzedomain.ext">
	<meta property="og:site_name" content="Furze Arts">
	<meta property="og:image" content="/pres.jpg">
	<meta name="apple-mobile-web-app-title" content="Furze Arts">
	<meta name="application-name" content="Furze Arts">
	<meta name="msapplication-TileColor" content="#FAF0E6">
</svelte:head>

{@render children()}
