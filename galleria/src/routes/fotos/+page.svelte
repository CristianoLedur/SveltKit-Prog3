<script>
    import Imagem from '$lib/Image.svelte';
    import { getImages } from '../api/api.js';
    import { onMount } from 'svelte';

    let photos = [];
    let innerWidth;
    let numItens;

    setTimeout(() => {
        if(innerWidth <= 375) {
            numItens = 4;
        } else if (innerWidth <= 1024) {
            numItens = 4;
        } else {
            numItens = 9;
        }
    }, 100);

    function handleClick() {
        numItens += 6;
    };

    onMount(async () => {
        photos = await getImages();
    });

    
</script>
<svelte:window bind:innerWidth />
<div class="galery__photos">
    {#each photos.slice(0, numItens) as photo}
        <Imagem image={photo}/>
    {/each}
</div>
<div class="galery__photos__see-more">
    <button on:click={handleClick}>ver mais</button>
</div>

<style>
    .galery__photos {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 50px;
    }

    .galery__photos__see-more {
        width: 350px;
        margin: 50px auto;
    }

    button {
        width: 100%;
        height: 60px;
        cursor: pointer;
        background-color: var(--primary-color);
        border-radius: 30px;
        border: none;
        color: #fff;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 2px;
    }

    @media (min-width: 800px) {
        .galery__photos {
            grid-template-columns: repeat(2, auto);
            gap: 40px;
        }

        .galery__photos__see-more {
            width: 300px;
        }
    }

    @media (max-width: 799px) {
        .galery__photos {
            grid-template-columns: repeat(1, auto);
        }
    }

    @media (max-width: 500px) {
        .galery__photos {
            grid-template-columns: repeat(1, auto);
            gap: 40px;
        }

        .galery__photos__see-more {
            width: 170px;
            margin: 40px auto;
        }
    }
</style>