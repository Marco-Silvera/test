import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CIX8_Hbh.mjs';
import { manifest } from './manifest_BsscwviN.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/add.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/api/friends/_id_.astro.mjs');
const _page6 = () => import('./pages/api/friends.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/edit/_id_.astro.mjs');
const _page9 = () => import('./pages/friend/_id_.astro.mjs');
const _page10 = () => import('./pages/register.astro.mjs');
const _page11 = () => import('./pages/signin.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/add.astro", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/api/friends/[id].ts", _page5],
    ["src/pages/api/friends/index.ts", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/edit/[id].astro", _page8],
    ["src/pages/friend/[id].astro", _page9],
    ["src/pages/register.astro", _page10],
    ["src/pages/signin.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1946236c-9850-4d03-a75e-1108b3a26b92",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
