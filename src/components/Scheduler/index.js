import s from './Scheduler.module.scss';

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

      <div className={s.content}></div>
    </div>
  );
};

export default Scheduler;
