<script>
    export let data;
    import Button from '../../lib/ButtonExemplo.svelte';
    console.log(data);

    let image = data.image;
    let count = 1;

    function increment() {
        if(count == 2 ) {
            count = 0;
        } else {
            count +=1;
        }
    };

    function decrement() {
        if(count == 0 ) {
            count = 2;
        } else {
            count -=1;
        }
    };

</script>

<div class="apresentacao">
    <div class="apresentacao__exemplo">
        <Button exec={decrement}>
            &#11013;
        </Button>
        <img src={image[count].url} alt={image[count].alt}>
        <Button exec={increment}>
            &#10145;
        </Button>
    </div>
    <div class="apresentacao__topicos">
        <h1>Tópicos</h1>
        <ol>
            <li>Componentes</li>
            <li>SSR e CSR</li>
            <li>Rotas</li>
            <li>Integração com API</li>
            <li>Gerenciamento de estado</li>
            <li>Desenvolvimento e construção</li>
        </ol>
    </div>
    <div class="apresentacao__referencia">
        <h1>Referências</h1>
        <ul>
            <li><a href="https://svelte.dev/">Site Svelte</a></li>
            <li><a href="https://kit.svelte.dev/">Site SvelteKit</a></li>
            <li><a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Documentação Svelte e SvelteKit</a></li>
            <li><a href="https://youtu.be/SVNTizLyuvo">Tutorial Svelte</a></li>
            <li><a href="https://youtu.be/2_rB5d1uXWs">Criando um novo Projeto do zero</a></li>
            <li><a href="https://youtu.be/1ikFumI2pXc">Tutorial de aplicação no SvelteKit</a></li>
        </ul>
    </div>
</div>

<style>
    .apresentacao {
        width: 100%;
        font-size: 25px !important;
    }

    .apresentacao__exemplo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 800px;
        gap: 40px;
    }

    .apresentacao__exemplo img{
        height: 600px;
        width: 400px;
    }

    h1 {
        color: var(--primary-color);
        font-size: 36px;
        margin-bottom: 20px;
    }

    .apresentacao__topicos ol {
        color: white;
    }

    .apresentacao__topicos li {
        height: 40px;
    }

    .apresentacao__referencia, .apresentacao__topicos {
        width: 50%;
        margin: 0 auto;
        margin-bottom: 30px;
        list-style-position: inside;
    }

    .apresentacao__referencia ul {
        color: white;
    }

    .apresentacao__referencia li {
        text-align: left;
        height: 40px;
    }

    @media (max-width: 1100px) {
        .apresentacao {
            font-size: 20px !important;
        }

        .apresentacao__exemplo img{
            height: 600px;
            width: 400px;
        }

        h1 {
            font-size: 32px;
        }

        .apresentacao__referencia, .apresentacao__topicos {
            width: 80%;
        }
    }

    @media (max-width: 799px) {
        .apresentacao {
            width: 90%;
            margin: 0 auto;
            font-size: 18px !important;
        }

        .apresentacao__exemplo {
            gap: 20px;
            height: auto;
            margin-bottom: 30px;
        }

        .apresentacao__exemplo img{
            height: 600px;
            width: 350px;
        }

        h1 {
            font-size: 28px;
        }

        .apresentacao__referencia, .apresentacao__topicos {
            width: 90%;
        }
    }

    @media (max-width: 500px) {
        .apresentacao {
            width: 100%;
            font-size: 16px !important;
        }

        .apresentacao__exemplo {
            gap: 10px;
        }

        .apresentacao__exemplo img{
            height: 370px;
            width: 250px;
        }

        h1 {
            font-size: 24px;
        }

        .apresentacao__referencia, .apresentacao__topicos {
            width: 90%;
        }

        .apresentacao__referencia li a {
            color: white;
        }
    }
</style>
