<script>
    export let img;
    export let object;
    export let onClick;
</script>

<div>
    <img src="{img.url}" alt="{object.title}">
    <h2>{`Album ${object.albumId}`}</h2>
    <button on:click={() => onClick(object)}>Mais fotos</button>
</div>

<style>
    div {
        position: relative;
        height: 400px;
        width: auto;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    h2 {
        color: var(--bg-color);
        position: absolute;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        width: 100%;
        top: 50px;
    }

    button {
        width: 150px;
        height: 50px;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%);

        background-color: #1fd65f41;
        border: 3px solid var(--secondary-color);
        border-radius: 25px;
        cursor: pointer;

        color: var(--secondary-color);
        letter-spacing: 2px;
        text-align: center;
        font-weight: bold;
        padding: 15px 10px; 
    }

    @media (max-width: 1100px) {
        div {
            height: 400px;
            width: 100%;
            margin: 0 auto;
        }   
    }

    @media (max-width: 799px) {
        div {
            height: calc(70vw);
            width: calc(70vw);
            margin: 0 auto;
        }   
    }
    
    @media (max-width: 500px) {
        div {
            height: 300px;
            width: 300px;
            margin: 0 auto;
        }

        h2 {
            font-size: 24px;
        }
    }
</style>