import "./Kanban.css";

import { useState } from "react";
import {
  DndContext,
  DragOverEvent,
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
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

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

  ///https://github.com/clauderic/dnd-kit/issues/1188 , follow youtube video in this maybe?

  return (
    <div className="kanban-container">
      <div className="kanban-board">
        <DndContext
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          sensors={sensors}
          collisionDetection={closestCenter}
        >
          <div className="kanban-col1header" id="kcol1head">
            <h2>column 1 header</h2>
          </div>
          <div className="kanban-col2header" id="kcol2head">
            <h2>column 2 header</h2>
          </div>

          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="kanban-col1" id="kcol1">
              <Droppable id="droppable1">
                {items.map((id) => (
                  <SortableItem key={id} id={id}>
                    <div className="kanban-card">
                      <h2>card id is {id}</h2>
                    </div>
                  </SortableItem>
                ))}
              </Droppable>
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleDragOver(event) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) {
      return;
    }

    /* 
      this handler will be used to swap cards between columns
      cards needs to be an individual object (SortableItem is already there)
      SortableItem needs to know which column its in
      we also likely need to implement dataOverlay and useState for each tasks AND possibly a column aswell
      We are not swapping columns, only tasks so likely only tasks need a useState to know which task is active
      exact line of code that facilitates the swap is the following:

      tasks[activeIndex].columnId = tasks[overIndex].columnId;

      where tasks is an array of SortableItems

      https://www.youtube.com/watch?v=RG-3R6Pu_Ik is the reference video at 1:10:56

      if only dropping over a column and not over a task (item) we just need to update columId

      reference video for this
    */
  }
}

export default Kanban;
