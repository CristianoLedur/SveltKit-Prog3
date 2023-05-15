import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/index2.js";
const ButtonExemplo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-4g6hr6{height:40px;width:40px;border-radius:50%;background-color:var(--primary-color);border:none;font-size:25px;padding-bottom:5px}@media(max-width: 500px){button.svelte-4g6hr6{height:35px;width:35px;font-size:20px;padding-bottom:2px}}",
  map: null
};
const ButtonExemplo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { exec } = $$props;
  if ($$props.exec === void 0 && $$bindings.exec && exec !== void 0)
    $$bindings.exec(exec);
  $$result.css.add(css$1);
  return `<button class="svelte-4g6hr6">${slots.default ? slots.default({}) : ``}
</button>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".apresentacao.svelte-1genyfo.svelte-1genyfo{width:100%;font-size:25px !important}.apresentacao__exemplo.svelte-1genyfo.svelte-1genyfo{display:flex;justify-content:center;align-items:center;height:800px;gap:40px}.apresentacao__exemplo.svelte-1genyfo img.svelte-1genyfo{height:600px;width:400px}h1.svelte-1genyfo.svelte-1genyfo{color:var(--primary-color);font-size:36px;margin-bottom:20px}.apresentacao__topicos.svelte-1genyfo ol.svelte-1genyfo{color:white}.apresentacao__topicos.svelte-1genyfo li.svelte-1genyfo{height:40px}.apresentacao__referencia.svelte-1genyfo.svelte-1genyfo,.apresentacao__topicos.svelte-1genyfo.svelte-1genyfo{width:50%;margin:0 auto;margin-bottom:30px;list-style-position:inside}.apresentacao__referencia.svelte-1genyfo ul.svelte-1genyfo{color:white}.apresentacao__referencia.svelte-1genyfo li.svelte-1genyfo{text-align:left;height:40px}@media(max-width: 1100px){.apresentacao.svelte-1genyfo.svelte-1genyfo{font-size:20px !important}.apresentacao__exemplo.svelte-1genyfo img.svelte-1genyfo{height:600px;width:400px}h1.svelte-1genyfo.svelte-1genyfo{font-size:32px}.apresentacao__referencia.svelte-1genyfo.svelte-1genyfo,.apresentacao__topicos.svelte-1genyfo.svelte-1genyfo{width:80%}}@media(max-width: 799px){.apresentacao.svelte-1genyfo.svelte-1genyfo{width:90%;margin:0 auto;font-size:18px !important}.apresentacao__exemplo.svelte-1genyfo.svelte-1genyfo{gap:20px;height:auto;margin-bottom:30px}.apresentacao__exemplo.svelte-1genyfo img.svelte-1genyfo{height:600px;width:350px}h1.svelte-1genyfo.svelte-1genyfo{font-size:28px}.apresentacao__referencia.svelte-1genyfo.svelte-1genyfo,.apresentacao__topicos.svelte-1genyfo.svelte-1genyfo{width:90%}}@media(max-width: 500px){.apresentacao.svelte-1genyfo.svelte-1genyfo{width:100%;font-size:16px !important}.apresentacao__exemplo.svelte-1genyfo.svelte-1genyfo{gap:10px}.apresentacao__exemplo.svelte-1genyfo img.svelte-1genyfo{height:370px;width:250px}h1.svelte-1genyfo.svelte-1genyfo{font-size:24px}.apresentacao__referencia.svelte-1genyfo.svelte-1genyfo,.apresentacao__topicos.svelte-1genyfo.svelte-1genyfo{width:90%}.apresentacao__referencia.svelte-1genyfo li a.svelte-1genyfo{color:white}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let image = data.image;
  let count = 1;
  function increment() {
    if (count == 2) {
      count = 0;
    } else {
      count += 1;
    }
  }
  function decrement() {
    if (count == 0) {
      count = 2;
    } else {
      count -= 1;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="apresentacao svelte-1genyfo"><div class="apresentacao__exemplo svelte-1genyfo">${validate_component(ButtonExemplo, "Button").$$render($$result, { exec: decrement }, {}, {
    default: () => {
      return `⬅
        `;
    }
  })}
        <img${add_attribute("src", image[count].url, 0)}${add_attribute("alt", image[count].alt, 0)} class="svelte-1genyfo">
        ${validate_component(ButtonExemplo, "Button").$$render($$result, { exec: increment }, {}, {
    default: () => {
      return `➡
        `;
    }
  })}</div>
    <div class="apresentacao__topicos svelte-1genyfo"><h1 class="svelte-1genyfo">Tópicos</h1>
        <ol class="svelte-1genyfo"><li class="svelte-1genyfo">Componentes</li>
            <li class="svelte-1genyfo">SSR e CSR</li>
            <li class="svelte-1genyfo">Rotas</li>
            <li class="svelte-1genyfo">Integração com API</li>
            <li class="svelte-1genyfo">Gerenciamento de estado</li>
            <li class="svelte-1genyfo">Desenvolvimento e construção</li></ol></div>
    <div class="apresentacao__referencia svelte-1genyfo"><h1 class="svelte-1genyfo">Referências</h1>
        <ul class="svelte-1genyfo"><li class="svelte-1genyfo"><a href="https://svelte.dev/" class="svelte-1genyfo">Site Svelte</a></li>
            <li class="svelte-1genyfo"><a href="https://kit.svelte.dev/" class="svelte-1genyfo">Site SvelteKit</a></li>
            <li class="svelte-1genyfo"><a href="https://learn.svelte.dev/tutorial/welcome-to-svelte" class="svelte-1genyfo">Documentação Svelte e SvelteKit</a></li>
            <li class="svelte-1genyfo"><a href="https://youtu.be/SVNTizLyuvo" class="svelte-1genyfo">Tutorial Svelte</a></li>
            <li class="svelte-1genyfo"><a href="https://youtu.be/2_rB5d1uXWs" class="svelte-1genyfo">Criando um novo Projeto do zero</a></li>
            <li class="svelte-1genyfo"><a href="https://youtu.be/1ikFumI2pXc" class="svelte-1genyfo">Tutorial de aplicação no SvelteKit</a></li></ul></div>
</div>`;
});
export {
  Page as default
};
