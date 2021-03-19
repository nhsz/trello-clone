import { StrictMode } from 'react';
import { isMobile } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import ReactDOM from 'react-dom';
import { App } from './components';
import { AppStateProvider } from './contexts';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <DndProvider
      backend={isMobile ? TouchBackend : HTML5Backend}
      options={isMobile ? { enableMouseEvents: true } : {}}
    >
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </StrictMode>,
  document.getElementById('root')
);
