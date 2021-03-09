import { FC, useEffect, useState } from 'react';
import { FiCoffee } from 'react-icons/fi';
import { AddNewItem, Card, List } from '../../components';
import { useAppState } from '../../hooks';
import { Board, Footer, Header, Logo, LogoContainer } from './App.styles';

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
      <Header>
        <LogoContainer>
          <Logo
            id='trello-logo'
            src={documentIsReady ? './trello-logo.gif' : './trello-logo-loading.gif'}
            alt='trello-logo'
          />
        </LogoContainer>
      </Header>

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
      <Footer>
        <p>
          built with <FiCoffee className='coffee-icon' /> by{' '}
          <a href='https://twitter.com/_nhsz'>
            <code>nhsz</code>
          </a>{' '}
          |{' '}
          <a href='#'>
            <code>&lt;/src code&gt;</code>
          </a>
        </p>
      </Footer>
    </>
  );
};

export { App };
