import styled from 'styled-components';

const ListActionsContainer = styled.div`
  background: #fff;
  width: 304px;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);

  /* display: none;
  overflow: hidden; */

  position: absolute;
  top: 40px;
  left: 228px;
  z-index: 99;
`;

const ListActionsHeader = styled.section`
  display: inline-block;
`;

const ListActionsTitle = styled.section``;

const ListActionsUl = styled.ul`
  list-style-type: none;
`;

const ListActionsItem = styled.li`
  display: inline-block;
`;

const DisabledItem = styled.li`
  pointer-events: none;
  opacity: 0.6;
`;

const ListActionsDivider = styled.hr``;

export { ListActionsContainer, ListActionsUl, ListActionsDivider };
