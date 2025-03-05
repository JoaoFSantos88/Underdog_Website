<script>
    import MainNavMenu from "$lib/components/molecules/MainNavMenu.svelte";
    import {X} from "lucide-svelte"
    import UFLogo from "$lib/components/atoms/UFLogo.svelte";
    import {onMount} from "svelte";

    export let open = false

    const closeMenu = () => {
        open = false
    }
</script>

<aside class="md:hidden absolute p-4 z-50 w-full h-full bg-black border-r-2 shadow-lg" class:open>
    <UFLogo class="w-10 -mt-4"/>
    <MainNavMenu clickEvent={closeMenu} bind:sideMenuOpen={open}/>
    <button class="absolute top-4 right-4" on:click={() => {open = !open}}>
        <X size={44} class="fill-white stroke-white"/>
    </button>
</aside>

<style>
    aside {
        left: -100%;
        transition: left 0.3s ease-in-out
    }

    .open {
        left: 0
    }
</style>