import { useDroppable } from "@dnd-kit/core";
import { TbBackground } from "react-icons/tb";

/* create comments to understand whats happening in this file */

function Droppable(props)
{
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });

    const style = {
        opacity: isOver ? 0.5 : 1,
        backgroundColor: 'blue',
        width: '100%', height: '100%',
        

    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}

export default Droppable;