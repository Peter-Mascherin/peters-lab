import "./Kanban.css";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import Placeholder from "./Placeholder";

function Kanban() {
  const [items, setItems] = useState(["1", "2", "3"]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      <div className="kanban-card">
        <h2>card in col 2</h2>
      </div>
    </Draggable>
  );

  /* created base drag and drop functionality but still more work to do like list of items, naturally placing items in droppable containers*/

  /* might be on the wrong track entirely, go to docs.dndkit.com/presets/sortable*/

  return (
    <div className="kanban-container">
      <div className="kanban-board">
        <DndContext
          onDragEnd={handleDragEnd}
          sensors={sensors}
          collisionDetection={closestCenter}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="kanban-col1header" id="kcol1head">
              <h2>column 1 header</h2>
            </div>
            <div className="kanban-col2header" id="kcol2head">
              <h2>column 2 header</h2>
            </div>

            <div className="kanban-col1" id="kcol1">
              {items.map((id) => (
                <SortableItem key={id} id={id}>
                  <div className="kanban-card">
                    <h2>card id is {id}</h2>
                  </div>
                </SortableItem>
              ))}
            </div>
            <div className="kanban-col2" id="kcol2"></div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default Kanban;
