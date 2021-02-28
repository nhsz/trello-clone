import { FC, useEffect } from 'react';
import { Card, List } from '../../components';
import styles from './App.module.css';
import { Board, Header, LogoContainer } from './App.styles';

const App: FC = () => {
  useEffect(() => {
    document?.getElementById('trello-logo')?.setAttribute('draggable', 'false');
  }, []);

  return (
    <>
      <Header>
        <LogoContainer>
          <img id='trello-logo' src='./trello-logo.gif' className={styles.logo} alt='trello-logo' />
        </LogoContainer>
      </Header>
      <Board>
        <List title='To Do'>
          <Card text='Generate app scaffold and then' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
          <Card text='Generate app scaffold and then... Solve other minor details. This is just random stuff to test list scroll.' />
        </List>
        <List title='In Progress'>
          <Card text='Code Trello clone' />
        </List>
        <List title='Done'>
          <Card text='Setup and general layout' />
        </List>
      </Board>
    </>
  );
};

export { App };
