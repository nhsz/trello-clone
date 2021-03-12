import { StrictMode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import { App } from './components';
import { AppStateProvider } from './contexts';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </StrictMode>,
  document.getElementById('root')
);
