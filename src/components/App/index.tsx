import { FC } from 'react';
import { Card, Column } from '../../components';
import { AppContainer } from './App.styles';

const App: FC = () => {
  return (
    <AppContainer>
      <Column title='To Do'>
        <Card text='Generate app scaffold' />
      </Column>
      <Column title='In Progress'>
        <Card text='Learn Typescript' />
      </Column>
      <Column title='Done'>
        <Card text='Begin to use static typing' />
      </Column>
    </AppContainer>
  );
};

export { App };
