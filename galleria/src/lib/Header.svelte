<script>
    import Bars from './assets/bars.svg';

    let innerWidth;
    let open;
    setTimeout(() => {
        if(innerWidth > 799) {
            open = true;
        } else {
            open = false;
        }
    }, 100);
    
    function modal() {
        open = !open;
    };

    
</script>
<svelte:window bind:innerWidth />
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
                            <a href="/exemplos">Exemplos</a>
                        </li>
                    </ul>
                </div>
            {/if}
        </div>
    </nav>
</header>

<style>
    header {
        height: 80px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px 0;

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

    .hamburger img{
        height: 40px;
        width: 40px;
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
        gap: 45px;
    }

    @media (max-width: 1164px) {
        header {
            padding-top: 15px;
            max-width: auto;
            width: 90%;
            gap:0;
            justify-content: space-between;
        }

        #logo {
            font-size: 40px;
        }

        ul {
            gap: 20px;
        }
    }

    @media (max-width: 799px) {

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
            padding-left: 15px;
        }

        .hamburger {
            display: block;
            height: 40px;
            width: 40px;
            margin-right: 15px;
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