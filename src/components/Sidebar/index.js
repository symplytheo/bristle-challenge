import s from './Sidebar.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as SignoutIcon } from '../../assets/icons/sign-out.svg';

const NAV_LINKS = [
  { title: 'Dashboard', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Tasks', href: '/tasks' },
  { title: 'Teams', href: '/teams' },
  { title: 'Analytics', href: '/analytics' },
];

const Sidebar = () => {
  const isActive = (link) => window.location.pathname === link;
  return (
    <div id="sidebar" className={s.sidebar}>
      <div className={s.sidebar__container}>
        <div className={s.sidebar__header}>
          <Logo />
          <div className={s.workspace}>
            <h3>Workspace</h3>
            <select value={1} onChange={() => {}}>
              <option value={1}>Lamplight Inc.</option>
            </select>
          </div>
        </div>

        <nav className={s.sidebar__content}>
          <ul>
            {NAV_LINKS.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className={isActive(item.href) ? s.active__link : ''}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.sidebar__footer}>
          <ul>
            <li>
              <a href="/#">
                <SettingsIcon />
                Settings
              </a>
            </li>
            <li>
              <a href="/#">
                <SignoutIcon />
                Log out
              </a>
            </li>
            <li>
              <a href="/#">Teams</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
