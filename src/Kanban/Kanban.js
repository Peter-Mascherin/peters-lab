import "./Kanban.css";

import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import Placeholder from "./Placeholder";


function Kanban() {
    const containers = ['A','B']
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
      <DndContext onDragEnd={handleDragEnd}>
      
      <div className="kanban-board">
        <div className="kanban-col1header" id="kcol1head">
          <h2>column 1 header</h2>
        </div>
        <div className="kanban-col2header" id="kcol2head">
          <h2>column 2 header</h2>
        </div>

        <div className="kanban-col1" id="kcol1">
          
        <Droppable id="droppablecol1" >
        {parent === "droppablecol1" ? draggable : <Placeholder />} {/* confused here need to look into this */}
        {!parent ? draggable : null}
        
        
        </Droppable>
        

        </div>
        <div className="kanban-col2" id="kcol2">
        <Droppable id="droppablecol2" >
        
        {parent === "droppablecol2" ? draggable : <Placeholder />}

        </Droppable>
        </div>
      </div>
      </DndContext>
    </div>
  );

  function handleDragEnd({over})
  {
    setParent(over ? over.id : null);
  }
}

export default Kanban;
