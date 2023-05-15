import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index2.js";
const User = "/_app/immutable/assets/ImgUser.a9ce5f59.svg";
const Email = "/_app/immutable/assets/ImgPhone.66f5795a.svg";
const Phone = "/_app/immutable/assets/Img-Email.0c5dc4aa.svg";
const Send = "/_app/immutable/assets/ImgSend.acbc088e.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contact.svelte-140b49k.svelte-140b49k{min-height:calc(100vh - 210px);height:auto;display:flex;justify-content:space-around;align-items:center}.contact__form.svelte-140b49k.svelte-140b49k{width:450px;color:var(--text-color);background-color:var(--black);border-radius:30px;padding:20px}.contact__form__title.svelte-140b49k.svelte-140b49k{font-size:25px;font-weight:400;text-align:center;padding:10px 0 20px}.contact__form__text.svelte-140b49k.svelte-140b49k{font-size:16px;text-align:center;opacity:0.4;padding-bottom:20px}.contact__form.svelte-140b49k input.svelte-140b49k{width:100%;height:50px;border-radius:25px;padding-left:60px;margin:12px 0;border:1px solid var(--secondary-color);background-color:transparent;color:var(--text-color)}.contact__form.svelte-140b49k input.svelte-140b49k:focus,.contact__form.svelte-140b49k textarea.svelte-140b49k:focus{outline:none;border-color:var(--yellow)}.contact__form.svelte-140b49k textarea.svelte-140b49k{width:100%;background-color:transparent;border:none;margin:12px 0;padding-left:20px;border-bottom:1px solid var(--secondary-color)}.contact__form.svelte-140b49k button.svelte-140b49k{margin:12px auto 0;width:100%;height:50px;background-color:var(--primary-color);border-radius:25px;border:none;color:#fff;font-size:18px;font-weight:400;letter-spacing:2px}.contact__form__email.svelte-140b49k.svelte-140b49k{display:block;text-align:center;margin:30px 0 8px}.contact__form__phone.svelte-140b49k.svelte-140b49k{display:block;text-align:center;margin:0 0 8px}.icon.svelte-140b49k.svelte-140b49k{position:absolute;height:22px;top:25px;left:21px}form.svelte-140b49k div.svelte-140b49k{position:relative}.contact__map.svelte-140b49k iframe.svelte-140b49k{width:450px;height:580px;border-radius:30px}@media(max-width: 500px){.contact.svelte-140b49k.svelte-140b49k{flex-direction:column;gap:40px}.contact__form.svelte-140b49k.svelte-140b49k{width:100%;margin:0 auto;border-radius:15px;padding:15px}.contact__form__title.svelte-140b49k.svelte-140b49k{font-size:22px;padding:5px 0 10px}.contact__form__text.svelte-140b49k.svelte-140b49k{font-size:16px;padding-bottom:15px}.contact__form.svelte-140b49k input.svelte-140b49k{height:40px;border-radius:20px;padding-left:35px;margin:8px 0;font-size:14px}.contact__form.svelte-140b49k textarea.svelte-140b49k{margin:8px 0;padding-left:10px;height:40px;font-size:14px}.contact__form.svelte-140b49k button.svelte-140b49k{margin:8px auto 0;height:40px;border-radius:20px;font-size:14px}.contact__form__email.svelte-140b49k.svelte-140b49k{margin:20px 0 5px;font-size:14px}.contact__form__phone.svelte-140b49k.svelte-140b49k{font-size:14px;margin:0 0 8px}.icon.svelte-140b49k.svelte-140b49k{height:16px;top:21px;left:11px}.contact__map.svelte-140b49k iframe.svelte-140b49k{width:100%;height:300px;margin-bottom:20px}}",
  map: null
};
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^\d{10}$/;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  let tel = "";
  $$result.css.add(css);
  return `<div class="contact svelte-140b49k"><div class="contact__form svelte-140b49k"><h1 class="contact__form__title svelte-140b49k">Entre em contato</h1>
        <p class="contact__form__text svelte-140b49k">Estamos sempre aqui para ajudar no que pudermos :)</p>
        <form method="post" class="svelte-140b49k"><div class="svelte-140b49k"><img class="icon svelte-140b49k"${add_attribute("src", User, 0)} alt="Icon User">
                <input type="text" id="nome" name="nome" placeholder="Nome" required${add_attribute("pattern", nameRegex, 0)} class="svelte-140b49k"${add_attribute("value", name, 0)}></div>
            <div class="svelte-140b49k"><img class="icon svelte-140b49k"${add_attribute("src", Email, 0)} alt="Icon E-mail">
                <input type="email" id="email" name="email" placeholder="Email" required${add_attribute("pattern", emailRegex, 0)} class="svelte-140b49k"${add_attribute("value", email, 0)}></div>
            <div class="svelte-140b49k"><img class="icon svelte-140b49k"${add_attribute("src", Phone, 0)} alt="Icon Phone">
                <input type="tel" id="telefone" name="telefone" placeholder="Phone" required${add_attribute("pattern", telRegex, 0)} class="svelte-140b49k"${add_attribute("value", tel, 0)}></div>
            <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." required class="svelte-140b49k">${""}</textarea>
            <div class="svelte-140b49k"><img class="icon svelte-140b49k"${add_attribute("src", Send, 0)} alt="Icon Send">
                <button type="submit" class="svelte-140b49k">Enviar</button></div></form>
        <span class="contact__form__email svelte-140b49k">contact@youremail.com</span>
        <span class="contact__form__phone svelte-140b49k">Phone +55 51 99999-5899</span></div>
    
    <div class="contact__map svelte-140b49k">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3472.9248554723727!2d-51.359703273731746!3d-29.489390125207777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua%20guilherme%20Winter%20Bom%20Princ%C3%ADpio%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1683349951156!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="svelte-140b49k"></iframe></div>
</div>`;
});
export {
  Page as default
};