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
        <div class="hero-content flex-col lg:flex-row">
            <div class="w-2/3 lg:text-left text-center">
                <h1 transition:fly={{ duration: 500, x: 10 }} class="lg:text-5xl text-3xl font-bold">
                    Grand fan de <span class="text-primary">sport</span>
                </h1>
                <p transition:fly={{ duration: 500, x: 10, delay: 200 }} class="lg:text-xl text-lg font-medium lg:mt-6">
                    Malgrès les études je reste un grand passionné de sport. Je pratique au moins une activité physique par
                    jour et souhaite potentiellement plus tard lié informatique et sport.
                </p>
                <p transition:fly={{ duration: 500, x: 10, delay: 400 }} class="lg:text-xl text-lg font-medium mt-2">
                    Que ce soit musculation, rugby, football, tennis ou badminton. Tous sont des hobbies pour moi et
                    j'essaye pour la plupart de les pratiquer régulièrement.
                </p>
            </div>
            <img transition:fly={{ duration: 500, x: -20 }} class="w-4/12 md:mx-10" src="/img/about-me/gym.svg" alt="Apprentissage"/>
        </div>
    {/if}
</div>