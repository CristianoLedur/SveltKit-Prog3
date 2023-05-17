<script>
    import Album from '../lib/Album.svelte';
    import Imagem from '../lib/Image.svelte';
    import { onMount } from 'svelte';
    import * as animateScroll from 'svelte-scrollto';
    import { getAlbuns, getImagePixels, getImagesFromAlbum, setAlbuns } from './api/api';

    let status;
    let key;
    let albuns;
    let imagePixels = [];
    let thumbnail;
    let photos = [];
    let numItens;
    let numImg = 80;
    let innerWidth;

    setTimeout(() => {
        console.log(innerWidth);
        if(innerWidth < 800) {
            numItens = 4;
        } else if (innerWidth >= 800) {
            numItens = 6;
        } else {
            numItens = 9;
        }
    }, 100);

    function backToTop() {
		animateScroll.scrollToTop();
	};

    onMount(async () => {
        imagePixels = await getImagePixels(numImg);
        thumbnail = await setAlbuns(numImg, imagePixels);
        albuns = await getAlbuns();
        setTimeout(() => {
            status = true;
        }, 500);
    });

    async function getImage(key) {
        photos = await getImagesFromAlbum(key);
    };

    function handleClick() {
        numItens += 6;
    };

    function handleClickAlbum(obj) {
        numItens = 9;
        key = obj.albumId;
        getImage(key);
        backToTop();
        status = !status;
    };
</script>

<svelte:window bind:innerWidth />

<div class="galery__components">
    {#if status}
        {#await Promise.all([getAlbuns()])}
            <p>Carregando...</p>
        {:then [albunsResponse]}
            {#each albunsResponse.filter(album => album.id === 0 || album.id % 50 ===0).slice(0, numItens) as album, index}
                <Album
                    img={thumbnail[index]}
                    object={album}
                    onClick={handleClickAlbum} 
                />
            {/each}
        {:catch error}
            <p>Error: {error.message}</p>
        {/await}
    {:else}
        {#each photos.slice(0, numItens) as photo}
            <Imagem image={photo}/>
        {/each}
    {/if}
</div>
<div class="galery__components__see-more">
    <button on:click={handleClick}>ver mais</button>
</div>

<style>
    .galery__components {
        display: grid;
        grid-template-columns: repeat(3, 30.5%);
        gap: 50px;
        height: auto;
    }
    
    .galery__components__see-more {
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

    @media (max-width: 1100px) {
        .galery__components {
            grid-template-columns: repeat(2, 48%);
            gap: 40px;
        }

        .galery__components__see-more {
            width: 300px;
        }
    }

    @media (max-width: 799px) {
        .galery__components {
            grid-template-columns: repeat(1, auto);
        }
    }

    @media (max-width: 500px) {
        .galery__components {
            grid-template-columns: repeat(1, auto);
            gap: 40px;
        }

        .galery__components__see-more {
            width: 170px;
            margin: 40px auto;
        }
    }
</style>
            
            









