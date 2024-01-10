import { TaskList } from "./TaskList"
import { DragDropContext } from 'react-beautiful-dnd';

export function GroupPreview({ groups, group, onAddTask, onEditGroup }) {

    function onDragEnd(result) {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const group = groups.find((group) => group.id === source.droppableId)
        const newTasks = group.tasks;
        const taskToReplace = newTasks.find((task) => task.id === draggableId)

        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, taskToReplace);

        const newGroup = {
            ...group,
            tasks: newTasks,
        };
        onEditGroup(newGroup)
    }


    return (
        <div className="group-preview">

            <DragDropContext onDragEnd={onDragEnd}>
                <TaskList key={group.id} group={group} tasks={group.tasks} onAddTask={onAddTask} onEditGroup={onEditGroup} />
            </DragDropContext>
        </div>
    )
}
