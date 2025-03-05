<script>
  import handprintImg from "$lib/assets/images/handprint.png.jpg"; // Update the path if needed
</script>

<div class="mt-36 bg-white">
  <div
    class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center p-6"
  >
    <!-- Left Image -->
    <div class="flex justify-center">
      <img
        src={handprintImg}
        alt="Handprint Case Study"
        class="w-72 h-auto rounded-lg shadow-md"
      />
    </div>

    <!-- Right Content -->
    <div
      class="text-black flex flex-col md:items-end items-start md:text-right text-left"
    >
      <!-- Headings aligned to the top-right -->
      <h2 class="text-2xl lg:text-4xl font-bold font-sans">
        Positioning and Go-to Market
      </h2>
      <h3 class=" mb-4 font-sans text-2xl lg:text-4xl md:text-right text-left">
        Client Case Study
      </h3>

      <!-- Normal text content aligned left -->
      <div class="w-full">
        <p class="mb-3 font-sans text-xl">
          Handprint is a climate-change tech startup based in Singapore.
        </p>
        <p class="mb-3 font-sans text-xl">
          When I arrived, the team was trying to start Affiliate Marketing, Paid
          Ads, Cold Emails, and Enterprise Sales, all at once. It wasn’t
          working.
        </p>
        <p class="mb-3 font-sans text-xl">
          I started by proving that our software led to a 16% increase in
          revenue, using Google Optimize’s A/B testing with a live client.
        </p>
        <p class="font-sans text-xl">
          Then we used the A/B test results to beat cold email industry
          averages. Reply rates up to 20% allowed us to take the company to 20
          demos per month. Only from email, by doing less, but better.
        </p>
      </div>
    </div>
  </div>
</div>
