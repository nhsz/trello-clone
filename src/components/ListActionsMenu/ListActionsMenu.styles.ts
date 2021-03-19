import styled from 'styled-components';

const ListActionsContainer = styled.div`
  background: #fff;
  padding: 0 12px 12px;
  width: 304px;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
  position: absolute;
  top: 40.5px;
  left: 24px;
  z-index: 99;

  @media (min-width: 560px) {
    left: 230px;
  }

  @media (max-width: 960px) {
    left: 32px;
  }
`;

const ListActionsHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: relative;

  .x-sign {
    cursor: pointer;
    color: #6b778c;
    font-size: 1rem;
    position: absolute;
    right: 2px;
    width: 20px;

    &:hover {
      color: #172b4d;
    }
  }
`;

const ListActionsTitle = styled.h3`
  color: #5e6c84;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

const ListActionsUl = styled.ul`
  list-style-type: none;
  margin: 6px 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ListActionsItem = styled.li`
  color: #172b4d;
  padding: 0 12px;
  margin: 0 -12px;

  &:hover {
    background-color: rgba(9, 30, 66, 0.04);
  }

  button {
    display: block;
    background-color: transparent;
    padding: 6px 0;
    width: 100%;
    text-align: left;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const DisabledItem = styled(ListActionsItem)`
  pointer-events: none;
  opacity: 0.5;
`;

const ListActionsDivider = styled.hr`
  border: 0;
  height: 1px;
  background: rgba(9, 30, 66, 0.13);

  &:last-of-type {
    height: 0.5px;
  }
`;

export {
  ListActionsContainer,
  ListActionsUl,
  ListActionsDivider,
  DisabledItem,
  ListActionsHeader,
  ListActionsTitle,
  ListActionsItem
};
