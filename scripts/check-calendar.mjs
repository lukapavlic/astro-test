import assert from 'node:assert/strict';
import { isUpcoming } from '../src/lib/events.ts';
const event=(date,status='upcoming',endDate)=>({data:{date,status,endDate}});
assert.equal(isUpcoming(event('2026-11-26T17:00:00+01:00'),new Date('2026-11-26T23:59:00+01:00')),true,'An event remains current throughout its local date');
assert.equal(isUpcoming(event('2026-11-26T17:00:00+01:00'),new Date('2026-11-27T00:01:00+01:00')),false,'An event is archived after its local day, even before UTC midnight');
assert.equal(isUpcoming(event('2026-11-26','past'),new Date('2026-11-03')),false,'Explicitly past status overrides a future date');
assert.equal(isUpcoming(event('2026-11-26T17:00:00+01:00','upcoming','2026-11-28T20:00:00+01:00'),new Date('2026-11-28T23:59:00+01:00')),true,'Multi-day events use their end date');
assert.equal(isUpcoming(event('2026-11-26'),new Date('2026-11-03')),true,'Date-only entries are supported');
console.log('PASS: 5 event-calendar timezone, date-only, archive and end-date cases.');
