import { FC, PropsWithChildren, useRef, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AddNewItem, Card } from '../../components';
import { useAppState, useDragItem, useDropList } from '../../hooks';
import { isHidden } from '../../utils';
import {
  ListActionsButton,
  ListActionsMenu,
  ListCards,
  ListContainer,
  ListTitle,
  ListTitleContainer
} from './List.styles';

interface Props {
  id: string;
  title: string;
  index: number;
  isPreview?: boolean;
}

const List: FC<PropsWithChildren<Props>> = ({ id, title, index, isPreview }) => {
  const { state, dispatch } = useAppState();
  const { lists } = state;
  const { draggedItem } = state;
  const [showListActionsMenu, setShowListActionsMenu] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const { drag } = useDragItem({
    type: 'LIST',
    id,
    index,
    title
  });
  const { drop } = useDropList({ id, index });

  drag(drop(listRef));

  // onClick={() => dispatch({ type: 'REMOVE_LIST', payload: listId })}
  const showMenu = () => setShowListActionsMenu(true);

  return (
    <ListContainer
      ref={listRef}
      isPreview={isPreview}
      isHidden={isHidden({ isPreview, draggedItem, itemType: 'LIST', id })}
    >
      <ListTitleContainer>
        <ListTitle>{title}</ListTitle>
        <ListActionsButton onClick={showMenu}>
          <HiOutlineDotsHorizontal className='dots-icon' />
          {showListActionsMenu && <ListActionsMenu>no lo implementé todavía LOL</ListActionsMenu>}
        </ListActionsButton>
      </ListTitleContainer>
      <ListCards>
        {lists[index].tasks.map((task, i) => (
          <Card id={task.id} index={i} text={task.text} listId={id} key={task.id} />
        ))}
      </ListCards>
      <AddNewItem
        itemType='card'
        handleAdd={text => dispatch({ type: 'ADD_TASK', payload: { id, text } })}
      />
    </ListContainer>
  );
};

export { List };
