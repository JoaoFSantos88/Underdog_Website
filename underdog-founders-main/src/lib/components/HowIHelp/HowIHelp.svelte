<script>
  import { Lightbulb, BarChart3, Megaphone } from "lucide-svelte";

  const services = [
    {
      icon: Lightbulb,
      title: "Get the yes from investors.",
      description:
        "Learn how VCs think, avoid common founder mistakes and get more term sheets.",
    },
    {
      icon: BarChart3,
      title: "Strategic Positioning and GTM.",
      description:
        "Use data to identify your best value proposition and find the right channel for your ICP.",
    },
    {
      icon: Megaphone,
      title: "Blow up on social media.",
      description:
        "Stay top of mind and 2-3x your impressions in the feed of your ICP.",
    },
  ];
</script>

<div class="mt-16 p-6 bg-white">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-[36px] font-bold text-center mb-16 text-black font-sans">
      How I help founders
    </h2>
    <div class="space-y-14">
      {#each services as service}
        <div class="flex items-start w-full space-x-12">
          <div class="bg-red-500 text-white p-3 rounded-lg">
            <svelte:component this={service.icon} size={24} />
          </div>
          <div class="w-full">
            <h3 class="font-semibold text-lg text-black font-sans mb-0">
              {service.title}
            </h3>
            <p class="text-black font-sans mt-0 min-w-full">
              {service.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
