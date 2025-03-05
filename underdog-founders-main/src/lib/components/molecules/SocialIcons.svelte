<script lang="ts">
    import {LinkedinIcon, TwitterIcon} from "lucide-svelte";
    import SubstackLogo from "$lib/components/atoms/SubstackLogo.svelte";

    export let white = false;

    export let socialLinks = [
        // {
        //     name: 'twitter',
        //     icon: TwitterIcon,
        //     href: 'https://twitter.com/Joao_F_Santos',
        // },
        {
            name: 'linkedin',
            icon: LinkedinIcon,
            href: 'https://www.linkedin.com/in/joao-ferrao-dos-santos/',
        },
        {
            name: 'substack',
            icon: SubstackLogo,
            href: 'https://johnfsantos.substack.com/',
        },
    ]

    const iconClass = `w-8 h-8 stroke-transparent`
</script>
<div class="{$$props.class} flex gap-4  sm:mt-0">
    {#each socialLinks as sl}
        <a href={sl.href} target="_blank">
            {#if sl.name === "linkedin"}
                <LinkedinIcon class="{iconClass} {white ? 'fill-white' : 'fill-[#3171aa]'}"/>
            {:else if sl.name === "twitter"}
                <TwitterIcon class="{iconClass} {white ? 'fill-white' : 'fill-[#65a4e4]'}"/>
            {:else if sl.name === "substack"}
                <SubstackLogo class="{iconClass} {white ? 'fill-white' : 'fill-[#e66d33]'}"/>
            {/if}
        </a>
    {/each}
</div>
