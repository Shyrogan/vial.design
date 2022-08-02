<script lang="ts">
    import { inview } from 'svelte-inview';
    import Project from "../components/portfolio/Project.svelte";

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
        <div class="hero-content flex-row justify-center align-middle">
            <Project
                    delay={0}
                    title="Devenir-SST" href="https://devenir-sst.fr"
                    image="/img/portfolio/mizu.png"
                    description="Vous êtes une PME ou une startup et cherchez à former vos employés aux premiers secours ?"
            />
            <Project
                    delay={200}
                    title="Mizu" href="https://mizu.wtf"
                    image="/img/portfolio/mizu.png"
                    description="Vous jouez à Minecraft est avez besoin d'un utilitaire pour jouer au jeu ? Ne cherchez pas plus loin."
            />
        </div>
    {/if}
</div>