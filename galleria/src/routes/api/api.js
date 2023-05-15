// Função para pegar album
export async function getAlbuns() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const albuns = await res.json();
    return albuns;
};

// Função para pegar imagens Pixels
export async function getImagePixels(numItens) {
    const API_KEY = 'xslsck2zI2UjP62u7MPbRLtlcF3jEVVKpihPJYMi8Bf6xPZReWlcBWDS';
    const baseURL = `https://api.pexels.com/v1/curated?page=1&per_page=${numItens}`;
    const response = await fetch(baseURL, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            Authorization: API_KEY,
        }
    });
    const data = await response.json();
    const img = data.photos;
    return img;
};

// Função para enviar album
export async function setAlbuns(numItens, img) {
    let thumbnail = [];
    for(let i = 0; i < numItens; i++) {
        fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify({
                albumId: 101,
                id: img[i].id,
                title: img[i].photographer,
                url: img[i].src.medium,
                thumbnailUrl: img[i].download_url,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((dados) => {
                thumbnail.push(dados);
            });
    }
    return thumbnail;
};

// Função para pegar fotos a partir do album
export async function getImagesFromAlbum(key) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${key}/photos`);
    const photos = await res.json();
    return photos;
};

// Função para pegar fotos
export async function getImages() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await res.json();
    return photos;
};
