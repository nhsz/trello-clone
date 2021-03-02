import { FC, useEffect } from 'react';
import { AddNewItem, Card, List } from '../../components';
import { Board, Header, Logo, LogoContainer } from './App.styles';

const App: FC = () => {
  useEffect(() => {
    document?.getElementById('trello-logo')?.setAttribute('draggable', 'false');
  }, []);

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo id='trello-logo' src='./trello-logo.gif' alt='trello-logo' />
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
        </List>
        <List title='In Progress'>
          <Card text='Code Trello clone' />
        </List>
        <List title='Done'>
          <Card text='Setup and general layout' />
        </List>
        <AddNewItem itemType='list' handleAdd={console.log} />
      </Board>
    </>
  );
};

export { App };
