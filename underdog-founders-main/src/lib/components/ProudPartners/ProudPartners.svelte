<script>
    import ProudPartner1 from '$lib/assets/images/ProudPartner1.png';
    import ProudPartner2 from '$lib/assets/images/ProudPartner2.png';
    import ProudPartner3 from '$lib/assets/images/ProudPartner3.png';
    import ProudPartner4 from '$lib/assets/images/ProudPartner4.png';
    import ProudPartner5 from '$lib/assets/images/ProudPartner5.png';
    import ProudPartner6 from '$lib/assets/images/ProudPartner6.png';
  
    let clients = [
        { name: "eAgronom", logo: ProudPartner1, alt: "eAgronom Logo", size: "h-12 md:h-12" },
        { name: "ProprHome", logo: ProudPartner2, alt: "ProprHome Logo", size: "h-12 md:h-12" },
        { name: "Saito", logo: ProudPartner3, alt: "Saito Logo", size: "h-24 md:h-24" },
        { name: "Bursement", logo: ProudPartner4, alt: "Bursement Logo", size: "h-12 md:h-12" },
        { name: "DLogo", logo: ProudPartner5, alt: "D Logo", size: "h-20 md:h-20" },
        { name: "Chamaeleon", logo: ProudPartner6, alt: "Chamaeleon Logo", size: "h-14 md:h-10 w-52" }
    ];
</script>

<div class="mt-28 text-center bg-white py-10">
    <h2 class="text-2xl md:text-3xl font-bold mb-16 font-sans text-black">Proud to have worked with</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto px-6">
        {#each clients as client}
            <div class="flex justify-center">
                <img src={client.logo} alt={client.alt} class="object-contain {client.size}" />
            </div>
        {/each}
    </div>
</div>
