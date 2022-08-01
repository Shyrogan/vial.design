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
        <div class="hero-content flex-col justify-center align-middle">
            <img transition:fly={{ duration: 500, x: -20 }} class="w-10/12 md:mx-10" src="/contact.svg" alt="Contact"/>
            <div class="lg:text-left text-center">
                <h1 transition:fly={{ duration: 500, x: 10 }} class="lg:text-5xl text-3xl font-bold">Contactons-nous</h1>
            </div>
        </div>
    {/if}
</div>