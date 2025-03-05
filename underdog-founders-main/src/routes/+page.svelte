<script>
    import HeroSection from "$lib/components/organisms/HeroSection.svelte";
    import Image1 from '$lib/assets/images/story-1.jpg'; // replace with your image path
    import Image2 from '$lib/assets/images/story-2.jpg';
    // import Collage from '$lib/assets/images/collage-square.jpg';
    import Collage from '$lib/assets/images/collage-blobs.webp';

    import {LinkedinIcon} from "lucide-svelte";
    import SubstackLogo from "$lib/components/atoms/SubstackLogo.svelte";
    import ReadFullStory from "$lib/components/molecules/ReadFullStory.svelte";
    import UFFullLogo from "$lib/components/atoms/UFFullLogo.svelte"; // replace with your image path

    const story1SocialLinks = [
        {
            name: "linkedin",
            href: "https://www.linkedin.com/posts/joao-ferrao-dos-santos_startup-founderstories-hiring-activity-7018137827129380864-27CG"
        },
        {name: "substack", href: "https://johnfsantos.substack.com/p/underdog-founders-alberto-ceo-of"},
    ]
    const story2SocialLinks = [
        {
            name: "linkedin",
            href: "https://www.linkedin.com/posts/joao-ferrao-dos-santos_founderstories-lending-peer2peer-activity-7041007733168345088-ZZgP"
        },
        {name: "substack", href: "https://johnfsantos.substack.com/p/underdog-founders-lika-founded-lendwill"},
    ]
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<main>

    <!--* HERO SECTION -->
    <!--    <section class="text-center container mx-auto px-8 !py-32 md:!py-48 relative overflow-hidden">-->
    <section class="text-center md:text-start container mx-auto px-8 !py-52 md:!py-72 relative overflow-hidden">

        <!--        <img class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-80 masked-image" src={Collage}
                     alt="Underdog Founders">-->
        <div class="contrast-drop-shadow">
            <!--        <h3 class="uppercase font-black text-4xl text-primary-500 leading-tight mb-2">Underdog Founders</h3>-->

            <div class="z-10 relative">
                <!--                <h1 class="h1 balanced mx-auto md:pr-16">Join +20,000 readers watching underdogs build startups and win.</h1>-->
                <h1 class="h1 tracking-tighter max-w-screen-xl text-4xl balance-title md:text-5xl lg:text-7xl md:pr-16 capitalize">
                    Share your startup with 20k readers and hundreds of potential prospects.
                </h1>
                <a href="/criteria" class="primary-button">Get Featured</a></div>
        </div>
    </section>


    <HeroSection class="!pt-0 pb-44" imageSrc={Collage} imageMasked={false} imageClass="mb-auto">
        <h2 class="h1 text-primary-500 text-center md:text-start !mb-8">What is an Underdog Founder?</h2>
        <div class="prose text-white">
            <p>
                Underdog Founders have three things in common:
            </p>
            <p>
                1 - No former exits under their belt.<br>
                2 - Little to no experience in the market they're disrupting.<br>
                3 - Current metrics suggesting product-market fit.<br>
            </p>
            <p>
                We feature new CEOs every week on LinkedIn, Substack and Twitter.
            </p>
            <p>
                It's our contribution to bring startup culture back to grit and innovation.
            </p>
        </div>
    </HeroSection>


    <HeroSection class="bg-gray-200" imageSrc={Image1}>
        <div class="">
            <h2 class="h1 text-primary-500">
                UF #02 - Alberto
            </h2>
            <p class="text-black">
                Would you leave Goldman Sachs to build a food waste startup when every investor tells you it’s a
                bad idea that doesn’t scale?
            </p>
            <p class="text-black">
                Without startup, food or logistics experience?Alberto did, and already passed 1M in
                revenue. Read his full story below.
            </p>
            <ReadFullStory class="text-black" socialIcons={story1SocialLinks}/>
        </div>
    </HeroSection>


    <HeroSection imageClass="-scale-x-100" class="bg-gray-200" reversed imageSrc={Image2}>
        <div class="text-white">
            <h2 class="h1 text-primary-500">
                UF #08 - Anzhelika
            </h2>
            <p class="text-black">
                With zero fintech experience, Anzhelika set out to build the p2p micro-lending platform that would’ve
                saved her growing up.
            </p>
            <p class="text-black">
                Would you keep pushing when everyone tells you it’ll be too hard and expensive?

            </p>

            <ReadFullStory class="text-black" socialIcons={story2SocialLinks}/>

        </div>
    </HeroSection>

    <section class="space-y-4 py-16">
        <div class="container flex flex-col gap-4 items-center align-middle mx-auto">
            <h1 class="h1 mb-0 text-white text-center balanced">Are you an <span
                    class="text-primary-500 font-bold capitalize">underdog founder?</span></h1>
            <a href="/criteria" class="primary-button">Get Featured</a>
        </div>
    </section>
</main>

<style>
    .contrast-drop-shadow {
        filter: drop-shadow(0px 0px 20px black);
    }

    .masked-image {
        /*mask-image: url(/big-blob.svg);*/
        /*mask-repeat: no-repeat;*/
        /**/
        /*mask-size: contain;*/
    }

    /*noinspection ALL*/
    .balance-title {
        text-wrap: balance;
    }

</style>
