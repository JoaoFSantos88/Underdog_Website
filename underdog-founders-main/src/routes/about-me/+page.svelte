<script>
    import JoaoImage from "$lib/assets/images/joao-portrait-2.jpg";
    import HeroSection from "$lib/components/organisms/HeroSection.svelte";
    import SocialIcons from "$lib/components/molecules/SocialIcons.svelte";
    import MaskedImage from "$lib/components/atoms/MaskedImage.svelte";
</script>

<HeroSection imageSrc={JoaoImage}>
    <div class="text-white text-justify space-y-8 pt-48">
        <h2 class="h1 text-primary-500">João F. Santos</h2>
        <p>
            Startups are hard. Building them as an underdog is incredibly hard.
            I got curious about the stories of unlikely entrepreneurs winning
            against all odds, and thought you would enjoy reading them too.
        </p>
        <p>
            Our second story went viral on LinkedIn, and now I regularly
            document the startup journeys of underdog founders I meet around the
            world.
        </p>
        <p>
            I've been in startups for 10 years, most of that time in impact
            investing in Europe, with a few years in Asia. I've held roles as an
            operator (Rocket Internet), VC investor (Mustard Seed Maze), and
            advisor.
        </p>
        <p>
            You may have heard about AIsthetic, a viral experiment building a
            company with GPT4 as a CEO. I occasionally deliver corporate
            innovation talks for clients such as BBDO and Pfizer.
        </p>
    </div>

    <div slot="image">
        <MaskedImage imageSrc={JoaoImage} />
        <SocialIcons class="mx-auto items-center justify-center" />
    </div>
</HeroSection>
