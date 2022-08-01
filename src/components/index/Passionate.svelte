<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly } from 'svelte/transition'

    let isInView: boolean;
</script>


<div
        id="about-me"
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
        <div class="hero-content flex-col-reverse lg:flex-row-reverse">
            <div class="w-2/3 lg:text-left text-center">
                <h1 transition:fly={{ duration: 500, x: 10 }} class="lg:text-5xl text-3xl font-bold">
                    Passioné <span class="text-accent">actuellement</span>, professionnel <span class="text-primary">prochainement</span>.
                </h1>
                <p transition:fly={{ duration: 500, x: 10, delay: 200 }} class="lg:text-xl text-lg font-medium lg:mt-6">
                    Bien qu'en train de faire des études en informatique, cela fais des années que je code.
                </p>
                <p transition:fly={{ duration: 500, x: 10, delay: 400 }} class="lg:text-xl text-lg font-medium mt-2">
                    Actuellement en 3ème année d'informatique à la <a href="https://umontpellier.fr" class="text-info">Faculté des sciences</a>, je souhaite poursuivre mes études jusqu'en master et travailler dans l'imagerie.
                </p>
            </div>
            <img transition:fly={{ duration: 500, x: -20 }} class="w-4/12 md:mx-10" src="/img/index/learning.svg" alt="Apprentissage"/>
        </div>
    {/if}
</div>