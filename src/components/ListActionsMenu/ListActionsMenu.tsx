import { FC } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useClickOutsideRef } from '../../hooks';
import {
  DisabledItem,
  ListActionsContainer,
  ListActionsDivider,
  ListActionsHeader,
  ListActionsItem,
  ListActionsTitle,
  ListActionsUl
} from './ListActionsMenu.styles';

interface Props {
  isOpen: boolean;
  addFirst: boolean;
  handleClose: VoidFunction;
  handleOpenFirst: VoidFunction;
  handleArchiveAllTasks: VoidFunction;
  handleMoveAllTasks: VoidFunction;
  handleRemove: VoidFunction;
  goToMoveListMenu: VoidFunction;
}

const ListActionsMenu: FC<Props> = ({
  isOpen,
  addFirst,
  handleClose,
  handleOpenFirst,
  handleArchiveAllTasks,
  handleMoveAllTasks,
  handleRemove,
  goToMoveListMenu
}) => {
  const { ref, clickOutsideListener } = useClickOutsideRef({
    mode: isOpen,
    setMode: handleClose
  });

  const removeList = () => {
    document.removeEventListener('click', clickOutsideListener);
    handleRemove();
  };

  return (
    <ListActionsContainer ref={ref}>
      <ListActionsHeader>
        <ListActionsTitle>List actions</ListActionsTitle>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </ListActionsHeader>

      <ListActionsDivider />

      <ListActionsUl>
        <ListActionsItem>
          <button onClick={addFirst ? handleClose : handleOpenFirst}>Add card...</button>
        </ListActionsItem>
        <DisabledItem>
          <button disabled>Copy list... [not implemented yet]</button>
        </DisabledItem>
        <ListActionsItem>
          <button onClick={goToMoveListMenu}>Move list...</button>
        </ListActionsItem>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <DisabledItem>
          <button disabled>Sort by... [not implemented yet]</button>
        </DisabledItem>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <ListActionsItem>
          <button onClick={handleMoveAllTasks}>Move all cards in this list...</button>
        </ListActionsItem>
        <ListActionsItem>
          <button onClick={handleArchiveAllTasks}>Archive all cards in this list...</button>
        </ListActionsItem>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <ListActionsItem>
          <button onClick={removeList}>Archive this list</button>
        </ListActionsItem>
      </ListActionsUl>
    </ListActionsContainer>
  );
};

export { ListActionsMenu };
