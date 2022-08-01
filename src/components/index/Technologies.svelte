<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly, fade } from 'svelte/transition'

    let isInView: boolean;

    const technologies = [
        { alt: "Java", icon: "devicon-java-plain" },
        { alt: "Kotlin", icon: "devicon-kotlin-plain" },
        { alt: "Svelte", icon: "devicon-svelte-plain" },

        { alt: "Javascript", icon: "devicon-javascript-plain" },
        { alt: "Typescript", icon: "devicon-typescript-plain" },
        { alt: "HTML 5", icon: "devicon-html5-plain" },
        { alt: "CSS 3", icon: "devicon-css3-plain" },

        { alt: "MySQL", icon: "devicon-mysql-plain" },
        { alt: "MongoDB", icon: "devicon-mongodb-plain" },
        { alt: "Git", icon: "devicon-git-plain" },

        { alt: "Debian", icon: "devicon-debian-plain" },
        { alt: "Docker", icon: "devicon-docker-plain" },
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
                    Les <span class="text-primary">technologies</span> que je connais
                </h1>
                <p  transition:fly={{ duration: 500, x: -10, delay: 200 }} class="lg:text-2xl text-lg font-medium lg:my-3">
                    Ayant commencé dès l'âge de <span class="font-bold text-secondary">15 ans</span> la programmation, j'ai de nombreux projets à mon actif.
                    Cela m'a permis d'apprendre de nombreuses technologies aussi bien récentes qu'anciennes.
                    <i class=""></i>
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