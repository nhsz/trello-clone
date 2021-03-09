import { FC, useEffect, useState } from 'react';
import { AddNewItem, Card, List } from '../../components';
import { useAppState } from '../../hooks';
import { Footer, Header } from '../UI';
import { Board } from './App.styles';

const App: FC = () => {
  const [documentIsReady, setDocumentIsReady] = useState(false);
  const { state, dispatch } = useAppState();
  const { lists } = state;

  useEffect(() => {
    setTimeout(() => setDocumentIsReady(document.readyState === 'complete'), 1300);
    document?.getElementById('trello-logo')?.setAttribute('draggable', 'false');
  }, []);

  return (
    <>
      <Header logoSrc={documentIsReady ? './trello-logo.gif' : './trello-logo-loading.gif'} />

      <Board id='board'>
        {lists.map(({ id, title, tasks }, i) => (
          <List id={id} title={title} key={id}>
            {tasks.map(({ id, text }) => (
              <Card id={id} text={text} key={id} />
            ))}
          </List>
        ))}
        <AddNewItem
          itemType='list'
          handleAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
        />
      </Board>

      <Footer siteUrl='https://twitter.com/_nhsz' repoUrl='#' />
    </>
  );
};

export { App };
