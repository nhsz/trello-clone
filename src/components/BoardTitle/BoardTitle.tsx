import { FC } from 'react';
import { BoardTitleContainer } from './BoardTitle.styles';

interface Props {
  text: string;
}

const BoardTitle: FC<Props> = ({ text }) => {
  return (
    <BoardTitleContainer contentEditable='true' onClick={() => console.log(text)}>
      {text}
    </BoardTitleContainer>
  );
};

export { BoardTitle };
