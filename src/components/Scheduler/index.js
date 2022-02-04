import s from './Scheduler.module.scss';
import ScheduleCard from '../ScheduleCard';
import avatar1 from '../../assets/images/avatar-1.png';
import avatar2 from '../../assets/images/avatar-2.png';
import avatar3 from '../../assets/images/avatar-3.png';
import avatar4 from '../../assets/images/avatar-4.png';
import avatar5 from '../../assets/images/avatar-5.png';

const Scheduler = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleDateString('default', { month: 'long' });
  const lastDayOfMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const dates = Array.from({ length: lastDayOfMonth }, (_, i) => i + 1);

  return (
    <div className={s.scheduler}>
      <div className={s.header}>
        <div className={s.date__top}>
          <div className={s.date__value}>{month + ' ' + year}</div>
          <select value={'month'} onChange={() => {}}>
            <option value="month">Month</option>
          </select>
        </div>

        <div className={s.date__bottom}>
          {dates.map((x) => (
            <div
              key={x}
              className={[s.date, x === today.getDate() ? s.active : ''].join(
                ' '
              )}
            >
              {`${x < 10 ? '0' : ''}` + x}
            </div>
          ))}
        </div>
      </div>

      <div className={s.content}>
        {SCHEDULES.map((item, i) => (
          <ScheduleCard
            key={i + 100}
            color={item.color}
            title={item.title}
            progress={item.progress}
            participants={item.participants}
          />
        ))}
      </div>
    </div>
  );
};

const SCHEDULES = [
  {
    title: 'Data analysis for AGM',
    progress: 75,
    color: 'warning',
    participants: [
      { name: '', avatar: avatar1 },
      { name: '', avatar: avatar2 },
      { name: '', avatar: avatar3 },
      { name: '', avatar: avatar4 },
    ],
  },
  {
    title: 'Product design and strategy development',
    progress: 13,
    color: 'error',
    participants: [
      { name: '', avatar: avatar1 },
      { name: '', avatar: avatar2 },
      { name: '', avatar: avatar3 },
    ],
  },
  {
    title: 'New landing page',
    progress: 75,
    color: 'info',
    participants: [
      { name: '', avatar: avatar1 },
      { name: '', avatar: avatar2 },
      { name: '', avatar: avatar3 },
    ],
  },
  {
    title: 'Data migration for our edtech client —> Moving data to new servers',
    progress: 21,
    color: 'success',
    participants: [
      { name: '', avatar: avatar1 },
      { name: '', avatar: avatar2 },
      { name: '', avatar: avatar3 },
      { name: '', avatar: avatar4 },
      { name: '', avatar: avatar5 },
    ],
  },
  {
    title: 'New landing page',
    progress: 0,
    color: 'primary',
    participants: [],
  },
];

export default Scheduler;
