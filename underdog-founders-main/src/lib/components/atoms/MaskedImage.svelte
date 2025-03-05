<script>
    import fallbackImage from "$lib/assets/images/story-1.jpg"; // replace with your image path

    export let imageSrc = fallbackImage;
    export let maxWidth = "max-w-[300px] md:max-w-[450px]"; // replace with your max width
</script>

<div
    class="{$$props.class} overflow-hidden relative w-full h-full {maxWidth} mx-auto aspect-square"
>
    <img
        src={imageSrc}
        alt="Story #2"
        class="masked-image inset-0 w-full h-auto"
    />
</div>

<style>
    .masked-image {
        /*mask-image: url("https://blobcdn.com/blob.svg?fill=000000");*/
        mask-image: url("/blob-mask.svg");
        mask-repeat: no-repeat;

        mask-size: contain;
    }
</style>
