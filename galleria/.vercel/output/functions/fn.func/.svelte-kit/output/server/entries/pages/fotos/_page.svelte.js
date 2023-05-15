import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index2.js";
import { I as Image } from "../../../chunks/Image.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".galery__photos.svelte-wv8ws3{display:grid;grid-template-columns:repeat(3, auto);gap:50px}.galery__photos__see-more.svelte-wv8ws3{width:350px;margin:50px auto}button.svelte-wv8ws3{width:100%;height:60px;cursor:pointer;background-color:var(--primary-color);border-radius:30px;border:none;color:#fff;font-size:22px;font-weight:400;letter-spacing:2px}@media(max-width: 1100px){.galery__photos.svelte-wv8ws3{grid-template-columns:repeat(2, auto);gap:40px}.galery__photos__see-more.svelte-wv8ws3{width:300px}}@media(max-width: 799px){.galery__photos.svelte-wv8ws3{grid-template-columns:repeat(1, auto)}}@media(max-width: 500px){.galery__photos.svelte-wv8ws3{grid-template-columns:repeat(1, auto);gap:40px}.galery__photos__see-more.svelte-wv8ws3{width:170px;margin:40px auto}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let photos = [];
  let numItens;
  setTimeout(
    () => {
      {
        numItens = 9;
      }
    },
    100
  );
  $$result.css.add(css);
  return `
<div class="galery__photos svelte-wv8ws3">${each(photos.slice(0, numItens), (photo) => {
    return `${validate_component(Image, "Imagem").$$render($$result, { image: photo }, {}, {})}`;
  })}</div>
<div class="galery__photos__see-more svelte-wv8ws3"><button class="svelte-wv8ws3">ver mais</button>
</div>`;
});
export {
  Page as default
};
