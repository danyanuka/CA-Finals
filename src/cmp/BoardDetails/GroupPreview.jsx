import { TaskList } from "./TaskList"
import { Draggable } from 'react-beautiful-dnd';


export function GroupPreview({ index, group, onAddTask, onEditGroup }) {

    return (
        <Draggable draggableId={group.id} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`group-preview is-dragging-${snapshot.isDragging}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>

                    <TaskList index={index} key={group.id} group={group} tasks={group.tasks} onAddTask={onAddTask} onEditGroup={onEditGroup} />

                    {provided.placeholder}
                </div>

            )}
        </Draggable>
    )
}
