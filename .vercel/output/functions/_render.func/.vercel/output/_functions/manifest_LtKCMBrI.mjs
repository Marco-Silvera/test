import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_bg_HQaab.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Bh2iU0um.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Marco%20Silvera/Desktop/Sitio%20Web/repositorios/test/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/add","isIndex":false,"type":"page","pattern":"^\\/add\\/?$","segments":[[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add.astro","pathname":"/add","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/friends/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/friends\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"friends","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/friends/[id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/friends","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/friends\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"friends","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/friends/index.ts","pathname":"/api/friends","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"delete-document\"),n=document.querySelector(\"form\")?.getAttribute(\"action\");t.addEventListener(\"click\",async()=>{const e=await fetch(n,{method:\"DELETE\"});e.redirected&&window.location.assign(e.url)});\n"}],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/edit/[id]","isIndex":false,"type":"page","pattern":"^\\/edit\\/([^/]+?)\\/?$","segments":[[{"content":"edit","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/edit/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/friend/[id]","isIndex":false,"type":"page","pattern":"^\\/friend\\/([^/]+?)\\/?$","segments":[[{"content":"friend","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/friend/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CbDxbAFY.js"}],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/add.BKCEfocJ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/edit/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/friend/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/add@_@astro":"pages/add.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/friends/[id]@_@ts":"pages/api/friends/_id_.astro.mjs","\u0000@astro-page:src/pages/api/friends/index@_@ts":"pages/api/friends.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/edit/[id]@_@astro":"pages/edit/_id_.astro.mjs","\u0000@astro-page:src/pages/friend/[id]@_@astro":"pages/friend/_id_.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Marco Silvera/Desktop/Sitio Web/repositorios/test/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_LtKCMBrI.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/astro/hoisted.js?q=0":"_astro/hoisted.DfR1XVfl.js","/astro/hoisted.js?q=1":"_astro/hoisted.CbDxbAFY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/add.BKCEfocJ.css","/favicon.svg","/_astro/client.5I5BMcNS.js","/_astro/hoisted.CbDxbAFY.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Ipzxn2dp9e8W1iUOGjJzhL0g5xkaEIuJLWhilbbEY9g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
