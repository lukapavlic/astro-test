/** Static calendar: compare event days in the lab's local timezone, not UTC. */
export const isUpcoming = (event: {data:{date:string;endDate?:string;status:string}}, now = new Date()) => {
  const day = (date: Date) => new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Ljubljana',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
  return event.data.status === 'upcoming' && day(new Date(event.data.endDate || event.data.date)) >= day(now);
};
