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
        width: 350px;
        height: 400px;
        padding: 20px;
        background-color: var(--yellow);
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
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
    
    @media (max-width: 500px) {
        div {
            width: 90%;
            height: 340px;
            margin: 0 auto;
        }
    }
</style>