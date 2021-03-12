import { useDragLayer } from 'react-dnd';
import { List } from '../../../components';
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
        <List id={item.id} title={item.text} isPreview={true} children={item.children} />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export { CustomDragLayer };
