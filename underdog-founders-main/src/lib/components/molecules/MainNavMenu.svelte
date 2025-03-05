<script lang="ts">
    export let hoverColor: string = "hover:text-primary-500";

    export let clickEvent = () => {};
</script>

<div
    class="{$$props.class} flex flex-col text-lg gap-4 text-center md:text-end md:block md:space-x-4 font-medium md:text-xl uppercase"
>
    <a href="/" class="{hoverColor} transition-colors" on:click={clickEvent}
        >Home</a
    >
    <a
        href="/growth-mentoring"
        class="{hoverColor} transition-colors"
        on:click={clickEvent}>Growth Mentoring</a
    >
    <a href="/about-me" class="{hoverColor} transition-colors">About Me</a>
    <a
        href="/criteria"
        class="{hoverColor} transition-colors"
        on:click={clickEvent}>Criteria</a
    >
</div>
