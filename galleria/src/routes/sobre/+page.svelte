<script>
    import LogoSvelte from '../../lib/assets/ImgSvelte.svg';
</script>

<div class="box__about">
    <h1 class="title">Sobre Nós</h1>
    <p class="text">
        Seja bem-vindo à nossa galeria de fotos! Este projeto foi desenvolvido utilizando a tecnologia Svelte, como parte da disciplina de Programação III do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal do Rio Grande do Sul.
    </p>
    <div class="text">
        <img class="logos" src="https://moodle.feliz.ifrs.edu.br/pluginfile.php/1/theme_adaptable/logo/1676556042/logo-campus-feliz-ifrs.png" alt="Logo IFRS Campus Feliz"/>
    </div>
    <p class="text">
        Nossa galeria contém vários álbuns, cada um com uma coleção única de fotos. Utilizamos a API para manipular e exibir esses dados em um formato elegante e fácil de usar, aproveitando a eficiência e agilidade do Svelte.
    </p>
    <span class="text-6xl bold text">{`{JSON} Placeholder`}</span>
    <p class="text">
        Nosso objetivo é fornecer uma experiência de visualização de fotos agradável e intuitiva para nossos usuários. Com a ajuda do Svelte, conseguimos criar uma aplicação web altamente responsiva e interativa, que permite aos usuários explorar nossos álbuns de fotos de forma fluida e rápida.
    </p>
    <div class="text">
        <img id="logo-Svelte" src={LogoSvelte} alt="Logo Svelte"> 
    </div>
    <p class="text">
        Este projeto foi desenvolvido com muito empenho e dedicação pela nossa equipe de desenvolvedores, que está sempre buscando utilizar as melhores tecnologias para criar soluções inovadoras e de alta qualidade. Esperamos que você goste de explorar nossa galeria de fotos tanto quanto nós gostamos de criá-la com a ajuda do Svelte!
    </p>
</div>


<style>
    .box__about {
        min-height: calc(100vh - 160px);
        height: auto;
        width: 100%;
    }

    .title {
        text-align: center;
        font-size: 40px;
        padding: 30px 0;
        color: var(--text-color);
    }

    .text {
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 1px;
        height: 200px;
        color: var(--text-color);
        margin: 40px 0;
    }

    .text:nth-child(2) {
        margin-top: 0;
        float: left;
        width: 55%;
    }

    .text:nth-child(3) {
        margin-top: 0;
        float: right;
        width: 35%;
    }

    .text:nth-child(4) {
        float: right;
        justify-content: center;
        width: 55%;
    }

    .text:nth-child(5) {
        float: left;
        width: 35%;
        
        justify-content: center;
        text-align: center;
        color: #fff;
        font-size: 35px;
    }

    .text:nth-child(6) {
        float: left;
        width: 55%;
    }

    .text:nth-child(7) {
        float: right;
        width: 30%;
        justify-content: center;
        margin-bottom: 80px;
    }

    .text:nth-child(8) {
        height: auto;
        align-items: flex-start;
        float:none;
        width: 100%;
    }

    .logos {
        height: 100px;
    }

    @media (max-width: 500px) {
        .title {
            float: left;
            font-size: 24px;
            padding: 10px 0 15px;
        }

        .text {
            font-size: 14px;
            line-height: 20px;
            height: auto;
            margin: 20px 0;
        }

        .text:nth-child(2) {
            float: none;
            width: 100%;
        }

        .text:nth-child(3) {
            float: none;
            padding: 25px 0;
            width: 100%;
        }

        .text:nth-child(4) {
            float: none;
            width: 100%;
        }

        .text:nth-child(5) {
            float: none;
            width: 100%;
            font-size: 30px;
            justify-content: center;
            padding: 40px 0;
        }

        .text:nth-child(6) {
            float: none;
            width: 100%;
        }

        .text:nth-child(7) {
            float: none;
            width: 100%;
            margin-bottom: 0;
            padding: 10px 0;
            justify-content: center;
        }
        
		#logo-Svelte {
			padding-left: 55px;
		}
	}
</style>

