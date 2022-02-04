import s from './TeamCard.module.scss';

const TeamCard = ({ avatar, name, role, color }) => {
  return (
    <div className={s.card}>
      <div className={s.border} style={{ backgroundColor: color }} />
      <img
        src={avatar}
        alt={name.charAt(0)}
        height={30}
        width={30}
        className={s.avatar}
      />
      <div className={s.info}>
        <h5>{name}</h5>
        <div>{role}</div>
      </div>
    </div>
  );
};

export default TeamCard;
