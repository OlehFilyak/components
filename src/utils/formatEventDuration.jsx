import { formatDistance } from 'date-fns';

export const formatEventDuration = (start, end) => {
  return formatDistance(Date.parse(start), Date.parse(end));
};
