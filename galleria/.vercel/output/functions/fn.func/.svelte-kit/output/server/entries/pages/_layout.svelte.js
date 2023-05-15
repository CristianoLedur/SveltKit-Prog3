import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index2.js";
const global = "";
const Bars = "/_app/immutable/assets/bars.f512fddf.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1fmfrus.svelte-1fmfrus{height:80px;max-width:1200px;margin:0 auto;padding:10px 0;display:flex;justify-content:space-around;align-items:center;gap:348px}#logo.svelte-1fmfrus.svelte-1fmfrus{color:var(--primary-color);font-size:50px;font-weight:bold}.hamburger.svelte-1fmfrus.svelte-1fmfrus,.close-modal.svelte-1fmfrus.svelte-1fmfrus{display:none}.hamburger.svelte-1fmfrus img.svelte-1fmfrus{height:40px;width:40px}nav.svelte-1fmfrus.svelte-1fmfrus,#menu-modal.svelte-1fmfrus.svelte-1fmfrus,.modal-content.svelte-1fmfrus.svelte-1fmfrus{width:auto}.modal-content.svelte-1fmfrus.svelte-1fmfrus{display:block}ul.svelte-1fmfrus.svelte-1fmfrus{list-style:none;display:flex;justify-content:space-between;gap:45px}@media(max-width: 1164px){header.svelte-1fmfrus.svelte-1fmfrus{padding-top:15px;max-width:auto;width:90%;gap:0;justify-content:space-between}#logo.svelte-1fmfrus.svelte-1fmfrus{font-size:40px}ul.svelte-1fmfrus.svelte-1fmfrus{gap:20px}}@media(max-width: 799px){header.svelte-1fmfrus.svelte-1fmfrus{height:60px;width:90%;margin:0 auto;justify-content:space-between;align-items:center;gap:0}#logo.svelte-1fmfrus.svelte-1fmfrus{font-size:30px;padding-left:15px}.hamburger.svelte-1fmfrus.svelte-1fmfrus{display:block;height:40px;width:40px;margin-right:15px;background-color:transparent;border:none}.close-modal.svelte-1fmfrus.svelte-1fmfrus{display:block;position:fixed;top:15px;right:15px;font-weight:bold;background-color:transparent;border:1px solid;color:var(--primary-color);padding:8px;margin:0}.modal-content.svelte-1fmfrus.svelte-1fmfrus{position:fixed;height:100vh;width:60%;right:0;top:0;z-index:1;background-color:#131010fa}ul.svelte-1fmfrus.svelte-1fmfrus{flex-direction:column;padding:55px 0 0 25px;gap:20px}li.svelte-1fmfrus.svelte-1fmfrus{opacity:1}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  setTimeout(
    () => {
      {
        open = false;
      }
    },
    100
  );
  $$result.css.add(css$1);
  return `
<header class="svelte-1fmfrus"><a id="logo" href="/" class="svelte-1fmfrus">Galleria</a>
    <nav data-sveltekit-reload class="svelte-1fmfrus"><div id="menu-modal" class="modal svelte-1fmfrus"><button class="hamburger svelte-1fmfrus"><img${add_attribute("src", Bars, 0)} alt="Hamburger" class="svelte-1fmfrus"></button>
            ${open ? `<div class="modal-content svelte-1fmfrus"><button class="close-modal svelte-1fmfrus">X</button>
                    <ul class="svelte-1fmfrus"><li class="svelte-1fmfrus"><a href="/">Home</a></li>
                        <li class="svelte-1fmfrus"><a href="/fotos">Fotos</a></li>
                        <li class="svelte-1fmfrus"><a href="/contato">Contato</a></li>
                        <li class="svelte-1fmfrus"><a href="/sobre">Sobre</a></li>
                        <li class="svelte-1fmfrus"><a href="/exemplos">Exemplos</a></li></ul></div>` : ``}</div></nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-xenqix{height:50px;width:100%;margin:20px auto 0}p.svelte-xenqix{text-align:center;font-size:18px}span.svelte-xenqix{color:var(--primary-color)\r\n    }@media(max-width: 500px){footer.svelte-xenqix{height:30px;margin:15px auto 0}p.svelte-xenqix{font-size:14px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-xenqix"><p class="svelte-xenqix"><span class="svelte-xenqix">Galleria</span> © 2023</p>
</footer>`;
});
const ScrollTop = "/_app/immutable/assets/ImgArrow-up.38348cde.svg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}
	<button id="btnTopo"><img${add_attribute("src", ScrollTop, 0)} alt="Arrow top"></button></main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
