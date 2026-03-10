<script lang="ts">
  let isOpen = $state(false);
  import { fade, slide } from 'svelte/transition';
</script>

<aside class={isOpen ? 'open' : ''}>
    {#if isOpen}
    <div class="col-logo" in:slide={{delay: 400}}>
        <img src="/FURZE_logo-08.svg" alt="Furze logo" width="144" in:fade={{delay: 250}}>
    </div>
    {/if}

    <div>
        <nav>
            <h1>Furze</h1>
            <button onclick={() => isOpen = !isOpen} class={isOpen ? 'open-btn' : ''}>+</button>
        </nav>

        {#if isOpen}
        <div class="content" in:slide={{delay: 100}}>
            <div class="col-text" in:fade={{delay: 250}}>
                <div>
                    <p>Furze Arts was founded in 2025 as an artist-led platform for residencies, site-specific exhibitions, and research-based workshops. It aims to create frameworks where art becomes a tool for ecological awareness and collective participation. </p>
                    <p>Furze Arts is based on Hartwell farm in Kill, Kildare and works alongside Soearth Projects, an established space for creative arts therapies and environmental advocacy for the local community. Using the facilities and infrastructure of Soearth Projects, principally the Soearth Studio, Furze Arts aims to create space for encounters between the local community and an international cohort of artists.</p>
                </div>
                <p><strong>
                    Info@furzearts.eu<br><br>
                    Hartwell Upper, Naas, Co. Kildare,<br>
                    W91 YF6H, Ireland
                </strong></p>
            </div>
            <div class="col" in:fade={{delay: 250}}>
                <figure>
                    <img src="/imgs/furze-archive.jpeg" alt="Hartwell (1960)">
                    <figcaption>Hartwell, Circa 1960</figcaption>
                </figure>
            </div>
        </div>
        {/if}
    </div>
</aside>




<style>
    @property --asideWidth {
        syntax: "<length> | <percentage>";
        inherits: true;
        initial-value: 400px;
    }
    @keyframes expand {
        to {
            --asideWidth: 100%;
        }
    }
    aside{
        --asideWidth: 400px;
        position: absolute; right: 0; top: 0;
        background-color: var(--bg);
        max-height: calc(100vh);
        max-height: calc(100dvh);
    }
    .open{
        display: flex;
        gap: 2rem;
        height: 100%;
        max-width: 100%;
        transition: width .3s;
    }

    .col-logo{
        padding: 1rem;
        min-width: 25%;
        & img{
            width: 144px;
            height: auto;
        }
    }

    nav{
        display: flex;
        min-width: 400px;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        h1{line-height: 1}
    }
    button{
        background-color: var(--acc);
        border: none;
        border-radius: 3rem;
        width: 2rem;
        height: 2rem;
        font-size: 1.25rem;
        transition: all .3s;
        cursor: pointer;
    }

    .open-btn{transform: rotate(45deg)}

    .content{
        padding: 1rem;
        padding-top: 4rem;
        display: flex;
        align-items: flex-end;
        height: 80%;

    }

    .col-text{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    img{width: 100%; height: auto;}

    @media (max-width: 900px) {
        .col-logo{display: none;}
    }

    @media (max-width: 576px) {
        aside{width: 50%;}
        .open{width: 100%;}
        nav{
            min-width: calc(100% - 2rem);
            & h1{font-size: 1.5rem;}
        }
        .content{
            padding-top: 0;
            flex-direction: column;
            gap: 3rem;
            height: unset;
        }
        .col-text{justify-content: unset; gap: 2rem; height: unset;}
        img{width: 100%; height: auto;}
    }

    
</style>