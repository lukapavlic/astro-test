import type {APIRoute} from 'astro';
import {asset} from '../lib/site';
export const GET:APIRoute=({site})=>new Response(`User-agent: *\nAllow: /\n${site?`Sitemap: ${new URL(asset('sitemap.xml'),site).href}\n`:''}`,{headers:{'Content-Type':'text/plain'}});
