import { FC, useEffect, useState } from 'react';
import { About, AddNewItem, List } from '../../components';
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
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <About
        avatarSrc='https://trello-members.s3.amazonaws.com/55eb06ffdff4c7bce8f97c2b/efceee66e68404b4d3ee01693d6457b4/50.png'
        siteUrl='#'
        ghProfile='https://github.com/nhsz/'
        userHandle='@nhsz'
        contactEmail='mailto:nh.quiroz@gmail.com'
      />

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
    </div>
  );
};

export { App };
