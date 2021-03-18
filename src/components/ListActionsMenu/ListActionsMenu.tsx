import { FC } from 'react';
import { HiOutlineX } from 'react-icons/hi';
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
  handleClose: () => void;
}

const ListActionsMenu: FC<Props> = ({ handleClose }) => {
  return (
    <ListActionsContainer>
      <ListActionsHeader>
        <ListActionsTitle>List actions</ListActionsTitle>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </ListActionsHeader>

      <ListActionsDivider />

      <ListActionsUl>
        <ListActionsItem>Add card...</ListActionsItem>
        <ListActionsItem>Copy list...</ListActionsItem>
        <DisabledItem>Move list... [WIP]</DisabledItem>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <DisabledItem>Sort by... [WIP]</DisabledItem>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <DisabledItem>Move all cards in this list... [WIP]</DisabledItem>
        <ListActionsItem>Archive all cards in this list...</ListActionsItem>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <ListActionsItem>Archive this list</ListActionsItem>
      </ListActionsUl>
    </ListActionsContainer>
  );
};

export { ListActionsMenu };
