import { CSSProperties } from 'react';
import { XYCoord } from 'react-dnd';

export type Coordinates = XYCoord | null;

const getItemStyles = (currentOffset: Coordinates): CSSProperties => {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform
  };
};

export { getItemStyles };
