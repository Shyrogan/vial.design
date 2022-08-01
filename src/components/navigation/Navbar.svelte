<script>
    import Navlink from "./Navlink.svelte";
</script>

<div class="navbar fixed bg-base-100 z-10">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Sébastien VIAL</a>
    </div>
    <div class="navbar-center lg:flex">
        <ul class="menu menu-horizontal p-0">
            <Navlink>Accueil</Navlink>
            <Navlink href="/contact">Contact</Navlink>
        </ul>
    </div>
</div>