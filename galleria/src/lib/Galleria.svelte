<script>
    import Album from './Album.svelte';
    import Imagem from './Image.svelte';
    import { onMount } from 'svelte';
    import { getAlbuns, getImagesFromAlbum } from '../routes/api/api';

    let status = true;
	let key;
    let albuns = [];
    let thumbnail = [];
    let photos = [];
    let numItens = 9;

    onMount(async () => {
        albuns = await getAlbuns();
    });

    async function getImage(key) {
        photos = await getImagesFromAlbum(key);
    };

    const handleClick = async () => {
        numItens += 6;
    }

    function handleClickAlbum(obj) {
        key = obj.albumId;
        getImage(key);
        status = !status;
	}
</script>

<div class="galery__components">
    {#if status}
        {#each albuns.filter(album => album.id === 0 || album.id % 50 ===0).slice(0, numItens) as album, index}
            <Album 
                object={album}
                onClick={handleClickAlbum} 
            />
        {/each}
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
        grid-template-columns: repeat(3, auto);
        gap: 50px;
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

    @media (max-width: 375px) {
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


