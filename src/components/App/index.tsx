import { FC } from 'react';
import { Card, Column } from '../../components';
import { AppContainer } from './App.styles';

const App: FC = () => {
  return (
    <AppContainer>
      <Column>
        <Card>saraza</Card>
      </Column>
    </AppContainer>
  );
};

export { App };
