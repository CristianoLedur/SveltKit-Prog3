import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index2.js";
const global = "";
const Bars = "/_app/immutable/assets/bars.f512fddf.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-e8ilpp.svelte-e8ilpp{height:80px;max-width:1200px;margin:0 auto;display:flex;justify-content:space-around;align-items:center;gap:348px}#logo.svelte-e8ilpp.svelte-e8ilpp{color:var(--primary-color);font-size:50px;font-weight:bold}.hamburger.svelte-e8ilpp.svelte-e8ilpp,.close-modal.svelte-e8ilpp.svelte-e8ilpp{display:none}.hamburger.svelte-e8ilpp img.svelte-e8ilpp{height:40px;width:40px}nav.svelte-e8ilpp.svelte-e8ilpp,#menu-modal.svelte-e8ilpp.svelte-e8ilpp,.modal-content.svelte-e8ilpp.svelte-e8ilpp{width:auto}.modal-content.svelte-e8ilpp.svelte-e8ilpp{display:block}ul.svelte-e8ilpp.svelte-e8ilpp{list-style:none;display:flex;justify-content:space-between;gap:60px}@media(min-width: 800px){header.svelte-e8ilpp.svelte-e8ilpp{max-width:auto;width:90%;gap:0;justify-content:space-between}#logo.svelte-e8ilpp.svelte-e8ilpp{font-size:40px}ul.svelte-e8ilpp.svelte-e8ilpp{gap:30px}}@media(max-width: 799px){header.svelte-e8ilpp.svelte-e8ilpp{height:60px;width:90%;margin:0 auto;justify-content:space-between;align-items:center;gap:0}#logo.svelte-e8ilpp.svelte-e8ilpp{font-size:30px;padding-left:15px}.hamburger.svelte-e8ilpp.svelte-e8ilpp{display:block;height:40px;width:40px;margin-right:15px;background-color:transparent;border:none}.close-modal.svelte-e8ilpp.svelte-e8ilpp{display:block;position:fixed;top:15px;right:15px;font-weight:bold;background-color:transparent;border:1px solid;color:var(--primary-color);padding:8px;margin:0}.modal-content.svelte-e8ilpp.svelte-e8ilpp{position:fixed;height:100vh;width:60%;right:0;top:0;z-index:1;background-color:#131010fa}ul.svelte-e8ilpp.svelte-e8ilpp{flex-direction:column;padding:55px 0 0 25px;gap:20px}li.svelte-e8ilpp.svelte-e8ilpp{opacity:1}}",
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
<header class="svelte-e8ilpp"><a id="logo" href="/" class="svelte-e8ilpp">Galleria</a>
    <nav data-sveltekit-reload class="svelte-e8ilpp"><div id="menu-modal" class="modal svelte-e8ilpp"><button class="hamburger svelte-e8ilpp"><img${add_attribute("src", Bars, 0)} alt="Hamburger" class="svelte-e8ilpp"></button>
            ${open ? `<div class="modal-content svelte-e8ilpp"><button class="close-modal svelte-e8ilpp">X</button>
                    <ul class="svelte-e8ilpp"><li class="svelte-e8ilpp"><a href="/">Home</a></li>
                        <li class="svelte-e8ilpp"><a href="/fotos">Fotos</a></li>
                        <li class="svelte-e8ilpp"><a href="/contato">Contato</a></li>
                        <li class="svelte-e8ilpp"><a href="/sobre">Sobre</a></li></ul></div>` : ``}</div></nav>
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
