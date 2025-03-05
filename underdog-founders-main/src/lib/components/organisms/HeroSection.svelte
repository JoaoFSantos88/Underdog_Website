<script lang="ts">

    import MaskedImage from "$lib/components/atoms/MaskedImage.svelte";

    export let imageMasked = true;
    export let imageSrc: string;
    export let imageClass: string = "";
    export let reversed = false;
</script>

<section class="{$$props.class} py-16">
    <div class="container mx-auto">
        <div class="overflow-x-hidden grid grid-cols-1 gap-8 items-center lg:grid-cols-2">

            <div class="{reversed ? 'order-1 md:order-2' : 'order-2 md:order-1'}">
                <slot/>
            </div>

            {#if imageMasked}
                <slot name="image">
                    <MaskedImage {imageSrc}
                                 class="{reversed ? 'order-2 md:order-1' : 'order-1 md:order-2'} {imageClass}"/>
                </slot>
            {:else}
                <img src="{imageSrc}" alt="founders" class="{reversed ? 'order-2 md:order-1' : 'order-1 md:order-2'} {imageClass}"/>
            {/if}
        </div>
    </div>
</section>
