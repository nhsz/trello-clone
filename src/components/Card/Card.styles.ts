import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #f8fafc;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #f1f5f9;

    .card-icons {
      display: flex;
    }
  }

  .card-icons {
    display: none;
    position: absolute;
    top: 2px;
    right: 2px;
  }

  .icon {
    font-size: 28px;
    color: #94a3b8;
    padding: 6px;
    margin-right: 0.2rem;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f1f5f9cc;
    z-index: 1;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: #64748b;
      background-color: #e2e8f0;
    }
  }
`;

const TextContainer = styled.p`
  display: inline-block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
`;

export { CardContainer, TextContainer };
