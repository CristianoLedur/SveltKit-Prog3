<script>
    export let image;
</script>

<div>
    <img src="{image.url}" alt="{image.title}">
    <h2>{image.title}</h2>
</div>

<style>
    div {
        position: relative;
        width: auto;
        height: auto;
        padding: 20px;
        background-color: var(--yellow);
        border-radius: 10px;
    }

    img {
        width: 100%;
    }

    h2 {
        color: var(--black);
        font-size: 16px;
        text-align: center;
        width: 100%;
        padding: 10px;
        font-weight: 400;
    }

    @media (max-width: 799px) {
        div {
            width: calc(70vw);
            margin: 0 auto;
        }   
    }

    @media (max-width: 500px) {
        div {
            width: 100%;
        }
    }
</style>