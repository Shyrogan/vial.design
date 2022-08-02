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
        @apply btn btn-ghost normal-case;

        &.active {
          @apply btn-primary;
        }
      }
    }
</style>