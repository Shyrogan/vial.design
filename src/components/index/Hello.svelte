<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly } from 'svelte/transition'

    let isInView: boolean;
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
        <div class="hero-content flex-col lg:flex-row">
            <div class="lg:text-left text-center">
                <h1 transition:fly={{ duration: 500, x: -10 }} class="lg:text-5xl text-3xl font-bold">
                    Bonjour!
                </h1>
                <h1 transition:fly={{ duration: 500, x: -10, delay: 200 }} class="lg:text-5xl text-3xl font-bold">
                    Je suis <span class="text-primary font-bold">Sébastien VIAL</span>
                </h1>
                <p  transition:fly={{ duration: 500, x: -10, delay: 400 }} class="lg:text-2xl text-lg font-medium lg:my-3">
                    Et je design <span class="text-accent font-bold">vos</span> sites webs avec passion.
                </p>
                <a transition:fly={{ duration: 500, x: -10, delay: 600 }} href="#technologies" class="btn btn-primary lg:inline-flex my-10 hidden">
                    Plus d'informations sur moi
                </a>
            </div>
            <img transition:fly={{ duration: 500, x: 20 }} class="md:mx-10 md:my-0 lg:w-5/12 md:w-1/2 w-2/3 lg:my-6 my-3" src="/img/index/design.svg" alt="Web designer" />

            <a href="#technologies" class="btn btn-primary lg:hidden my-10">Plus d'informations</a>
        </div>
    {/if}
</div>