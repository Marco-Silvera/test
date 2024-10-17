/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bh2iU0um.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BTKL6Dqq.mjs';
export { renderers } from '../renderers.mjs';

const $$Add = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agregar un nuevo amigo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Agregar un nuevo amigo</h1> <form method="post" action="/api/friends"> <label for="name">Nombre</label> <input type="text" id="name" name="name"> <label for="age">Edad</label> <input type="number" id="age" name="age"> <label for="isBestFriend">¿Es mejor amigo?</label> <input type="checkbox" id="isBestFriend" name="isBestFriend"> <button type="submit">Añadir amigo</button> </form> ` })}`;
}, "D:/Desarrollo web/Frontend/repositorios/test/src/pages/add.astro", void 0);

const $$file = "D:/Desarrollo web/Frontend/repositorios/test/src/pages/add.astro";
const $$url = "/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
