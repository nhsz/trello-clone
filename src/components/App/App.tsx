import { FC, useEffect } from 'react';
import { BoardTitle, Card, List } from '../../components';
import styles from './App.module.css';
import { AppContainer } from './App.styles';

const App: FC = () => {
  useEffect(() => {
    document?.getElementById('trello-logo')?.setAttribute('draggable', 'false');
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img id='trello-logo' src='./trello-logo.gif' className={styles.logo} alt='trello-logo' />
        </div>
        <BoardTitle text='Enter the board title here...' />
      </header>
      <AppContainer>
        <List title='To Do'>
          <Card text='Generate app scaffold and then... I just dont know what to do with myself' />
        </List>
        <List title='In Progress'>
          <Card text='Learn Typescript' />
        </List>
        <List title='Done'>
          <Card text='Begin to use static typing' />
        </List>
      </AppContainer>
    </>
  );
};

export { App };
