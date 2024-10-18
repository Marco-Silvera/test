/* empty css                                  */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Bh2iU0um.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BhJoR5pO.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": friend.name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${friend.name}</h1> <p>Edad: ${friend.age}</p> <p>Es mejor amigo: ${friend.isBestFriend ? "Si" : "No"}</p> ` })}`;
}, "C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/friend/[id].astro", void 0);

const $$file = "C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/friend/[id].astro";
const $$url = "/friend/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
