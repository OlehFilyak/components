import { ImLocation2 } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { GiDuration } from 'react-icons/gi';

import s from './Event.module.css';
import { formatEventDuration } from '../../utils';
import { formatEventStart } from '../../utils';
export const Event = ({ name, location, speaker, start, end, chip }) => {
  const startDate = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={s.event}>
      <h2 className={s.title}>{name}</h2>
      <p className={s.info}>
        <ImLocation2 className={s.icon} size="16" />
        {location}
      </p>
      <p className={s.info}>
        <FaUser className={s.icon} size="16" />
        {speaker}
      </p>
      <p className={s.info}>
        <BiTimeFive className={s.icon} size="16" />
        {startDate}
      </p>
      <p className={s.info}>
        <GiDuration className={s.icon} size="16" />
        {duration}
      </p>
      <span className={`${s[chip]} ${s.chip}`}>{chip}</span>
    </div>
  );
};
