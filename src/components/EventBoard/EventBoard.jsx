import s from './EventBoard.module.css';
import { Event } from '../Event/Event';
export const EventBoard = ({ events }) => {
  return (
    <div className={s.eventBoard}>
      {events.map(event => (
        <Event
          key={event.name}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          start={event.time.start}
          end={event.time.end}
          duration={
            (new Date(event.time.end) - new Date(event.time.start)) / 1000
          }
        />
      ))}
    </div>
  );
};
