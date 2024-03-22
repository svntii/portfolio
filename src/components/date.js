import { parseISO, format } from 'date-fns';

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export function DateShort({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM yyyy')}</time>;
}

