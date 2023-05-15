<script>
    export let exec;
</script>

<button on:click={exec}>
    <slot />
</button>

<style>
    button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: var(--primary-color);
        border: none;
        font-size: 25px;
        padding-bottom: 5px;
    }

    @media (max-width: 500px) {
        button {
            height: 35px;
            width: 35px;
            font-size: 20px;
            padding-bottom: 2px;
        }
    }
</style>