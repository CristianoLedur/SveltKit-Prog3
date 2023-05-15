import { c as create_ssr_component, a as add_attribute, e as escape } from "./index2.js";
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1tvbhkd{position:relative;width:350px;height:400px;padding:20px;background-color:var(--yellow);border-bottom-left-radius:30px;border-bottom-right-radius:30px}img.svelte-1tvbhkd{width:100%}h2.svelte-1tvbhkd{color:var(--black);font-size:16px;text-align:center;width:100%;padding:10px;font-weight:400}@media(max-width: 500px){div.svelte-1tvbhkd{width:90%;height:340px;margin:0 auto}}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css);
  return `<div class="svelte-1tvbhkd"><img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.title, 0)} class="svelte-1tvbhkd">
    <h2 class="svelte-1tvbhkd">${escape(image.title)}</h2>
</div>`;
});
export {
  Image as I
};
