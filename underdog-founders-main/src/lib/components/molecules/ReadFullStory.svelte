<script>
    import SocialIcons from "$lib/components/molecules/SocialIcons.svelte";

    export let socialIcons;
</script>

<div class="{$$props.class} flex gap-4 max-w-max rounded-token flex-wrap">
    <p class="inline mb-0">Read the full story:</p>
    <SocialIcons socialLinks={socialIcons}/>
</div>