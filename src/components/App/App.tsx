import { FC, useEffect } from 'react';
import { AddNewItem, Card, List } from '../../components';
import { useAppState } from '../../hooks';
import { Board, Header, Logo, LogoContainer } from './App.styles';

const App: FC = () => {
  const { data } = useAppState();

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
        {data.lists.map(({ id, title, tasks }, i) => (
          <List title={title} key={id} index={i}>
            {tasks.map(({ id, text }) => (
              <Card text={text} key={id} />
            ))}
          </List>
        ))}
        <AddNewItem itemType='list' handleAdd={console.log} />
      </Board>
    </>
  );
};

export { App };
