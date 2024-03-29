import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export function DateShort({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM yyyy')}</time>;
}

export function DateShortString({ dateString }) {
  const date = parseISO(dateString);
  return format(date, 'MMMM yyyy');
}
