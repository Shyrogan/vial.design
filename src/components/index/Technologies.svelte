<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly, fade } from 'svelte/transition'

    let isInView: boolean;

    const technologies = [
        { alt: "Javascript", icon: "devicon-javascript-plain" },
        { alt: "Typescript", icon: "devicon-typescript-plain" },
        { alt: "HTML 5", icon: "devicon-html5-plain" },
        { alt: "CSS 3", icon: "devicon-css3-plain" },
        { alt: "Svelte", icon: "devicon-svelte-plain" },
        { alt: "Tailwind", icon: "devicon-tailwindcss-plain" },
    ]
</script>


<div
        use:inview={{ rootMargin: '-50%' }}
        on:enter={(event) => {
          const { inView, entry, scrollDirection, observer, node} = event.detail;
          isInView = inView;
        }}
        on:leave={(event) => {
          const { inView, entry, scrollDirection, observer, node} = event.detail;
          isInView = inView;
        }}
        class="hero min-h-screen"
>

    {#if (isInView)}
        <div class="hero-content lg:flex-row flex-col">
            <div class="lg:text-left text-center lg:w-1/2 w-2/3 flex-col">
                <h1 transition:fade={{ duration: 500 }} class="lg:text-5xl text-3xl font-bold">
                    Des sites à la pointe de la <span class="text-primary">technologie</span>
                    et <span class="text-accent">sécurisés</span>
                </h1>
                <p  transition:fly={{ duration: 500, x: -10, delay: 200 }} class="lg:text-2xl text-lg font-medium lg:my-3">
                    Toutes les technologies que j'utilise sont très récentes. Cela permet aux sites
                    que je conçois d'être rapide, fiable et moderne.
                </p>
            </div>
            <div class="flex flex-row flex-wrap justify-center align-middle lg:w-1/3 w-1/2">
                {#each technologies as { alt, icon }, i}
                    <div class="tooltip tooltip-primary" data-tip={alt}>
                        <i {alt} class="lg:text-7xl text-5xl {icon}" transition:fly={{ duration: 500, y: 10, delay: i * 100 + 200 }}></i>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>