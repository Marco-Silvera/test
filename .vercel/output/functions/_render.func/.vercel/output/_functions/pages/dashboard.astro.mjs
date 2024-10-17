/* empty css                               */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Bh2iU0um.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { $ as $$Layout } from '../chunks/Layout_BTKL6Dqq.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const db = getFirestore(app);
  const friendsRef = db.collection("friends");
  const friendsSnapshot = await friendsRef.get();
  const friends = friendsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mis amigos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Amigos</h1> <ul> ${friends.map((friend) => renderTemplate`<li> <a${addAttribute(`/friend/${friend.id}`, "href")}>${friend.name}</a> <span>(${friend.age})</span> <strong> ${friend.isBestFriend ? "Mejor amigo" : "Amigo"} </strong> <a${addAttribute(`/edit/${friend.id}`, "href")}>Editar</a> </li>`)} </ul> ` })}`;
}, "D:/Desarrollo web/Frontend/repositorios/test/src/pages/dashboard.astro", void 0);

const $$file = "D:/Desarrollo web/Frontend/repositorios/test/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
