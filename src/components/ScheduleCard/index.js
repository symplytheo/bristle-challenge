import s from './ScheduleCard.module.scss';

const ScheduleCard = ({ color, title, progress, participants }) => {
  return (
    <div className={[s.card, s[color]].join(' ')}>
      <div className={s.card__info}>
        <h4>{title}</h4>
        <div>Progress: {progress < 1 ? 'N/A' : progress + '%'}</div>
      </div>
      <div className={s.card__avatars}>
        {participants.map((item, i) => (
          <div key={i} className={s.avatar}>
            <img src={item.avatar} alt="" height={19} width={19} />
          </div>
        ))}
      </div>
    </div>
  );
};

ScheduleCard.defaultProps = {
  color: 'primary',
  title: '',
  progress: 0,
  participants: [],
};

export default ScheduleCard;
