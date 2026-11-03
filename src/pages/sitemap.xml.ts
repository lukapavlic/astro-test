import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { href } from '../lib/site';
export const GET: APIRoute = async ({site}) => {
  if(!site) return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',{headers:{'Content-Type':'application/xml'}});
  const paths=['sl','en'].flatMap(lang=>['','research','references','events','people','industry','about'].map(page=>href(lang as 'sl'|'en',page)));
  for(const name of ['research','references','events','people'] as const){for(const entry of await getCollection(name)){if(name==='people'&&'memberType' in entry.data&&entry.data.memberType==='collaborator')continue;paths.push(href(entry.data.lang,`${name}/${entry.data.key}`));}}
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${new URL(path,site).href}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
};
