import s from './Header.module.scss';
import { ReactComponent as InboxIcon } from '../../assets/icons/envelope.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notification.svg';
import avatar from '../../assets/images/avatar.png';

const Header = () => {
  return (
    <header className={s.header}>
      <SearchIcon />
      <InboxIcon />
      <NotificationIcon />
      <img src={avatar} alt="avatar" height={32} width={32} />
    </header>
  );
};

Header.defaultProps = {};

export default Header;
