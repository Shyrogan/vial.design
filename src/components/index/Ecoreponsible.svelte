<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly, fade } from 'svelte/transition'

    let isInView: boolean;
</script>


<div
        id="technologies"
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
        <div class="hero-content lg:flex-row-reverse flex-col">
            <div class="w-2/3 lg:text-left text-center">
                <h1 transition:fade={{ duration: 500 }} class="lg:text-5xl text-3xl font-bold">
                    Engagé pour l'<span class="text-primary">environnement</span>
                </h1>
                <p  transition:fly={{ duration: 500, x: -10, delay: 200 }} class="lg:text-2xl text-lg font-medium lg:my-3">
                    Puisque les technologies d'aujourd'hui nous permettent de construire demain,
                    <span class="text-secondary">vos sites webs</span> sont hebergés sur des serveurs qui sont alimentés uniquement
                    par des <span class="text-green-500">énergies renouvelables</span>.
                </p>
                <p transition:fly={{ duration: 500, x: -10, delay: 400 }} class="lg:text-2xl text-lg font-medium lg:my-3">
                    Ainsi vous aussi êtes acteur de la luttre contre le réchauffement climatique.
                </p>
            </div>
            <img transition:fly={{ duration: 500, x: -20 }} class="w-4/12 md:mx-10" src="/img/index/nature.svg" alt="Apprentissage"/>
        </div>
    {/if}
</div>