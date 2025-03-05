<script>
    import founder1Image from '$lib/assets/images/Founder1.png'; // Update the path if needed
    import founder2Image from '$lib/assets/images/Founder2.png'; // Update the path if needed
    import founder3Image from '$lib/assets/images/Founder3.png'; // Update the path if needed
  let testimonials = [
    {
      name: "John McCoy",
      title: "CEO at ProprHome",
      image: founder1Image, // Update with actual image path
      quote: "I was finally able to have a clear value proposition and explain what we’re building to anyone."
    },
    {
      name: "Ricardo Figueiro",
      title: "CEO at Luggit",
      image: founder2Image, // Update with actual image path
      quote: "Joao saw what was missing to close the VCs we were talking to. We fixed it and closed our seed!"
    },
    {
      name: "Matt Baida",
      title: "CEO at VAST",
      image: founder3Image, // Update with actual image path
      quote: "I thought our industry was too boring for social media content. Now our prospects see what we do and ask for a meeting."
    }
  ];
</script>

<div class="mt-24 text-center bg-white">
    <div class="max-w-5xl mx-auto px-6 py-12 bprder border-red-500">
  <h2 class="text-3xl font-bold mb-10 font-sans text-black">Founder Testimonials</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each testimonials as testimonial}
      <div class="flex flex-col items-center text-center">
        <img src={testimonial.image} alt={testimonial.name} class="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-md object-cover mb-4" />
        <h3 class="text-lg font-sans text-gray-500 mb-1"  >{testimonial.name}</h3>
        <p class="text-gray-500 text-lg font-sans">{testimonial.title}</p>
<p class="italic text-black mt-3 font-sans">&ldquo;{testimonial.quote}&rdquo;</p>
      </div>
    {/each}
  </div>
</div>
</div>
