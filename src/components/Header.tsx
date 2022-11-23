import RocketLogo from '../assets/rocket-logo.svg';
import styles from './Header.module.scss';
import { PlusCircle } from 'phosphor-react';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.pageLogo}>
        <img src={RocketLogo} alt='' />
        <h1 className={styles.title}>
          Lista de <span>Tarefas</span>
        </h1>
      </div>
      <form>
        <label htmlFor=''>
          <input placeholder='Adicione uma nova tarefa' type='text' />
        </label>
        <button type='submit'>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
};

export default Header;
