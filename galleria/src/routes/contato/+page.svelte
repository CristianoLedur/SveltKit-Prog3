<script>
    import User from '../../lib/assets/ImgUser.svg';
    import Email from '../../lib/assets/ImgPhone.svg';
    import Phone from '../../lib/assets/Img-Email.svg';
    import Send from '../../lib/assets/ImgSend.svg';

    let name = "";
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/;
    let email = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let tel = "";
    const telRegex = /^\d{10}$/;
    let message = "";

    let status = false;

    function handleSubmit() {
        alert("teste");
    }
</script>

<div class="contact">
    <div class="contact__form">
        <h1 class="contact__form__title">Entre em contato</h1>
        <p class="contact__form__text">Estamos sempre aqui para ajudar no que pudermos :)</p>
        <form method="post" on:submit|preventDefault={handleSubmit}>
            <div>
                <img class="icon" src={User} alt="Icon User">
                <input type="text" bind:value={name} id="nome" name="nome" placeholder="Nome" required pattern={nameRegex}/>
            </div>
            <div>
                <img class="icon" src={Email} alt="Icon E-mail">
                <input type="email" bind:value={email} id="email" name="email" placeholder="Email" required pattern={emailRegex}/>
            </div>
            <div>
                <img class="icon" src={Phone} alt="Icon Phone">
                <input type="tel" bind:value={tel} id="telefone" name="telefone" placeholder="Phone" required pattern={telRegex}/>
            </div>
            <textarea bind:value={message} id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." required></textarea>
            <div>
                <img class="icon" src={Send} alt="Icon Send">
                <button type="submit">Enviar</button>
            </div>
            
        </form>
        <span class="contact__form__email">contact@youremail.com</span>
        <span class="contact__form__phone">Phone +55 51 99999-5899</span>
    </div>
    
    <div class="contact__map">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3472.9248554723727!2d-51.359703273731746!3d-29.489390125207777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua%20guilherme%20Winter%20Bom%20Princ%C3%ADpio%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1683349951156!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

<style>

    .contact {
        min-height: calc(100vh - 210px);
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    /* form */

    .contact__form {
        width: 450px;
        color: var(--text-color);
        background-color: var(--black);
        border-radius: 30px;
        padding: 20px;
    }

    .contact__form__title {
        font-size: 25px;
        font-weight: 400;
        text-align: center;
        padding: 10px 0 20px;
    }

    .contact__form__text {
        font-size: 16px;
        text-align: center;
        opacity: 0.4;
        padding-bottom: 20px;
    }

    .contact__form input {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        padding-left: 60px;
        margin: 12px 0;
        border: 1px solid var(--secondary-color);
        background-color: transparent;

        color: var(--text-color);
    }

    .contact__form input:focus, .contact__form textarea:focus {
        outline: none;
        border-color: var(--yellow);
    }

    .contact__form textarea {
        width: 100%;
        background-color: transparent;
        border: none;
        margin: 12px 0;
        padding-left: 20px;
        border-bottom: 1px solid var(--secondary-color);
    }

    .contact__form button {
        margin: 12px auto 0;
        width: 100%;
        height: 50px;
        background-color: var(--primary-color);
        border-radius: 25px;
        border: none;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 2px;
    }

    .contact__form__email{
        display: block;
        text-align: center;
        margin: 30px 0 8px;
    }

    .contact__form__phone {
        display: block;
        text-align: center;
        margin: 0 0 8px;
    }

    .icon {
        position: absolute;
        height: 22px;
        top: 25px;
        left: 21px;
    }

    form div {
        position: relative;
    }

    /* map */

    .contact__map iframe {
        width: 450px;
        height: 580px;
        border-radius: 30px;
    }

    @media (max-width: 1100px) {
        .contact {
            flex-direction: column;
            gap: 40px;
        }
    }

    @media (max-width: 500px) {

        /* form */

        .contact__form {
            width: 100%;
            margin: 0 auto;
            border-radius: 15px;
            padding: 15px;
        }

        .contact__form__title {
            font-size: 22px;
            padding: 5px 0 10px;
        }

        .contact__form__text {
            font-size: 16px;
            padding-bottom: 15px;
        }

        .contact__form input {
            height: 40px;
            border-radius: 20px;
            padding-left: 35px;
            margin: 8px 0;

            font-size: 14px;
        }

        .contact__form textarea {
            margin: 8px 0;
            padding-left: 10px;
            height: 40px;
            font-size: 14px;
        }

        .contact__form button {
            margin: 8px auto 0;
            height: 40px;
            border-radius: 20px;
            font-size: 14px;
        }

        .contact__form__email{
            margin: 20px 0 5px;
            font-size: 14px;
        }

        .contact__form__phone {
            font-size: 14px;
            margin: 0 0 8px;
        }

        .icon {
            height: 16px;
            top: 21px;
            left: 11px;
        }

        /* map */

        .contact__map iframe {
            width: 100%;
            height: 400px;
            margin-bottom: 20px;
        }

        iframe {
            width: 100%;
        }
    }
</style>
