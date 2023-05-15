
    <!-- // import Album from '../lib/Album.svelte';
    // import Imagem from '../lib/Image.svelte';
    // import Galleria from '../lib/Galleria.svelte';
    // import { lazy } from 'svelte-lazyload';
    // import { getAlbum, setAlbuns, getImagePixels, getImagesFromAlbum } from '../routes/api/api.js';
    // import { onMount, afterUpdate } from 'svelte';

    // let isLoading = true;
    // let status = true;
	// let key;
    // let albuns;
    // let thumbnail = [];
    // let photos = [];
    // let numItens = 9;


    // onMount(async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    //     albuns = await res.json();
    // });

    /*// const dataAlbum = await getAlbum();
        // albuns = dataAlbum;
        // alert("teste");
        // // const dataImagePixels = await getImagePixels(numItens);
        // // let imgPixels = dataImagePixels;
        // // const dataThumbnail = await setAlbuns(numItens, imgPixels);
        // // thumbnail = dataThumbnail;
        // // console.log("teste");
        // isLoading = false;*/

    // onMount(async () => {
    //     getAlbum();
    // });
    

    // const getAlbum = async () => {
    //     const API_KEY = 'xslsck2zI2UjP62u7MPbRLtlcF3jEVVKpihPJYMi8Bf6xPZReWlcBWDS';
    //     const baseURL = `https://api.pexels.com/v1/curated?page=1&per_page=${numItens}`;
    //     const response = await fetch(baseURL, {
    //         method: 'GET',
    //         headers:{
    //             Accept: 'application/json',
    //             Authorization: API_KEY,
    //         }
    //     });
    //     const data = await response.json();
    //     const img = data.photos;

    //     for(let i = 0; i < numItens; i++) {
    //         fetch('https://jsonplaceholder.typicode.com/photos', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 albumId: 101,
    //                 id: img[i].id,
    //                 title: img[i].photographer,
    //                 url: img[i].src.medium,
    //                 thumbnailUrl: img[i].download_url,
    //             }),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         })
    //             .then((response) => response.json())
    //             .then((dados) => {
    //                 thumbnail.push(dados);
    //             });
    //     }
    //     const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    //     albuns = await res.json();

    //     console.log("Teste");
       
    // }; /* esta pegando os dados certinho porém, devo testar a renderização em partes, começando com a api do trabalho, e depois de funcionar, inserir a api de imagens */

    // afterUpdate(async () => {
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${key}/photos`);
    //     photos = await res.json();
    //     // return photos;
    // });

    // const handleClick = async () => {
    //     numItens += 6;
    // }
    -->


<script>
    import Album from '../lib/Album.svelte';
    import Imagem from '../lib/Image.svelte';
    import { onMount } from 'svelte';
    import * as animateScroll from 'svelte-scrollto';
    import { getAlbuns, getImagePixels, getImagesFromAlbum, setAlbuns } from './api/api';

    let status;
    let key;
    let albuns = [];
    let imagePixels = [];
    let thumbnail;
    let photos = [];
    let numItens;
    let numImg = 80;
    let innerWidth;
    setTimeout(() => {
        if(innerWidth <= 375) {
            numItens = 4;
        } else if (innerWidth <= 1024) {
            numItens = 4;
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
    }

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

    @media (max-width: 1100px) {
        .galery__components {
            grid-template-columns: repeat(2, auto);
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
            
            









