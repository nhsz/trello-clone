import { FC, useEffect, useState } from 'react';
import { AddNewItem, List } from '../../components';
import { useAppState } from '../../hooks';
import { CustomDragLayer, Footer, Header } from '../UI';
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
        <CustomDragLayer />

        {lists.map(({ id: listId, title, tasks }, i) => (
          <List id={listId} index={i} title={title} key={listId} />
        ))}
        <AddNewItem
          itemType='list'
          handleAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
        />
      </Board>

      <Footer siteUrl='https://twitter.com/_nhsz' repoUrl='https://github.com/nhsz/trello-clone' />
    </>
  );
};

export { App };
