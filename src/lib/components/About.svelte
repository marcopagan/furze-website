<script lang="ts">
  let isOpen = $state(false);
</script>

<aside>
    <nav>
        <h1>Furze</h1>
        <button onclick={() => isOpen = !isOpen}>+</button>
    </nav>
    {#if isOpen}
        <div>
            Our artistic residency exists to cultivate a vibrant environment where creativity, experimentation, and thoughtful dialogue can flourish. We believe that artists play a vital role in shaping cultural conversations and expanding the ways communities see, feel, and understand the world. Through dedicated time, shared resources, and meaningful exchange, the residency supports artists at pivotal moments in their creative journeys.<br>
            At the heart of our mission is a commitment to exploration without fear of failure. Residents are encouraged to take risks, pursue new directions, and challenge established boundaries within and across disciplines. We aim to foster a space where diverse perspectives are welcomed and where collaboration emerges organically through shared curiosity and mutual respect.<br>
            The residency prioritizes accessibility, inclusion, and sustainability in both artistic practice and community engagement. By bringing together artists from varied backgrounds, experiences, and geographies, we seek to nurture an environment that is dynamic, reflective, and responsive to the evolving cultural landscape. Residents are invited to engage with local communities through open studios, workshops, and public conversations that encourage dialogue and deepen collective understanding.
        </div>
    {/if}
</aside>




<style>
    aside{
        position: absolute; right: 0; top: 0;
        background-color: var(--bg);
    }
    nav{
        display: flex;
        min-width: 400px;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    button{
        background-color: var(--acc);
        border: none;
        border-radius: 3rem;
        width: 2rem;
        height: 2rem;
    }
</style>