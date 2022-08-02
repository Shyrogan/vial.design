<script lang="ts">
    import { fly } from 'svelte/transition'

    export let title: string
    export let description: string
    export let href: string
    export let image: string

    export let delay: 0
</script>

<div transition:fly={{ duration: 500, y: 20, delay: delay }}  class="card card-compact w-1/2 bg-base-100 shadow-xl">
    <figure><img src={image} alt={title} /></figure>
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
            <a {href} class="btn btn-primary">Visiter</a>
        </div>
    </div>
</div>