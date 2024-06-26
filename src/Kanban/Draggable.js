import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities'

/* create comments to understand whats happening in this file */

function Draggable(props)
{
    const {attributes,listeners,setNodeRef,transform} = useDraggable({
        id: props.id,
    });

    const style = {
        transform: CSS.Translate.toString(transform)
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    )
}

export default Draggable;