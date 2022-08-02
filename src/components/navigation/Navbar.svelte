<script>
    import Navlink from "./Navlink.svelte";

    const links = [
        { href: "/", title: "Accueil" },
        { href: "/about-me", title: "À propos de moi" },
        { href: "/portfolio", title: "Portfolio" },
        { href: "/contact", title: "Contact" },
    ]
</script>

<div class="navbar fixed bg-base-100 z-10">
    <div class="flex-1">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {#each links as { href, title }}
                    <Navlink {href}>{title}</Navlink>
                {/each}
            </ul>
        </div>
        <a href="/" class="btn btn-ghost text-xl normal-case">Sébastien VIAL</a>
    </div>
    <div class="navbar-center lg:flex gap-0 hidden">
        <ul class="menu menu-horizontal p-0">
            {#each links as { href, title }}
                <Navlink {href}>{title}</Navlink>
            {/each}
        </ul>
    </div>
</div>