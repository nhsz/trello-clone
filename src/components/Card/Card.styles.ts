import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #f8fafc;
  cursor: pointer;
  margin-bottom: 0.5rem;
  margin-right: 0.25rem;
  padding: 0.5rem;
  min-width: 256px;
  max-width: 280px;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: background 84ms ease-in;

  &:hover {
    background-color: #f1f5f9;
  }

  .icon {
    font-size: 28px;
    color: #94a3b8;
    padding: 6px;
    border-radius: 3px;
    cursor: pointer;
    background-color: #f1f5f9cc;
    z-index: 1;
    transition: all 84ms ease-in;

    &:hover {
      color: #64748b;
      background-color: #e2e8f0;
    }
  }
`;

const CardIcons = styled.div`
  display: none;
  position: absolute;
  top: 2px;
  right: 2px;

  ${CardContainer}:hover & {
    display: flex;
  }
`;

const TextContainer = styled.p`
  font-size: 0.95rem;
  display: inline-block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
`;

export { CardContainer, TextContainer, CardIcons };
