/* empty css                                  */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Bh2iU0um.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BTKL6Dqq.mjs';
import { a as app } from '../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const friendsRef = db.collection("friends");
  const friendSnapshot = await friendsRef.doc(id).get();
  if (!friendSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const friend = friendSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Editar {friend.name}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Editar ${friend.name}</h1> <p>Aquí puedes editar o borrar los datos de tus amigos.</p> <form method="post"${addAttribute(`/api/friends/${id}`, "action")}> <label for="name">Nombre</label> <input type="text" id="name" name="name"${addAttribute(friend.name, "value")}> <label for="age">Edad</label> <input type="number" id="age" name="age"${addAttribute(friend.age, "value")}> <label for="isBestFriend">¿Es mejor amigo?</label> <input type="checkbox" id="isBestFriend" name="isBestFriend"${addAttribute(friend.isBestFriend, "checked")}> <button type="submit">Editar amigo</button> </form> <button type="button" id="delete-document">Eliminar</button> ` })} `;
}, "D:/Desarrollo web/Frontend/repositorios/test/src/pages/edit/[id].astro", void 0);

const $$file = "D:/Desarrollo web/Frontend/repositorios/test/src/pages/edit/[id].astro";
const $$url = "/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
