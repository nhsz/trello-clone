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

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item.type === 'LIST' ? (
          <List
            id={item.id}
            title={item.text}
            index={item.index}
            isPreview={true}
            children={item.children}
          />
        ) : (
          <Card id={item.id} text={item.text} index={0} listId={item.listId} isPreview={true} />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export { CustomDragLayer };
