<script lang="ts">
    import {MoveRightIcon} from "lucide-svelte";
    import { createPopup } from "@typeform/embed";
    import { onMount } from "svelte";
    import "@typeform/embed/build/css/popup.css";

    const criteria = [
        "No prior multi-million dollar exit.",
        "New to the market you are trying to disrupt.",
        "Faced lots of rejections from clients and investors.",
        "Still found metrics that suggest PMF - revenue, key industry clients, etc.",
    ]

    let tfToggle;
    onMount(() => {
        const { toggle } = createPopup("hvmBXaXk");
        tfToggle = toggle
    });

</script>
<main>
    <section class="bg-white top-section mx-auto py-48 pb-16">
        <div class="container mx-auto ">
            <h1 class="h1 balanced text-primary-500 ">Underdog Criteria Check</h1>
            <p class="font-medium text-black">We get lots of requests from founders that don’t fit our criteria. CEOs need to give exposure to their
                startups, we get it.</p>
            <p class="font-medium text-black">Save time and make sure you fit our criteria below. Then smash the ‘Apply Here’ button.</p>
        </div>
    </section>

    <section class="container mx-auto py-16">
        <h2 class="h1 uppercase text-primary-500">Underdog Founders</h2>
        {#each criteria as item}
            <div class="flex items-center gap-8 py-8 border-t-2 border-dashed max-w-screen-xl">
                <MoveRightIcon class="stroke-primary-500 scale-150 fill-primary-500"/>
                <span class="text-2xl font-light text-white">{item}</span>
            </div>
        {/each}
        <button class="btn btn-xl font-bold variant-filled-primary" on:click={tfToggle}>Apply Here</button>
    </section>
</main>

<style>
    /** .top-section with image background but low opacity on image. */
    .top-section {
        background-image: url("/criteria-bg.jpg");
        background-color: rgba(255, 255, 255, 0.9);
        background-blend-mode: screen;
        background-attachment: fixed;
    }
    /*.top-section {
        background-image: url("/criteria-bg.jpg");
    }*/
</style>