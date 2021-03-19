import styled from 'styled-components';
import { DragPreviewContainer } from '../List';

const CardContainer = styled(DragPreviewContainer)`
  display: flex;
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
  position: relative;

  &:hover {
    background-color: #f1f5f9;
  }

  .icon {
    font-size: 28px;
    color: #94a3b8;
    padding: 6px;
    margin-right: 4px;
    border-radius: 3px;
    cursor: pointer;
    background-color: #f1f5f9cc;
    z-index: 1;
    transition: all 84ms ease-in;

    &:hover {
      color: #64748b;
      background-color: #e2e8f0;
    }

    &:last-of-type {
      margin-right: 0;
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

const BackgroundOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000a6;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const WrapperContainer = styled.div`
  height: 0;
  z-index: 999;
  position: fixed;
`;

const OuterContainer = styled.div`
  position: relative;
`;

export {
  CardContainer,
  TextContainer,
  CardIcons,
  BackgroundOverlay,
  WrapperContainer,
  OuterContainer
};
