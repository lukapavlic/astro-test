import { getCollection, type CollectionKey } from 'astro:content';
export type Lang = 'sl' | 'en';
export const languages: Lang[] = ['sl', 'en'];
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const asset = (path: string) => `${base}/${path.replace(/^\//, '')}`;
export const href = (lang: Lang, path = '') => { const [pathname, fragment] = path.split('#'); return asset(`${lang}/${pathname ? pathname.replace(/^\/+|\/+$/g, '') + '/' : ''}${fragment ? '#' + fragment : ''}`); };
export const collection = async <T extends CollectionKey>(name: T, lang: Lang) => (await getCollection(name)).filter(e => e.data.lang === lang).sort((a,b) => a.data.order-b.data.order);
export const navigation = { en: [['research','Research'],['references','References'],['events','Events'],['people','People'],['industry','Industry Collaboration'],['about','About']], sl: [['research','Raziskovanje'],['references','Reference'],['events','Dogodki'],['people','Ljudje'],['industry','Sodelovanje z industrijo'],['about','O nas']] };
export const t = (lang: Lang, en: string, sl: string) => lang === 'en' ? en : sl;
export const dateLabel = (date: string, lang: Lang) => new Intl.DateTimeFormat(lang === 'sl' ? 'sl-SI' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Ljubljana' }).format(new Date(date));
export const eventDateLabel = (event: { date: string; endDate?: string }, lang: Lang) => {
  const time = (value: string) => new Intl.DateTimeFormat(lang === 'sl' ? 'sl-SI' : 'en-GB', { hour: 'numeric', minute: '2-digit', hourCycle: 'h23', timeZone: 'Europe/Ljubljana' }).format(new Date(value));
  const label = (value: string) => `${dateLabel(value, lang)}${value.includes('T') ? `, ${time(value)}` : ''}`;
  if (!event.endDate) return label(event.date);
  const sameDay = dateLabel(event.date, lang) === dateLabel(event.endDate, lang);
  return `${label(event.date)} – ${sameDay && event.endDate.includes('T') ? time(event.endDate) : label(event.endDate)}`;
};
export { isUpcoming } from './events';

export const referenceType = (type: string, lang: Lang) => ({'research-project':['Research','Raziskava'],publication:['Publication','Objava'],experiment:['Experiment','Eksperiment'],prototype:['Prototype','Prototip'],'case-study':['Case study','Študija primera'],method:['Method','Metoda'],pattern:['Pattern','Vzorec'],tool:['Tool','Orodje']}[type]?.[lang === 'en' ? 0 : 1] || type);
export const referenceGroup = (type: string) => ({'research-project':'research', publication:'publications', experiment:'experiments', prototype:'tools', tool:'tools', method:'methods', pattern:'methods', 'case-study':'research'}[type] || 'research');

export const eventType = (type: string, lang: Lang) => ({'public-talk':['Public talk','Javno predavanje'],'conference-talk':['Conference talk','Konferenčno predavanje'],'invited-talk':['Invited talk','Vabljeno predavanje'],workshop:['Workshop','Delavnica'],seminar:['Seminar','Seminar'],conference:['Conference','Konferenca'],'research-seminar':['Research seminar','Raziskovalni seminar'],'industry-event':['Industry event','Industrijski dogodek'],training:['Training','Izobraževanje']}[type]?.[lang === 'en' ? 0 : 1] || type);
