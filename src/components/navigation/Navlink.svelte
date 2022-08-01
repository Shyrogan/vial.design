<script lang="ts">
    import { page } from '$app/stores';

    export let href = "/"

    $: active = $page.url.pathname === href
</script>

<li>
    <a class:active {href}><slot /></a>
</li>

<style lang="scss">
    li {
      @apply mx-2;

      a {
        &.active {
          @apply btn btn-primary normal-case;
        }
      }
    }
</style>