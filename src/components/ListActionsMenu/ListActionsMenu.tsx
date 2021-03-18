import { ListActionsContainer, ListActionsDivider, ListActionsUl } from './ListActionsMenu.styles';

const ListActionsMenu = () => {
  return (
    <ListActionsContainer>
      <ListActionsUl>
        <li>Add card...</li>
        <li>Copy list...</li>
        <li>Move list...</li>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <li>Sort by...</li>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <li>Move all cards in this list...</li>
        <li>Archive all cards in this list...</li>
      </ListActionsUl>

      <ListActionsDivider />

      <ListActionsUl>
        <li>Archive this list</li>
      </ListActionsUl>
    </ListActionsContainer>
  );
};

export { ListActionsMenu };
