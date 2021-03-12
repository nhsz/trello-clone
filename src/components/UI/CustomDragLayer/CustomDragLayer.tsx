import { useDragLayer } from 'react-dnd';
import { Card, List } from '../../../components';
import { DragItem } from '../../../dragItem';
import { getItemStyles } from '../../../utils';
import { CustomDragLayerContainer } from './CustomDragLayer.styles';

const CustomDragLayer = () => {
  const { isDragging, currentOffset, item } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
    item: monitor.getItem() as DragItem
  }));

  const { type, id, text } = item;
  const listId = item.type === 'CARD' ? item.listId : null;
  const children = item.type === 'LIST' ? item.children : null;

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {type === 'LIST' ? (
          <List id={id} title={text} isPreview={true} children={children} />
        ) : (
          <Card id={id} text={text} listId={listId} isPreview={true} />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export { CustomDragLayer };
