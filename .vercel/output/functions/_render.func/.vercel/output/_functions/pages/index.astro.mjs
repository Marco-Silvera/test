/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Bh2iU0um.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BTKL6Dqq.mjs';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const db = getFirestore(app);
  const friendsRef = db.collection("friends");
  const friendsSnapshot = await friendsRef.get();
  const friends = friendsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lista de Amigos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Lista de Amigos</h1> <ul> ${friends.map((friend) => renderTemplate`<li${addAttribute(friend.id, "id")}> <a${addAttribute(`/friend/${friend.id}`, "href")}>${friend.name}</a> <span> (${friend.age})</span> <strong> ${friend.isBestFriend ? "Mejor amigo" : "Amigo"} </strong> </li>`)} </ul> ` })}`;
}, "D:/Desarrollo web/Frontend/repositorios/test/src/pages/index.astro", void 0);

const $$file = "D:/Desarrollo web/Frontend/repositorios/test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
