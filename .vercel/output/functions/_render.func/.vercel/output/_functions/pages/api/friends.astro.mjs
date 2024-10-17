import { a as app } from '../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";
  if (!name || !age) {
    return new Response("Faltan campos obligatorios", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("friends");
    await friendsRef.add({
      name,
      age: parseInt(age),
      isBestFriend
    });
  } catch (error) {
    return new Response("Algo salió mal", {
      status: 500
    });
  }
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
