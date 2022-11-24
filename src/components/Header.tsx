import RocketLogo from '../assets/rocket-logo.svg';
import styles from './Header.module.scss';

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.pageLogo}>
        <img src={RocketLogo} alt='' />
        <h1 className={styles.title}>
          Lista de <span>Tarefas</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
