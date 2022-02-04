import s from './TaskCard.module.scss';
import { ReactComponent as RatingIcon } from '../../assets/icons/rating.svg';

const TaskCard = ({ color, title, items }) => {
  return (
    <div className={[s.container, s[color]].join(' ')}>
      <h3>{title}</h3>
      <div className={s.content}>
        {items.map((item, i) => (
          <div key={i} className={s.task}>
            <h4 className={s.task_item__title}>{item.title}</h4>
            <div className={s.task_item__rating}>
              <div className={s.company}>
                <div className={s.company_circle} />
                <h6>{item.client}</h6>
              </div>
              <RatingIcon />
            </div>
            <div className={s.task_item__footer}>
              <div className={s.task_item__date}>Due on {item.due_date}</div>
              <div
                className={[
                  s.task_item__priority,
                  item.priority === 'high'
                    ? s.error
                    : item.priority === 'medium'
                    ? s.warning
                    : s.success,
                ].join(' ')}
              >
                {item.priority + ' Priority'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TaskCard.defaultProps = {
  color: 'primary',
  items: [],
};

export default TaskCard;
