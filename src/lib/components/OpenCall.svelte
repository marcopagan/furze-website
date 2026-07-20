<script lang="ts">
    let isOpen = $state(false);
    import Marquee from "svelte-fast-marquee";

    function toggleOpen(){
        isOpen = !isOpen;
    }
</script>


<div class={isOpen ? "nav-opencall nav-opencall-open" : "nav-opencall"}>
    <button class="marquee-wrapper" type="button" title={isOpen ? "Click to collapse" : "Click to expand"} onclick={() => toggleOpen()}>
    <Marquee speed={40}>
        <p>Open Call 2026 . Propagating otherwise . Open Call 2026 . Propagating otherwise . Open Call 2026 . Propagating otherwise .</p>
    </Marquee>
</button>

    <div class="text-opencall">
        <p>Furze Arts + Culture Night</p>
        <p>
            Culture Night is a nation-wide event promoted by the Arts Council; it aims to showcase and reflect on the wide variety of cultural production happening in Ireland today, and it is a way to come together and celebrate the richness of the island’s art scene.
            <br><br>
            Gardening activity is five kinds, namely, sowing, planting, fixing, placing, maintaining. In so far as gardening is an Art, all these may be taken under the one head, composing.[1]
        </p>

        <p>
            To enter a garden is to access a space of creation, yet one where the human is just a comma in the evolution of things. We can tend a garden, but what happens in that dense space of life goes beyond our labour, and sometimes our understanding. Similarly, when we enter a process of artistic creation we follow a path which turns and forks in different directions we are only partially aware of at the beginning. These changes are more often than not the result of interactions, conversations, contamination, appropriation, and exchange. All means of nourishing, tending, pushing an idea into being, into synthesis so that it may cross-contaminate with the world. 
        </p>

        <p>
            With this open call, we want to reach artists who get their hands dirty with gardens (both real and speculative) and their propagations, dealing in life, death and decay. We are interested in works and practices which take the garden –  in all its possible arrangements – as an entry point for the stories they want to tell. Think of orchards, farms, kitchen gardens, botanical gardens, secret gardens, forgotten fields, archival arcadia, and digital edens; overall, the garden as a lens through which to observe a process, investigate a systemic infrastructure, or question an established set of rules.
        </p>

        <p>
            Think of:
            <br><br>
            How does your practice reflect the cyclical time of a garden?
            Do you collaborate with other-than-human entities? 
            What processes does your work activate: how do they grow, give fruits, rot and nourish others? How do they flourish without you?
        </p>

        <p>
            Guidelines
            <br><br>
            We are looking for existing work from artists based in Ireland from practices that work with visual art, photography and moving image, to sound art, collective practices and performance. The piece will be exhibited or activated alongside other artworks, a workshop and a series of talks as part of Furze Culture Night 2026.
            <br><br>
            The exhibition will utilise both indoor and outdoor spaces over the two days of the event; the arrangement will be discussed site-specifically with the curators. The exhibition will take place during Culture Night between Friday 18th and Saturday 19th September 2026 at Soearth Projects in Kildare. The artist fee will depend on the scale of the proposal. The deadline to present the proposal is Wednesday 12th August; the required material comprises an artist proposal, explanation of display or activation, and a maximum of 6 images accompanied by an image list supporting the proposal.
        </p>

        <p>
            Submit your work through this link: <a rel="noopener" target="_blank" href="https://tally.so/r/Bz5RLY">Apply</a>.
            <br>
            If you have any questions don’t hesitate to reach out at <a href="mailto:info@furzearts.eu">info@furzearts.eu</a>. 
            <br><br>
            <small>[1] Finlay ‘More detached Sentences on Gardening’. See also Abrioux, Ian Hamilton Finaly, 40.</small>
        </p>

    </div>
</div>


<style>
    .nav-opencall{
        position: fixed;
        top: 0;
        right: 0;
        height: 64px;
        background-color: var(--acc);
        width: calc(64vw - 32px);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: height .3s;
        & .marquee-wrapper{
            background-color: var(--acc);
            font-family: var(--mainFont);
            border: 0;
            cursor: pointer;
            height: 64px;
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
            & p{
                padding-top: .5rem;
                font-size: 2.8rem;
                font-style: italic;
                text-transform: uppercase;
                letter-spacing: -8%;
            }

        }
        /*& .marquee-wrapper:hover{
            text-decoration: underline var(--bg);
            text-decoration-thickness: 2px;
        }*/
        & .text-opencall{
            padding: 2rem 4rem;
            font-size: 1.5rem;
            font-style: italic;
            line-height: 1.2;
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            & p{padding-bottom: 1.75rem}
            & a{color: var(--fg);}
            & small{font-size: 1rem;}
        }
    }

    .nav-opencall:hover{
        height: 40vh;
    }

    .nav-opencall-open{
        height: 100vh !important;
    }



    @media (max-width: 576px) {
        .nav-opencall{
            top: 56px;
            left: 0;
            width: 100vw;
            height: 38px;
            & .marquee-wrapper{
                height: 38px;
                & p{
                    font-size: 1.25rem;
                }
            }
            & .text-opencall{
                padding: .5rem 1rem;
                padding-bottom: 5rem;
                font-size: 1.25rem;
                & p{padding-bottom: 1.5rem}
                & small{font-size: .75rem;}
            }
        }
        .nav-opencall:hover{
            height: 38px;
        }
    }
</style>