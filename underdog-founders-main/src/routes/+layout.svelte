<script lang="ts">
    import "../app.postcss";
    import UFLogo from "$lib/components/atoms/UFLogo.svelte";
    import FooterLogo from "$lib/assets/images/footer-logo.png";
    import SocialIcons from "$lib/components/molecules/SocialIcons.svelte";
    import MainNavMenu from "$lib/components/molecules/MainNavMenu.svelte";
    import Hamburger from "$lib/components/menu/Hamburger.svelte";
    import SideBar from "$lib/components/menu/SideBar.svelte";
    import { MetaTags } from "svelte-meta-tags";
    import UFFullLogo from "$lib/components/atoms/UFFullLogo.svelte";

    let open = false;
</script>

<MetaTags
    title="Underdog Founders"
    titleTemplate="%s"
    description="Share your startup with 20k readers and hundreds of potential prospects."
    openGraph={{
        url: "https://www.underdogfounders.club",
        title: "Underdog Founders",
        description:
            "Share your startup with 20k readers and hundreds of potential prospects.",
        images: [
            {
                url: "https://www.underdogfounders.club/1200x630.jpg",
                width: 1200,
                height: 630,
                alt: "Under Logo - wide",
            },
            {
                url: "https://www.underdogfounders.club/600x600.jpg",
                width: 600,
                height: 600,
                alt: "Under Logo - square",
            },
        ],
        siteName: "Underdog Founders",
    }}
/>

<SideBar bind:open />

<header class=" fixed z-[999] bg-black w-full mx-auto">
    <!--* Desktop header -->
    <div
        class="container mx-auto hidden md:grid grid-cols-[auto,1fr,auto] gap-8 my-8 items-center"
    >
        <div>
            <a href="/">
                <UFFullLogo class="w-56" />
            </a>
            <!--            <UFLogo/>-->
        </div>

        <!--* Main menu -->
        <MainNavMenu class="" />

        <div class="justify-self-end">
            <a href="/criteria" class="primary-button">Get Featured</a>
        </div>
    </div>

    <!--* Mobile header -->
    <div class="container flex justify-between md:hidden">
        <Hamburger bind:open />

        <div>
            <!--            <UFLogo class="w-10"/>-->
            <UFFullLogo class="w-36 md:w-44 py-4 px-2" />
        </div>
    </div>
</header>

<slot />

<footer class="bg-primary-500 py-8">
    <div
        class="container mx-auto flex gap-y-4 place-content-between items-center flex-wrap"
    >
        <img
            src={FooterLogo}
            class="h-[125px] object-contain"
            alt="New Founder Every 2 weeks"
        />
        <div class="w-full md:w-auto md:place-self-end flex flex-col gap-4">
            <MainNavMenu hoverColor="hover:text-black" />
            <SocialIcons white class="justify-center md:justify-end" />
            <span class="text-lg text-center md:text-end"
                >© Underdog Founders</span
            >
        </div>
    </div>
</footer>
