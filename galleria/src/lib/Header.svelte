<script>
    import Bars from './assets/bars.svg';

    // let screenWidth = window.innerWidth;
    // let open = screenWidth > 375 ? true : false;

    let open = true;

    const modal = async () => {
        open = !open;
    }
</script>

<header>
    <a id="logo" href="/">Galleria</a>
    <nav data-sveltekit-reload>
        <div id="menu-modal" class="modal">
            <button class="hamburger" on:click={modal}>
                <img src={Bars} alt="Hamburger">
            </button>
            {#if open}
                <div class="modal-content">
                    <button class="close-modal" on:click={modal}>X</button>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/fotos">Fotos</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                        <li>
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="/testeHome">Teste</a>
                        </li>
                    </ul>
                </div>
            {/if}
        </div>
    </nav>
</header>

<style>
    /* :global(a:hover::backdrop, a:visited:hover::before) {
        animation: grow 0.3s ease-in-out;
    }

    @keyframes grow {
        0% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    } */

    header {
        height: 80px;
        max-width: 1200px;
        margin: 0 auto;

        display: flex;
        justify-content: space-around;
        align-items: center;
        gap:348px;
    }

    #logo {
        color:var(--primary-color);
        font-size: 50px;
        font-weight: bold;
    }

    .hamburger, .close-modal {
        display: none;
    }

    nav, #menu-modal, .modal-content {
        width: auto;
    }

    .modal-content {
        display: block;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        gap: 60px;
    }

    @media (max-width: 375px) {

		header {
            height: 60px;
            width: 90%;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
            gap:0;
        }

        #logo {
            font-size: 30px;
        }

        .hamburger {
            display: block;
            height: 40px;
            width: 40px;
            background-color: transparent;
            border: none;
        }

        .close-modal {
            display: block;
            position: fixed;
            top: 15px;
            right: 15px;
            font-weight: bold;
            background-color: transparent;
            border: 1px solid;
            color: var(--primary-color);
            padding: 8px;
            margin: 0;
        }

        .modal-content {
            position: fixed;
            height: 100vh;
            width: 60%;
            right: 0;
            top: 0;
            z-index: 1;
            background-color: #131010fa;
        }

        ul {
            flex-direction: column;
            padding: 55px 0 0 25px;
            gap: 20px;
        }

        li {
            opacity: 1;
        }
	}
    
</style>