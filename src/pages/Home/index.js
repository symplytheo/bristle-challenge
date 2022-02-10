import Button from '../../components/Button';
import TaskCard from '../../components/TaskCard';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import TeamCard from '../../components/TeamCard';
import avatar from '../../assets/images/avatar.png';
import Scheduler from '../../components/Scheduler';
import s from './Home.module.scss';

export default function Homepage() {
  return (
    <div className={s.home}>
      <div className={s.greeting}>
        <h2>Good morning, Michelle</h2>
        <div>{`Here's a quick overview for you`}</div>
      </div>

      <section className={s.todos__section}>
        <div>
          <TaskCard color="warning" title="Tasks" items={TASKS} />
        </div>
        <div>
          <TaskCard color="success" title="Projects" items={PROJECTS} />
        </div>
        <div>
          <TaskCard color="primary" title="Deadlines" items={DEADLINES} />
        </div>
        <div className={s.todos__action}>
          <h3>Add New</h3>
          <Button color="warning">
            <PlusIcon /> Task
          </Button>
          <br />
          <Button color="success">
            <PlusIcon /> Project
          </Button>
          <br />
          <Button color="primary">
            <PlusIcon /> Deadline
          </Button>
        </div>
      </section>

      <section className={s.schedule__section}>
        <div className={s.team}>
          <h3>Team Schedule</h3>
          <div className={s.team__list}>
            {TEAMS.map((team, t) => (
              <TeamCard
                key={t}
                avatar={team.avatar}
                name={team.name}
                role={team.role}
                color={team.color}
              />
            ))}
          </div>
        </div>
        <div className={s.calendar}>
          <Scheduler />
        </div>
      </section>
    </div>
  );
}

const TASKS = [
  {
    title: 'Complete designs for edtech startup project',
    due_date: '08/01/2021',
    priority: 'high',
    rating: true,
  },
  {
    title: 'Approve timesheet for Jane Applegate',
    due_date: 'tomorrow',
    priority: 'medium',
  },
  {
    title: 'Move files & assets to a different cloud service',
    due_date: 'tomorrow',
    priority: 'low',
  },
];
const PROJECTS = [
  {
    title: 'Data migration',
    due_date: '08/23/2021',
    priority: 'medium',
    client: 'Acme Inc.',
    rating: true,
  },
  {
    title: 'Complete rebranding',
    due_date: '09/05/2021',
    priority: 'high',
    client: 'Fanspeak Services',
    rating: true,
  },
  {
    title: 'New design concepts',
    due_date: 'tomorrow',
    priority: 'medium',
    client: 'Acme Inc.',
  },
];
const DEADLINES = [
  {
    title: 'Data migration',
    due_date: '08/23/2021',
    priority: 'high',
    client: 'Acme Inc.',
  },
  {
    title: 'Complete rebranding',
    due_date: '09/05/2021',
    priority: 'low',
    client: 'Fanspeak Services',
    rating: true,
  },
  {
    title: 'New design concepts',
    due_date: 'tomorrow',
    priority: 'medium',
    client: 'Acme Inc.',
  },
];

const TEAMS = [
  { name: 'Rachel Brown', role: 'Analyst', avatar: avatar, color: 'warning' },
  {
    name: 'Michaela Woodson',
    role: 'Product Lead',
    avatar: avatar,
    color: 'error',
  },
  { name: 'John White', role: 'UI/UX Designer', avatar: avatar, color: 'info' },
  {
    name: 'Ingrid Bays',
    role: 'Senior Data Engineer',
    avatar: avatar,
    color: 'success',
  },
  {
    name: 'Shay Duro',
    role: 'Customer Success Manager',
    avatar: avatar,
    color: 'primary',
  },
];
