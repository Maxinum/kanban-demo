import { useColumnsStore } from '../../store';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import TaskCard from './Task';
import classes from './Kanban.module.css';
import { Box } from '@chakra-ui/react';

const Kanban = () => {
    const { columns, filteredData, removeTask, addTask, setColumns } = useColumnsStore();

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination } = result;
        const sourceColumnId = source.droppableId;
        const destColumnId = destination.droppableId;
        const task = columns[sourceColumnId].items[source.index];

        if (source.droppableId !== destination.droppableId) {
            removeTask(task.id);
            addTask(destColumnId, task);
        } else {
            const items = [...columns[sourceColumnId].items];
            items.splice(source.index, 1);
            items.splice(destination.index, 0, task);
            setColumns({
                ...columns,
                [sourceColumnId]: {
                    ...columns[sourceColumnId],
                    items: items,
                },
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Box className={classes.container}>
                <Box className={classes.task_column}>
                    {Object.entries(filteredData).map(([columnId, column]) => (
                        <Droppable key={columnId} droppableId={columnId}>
                            {(provided) => (
                                <Box
                                    className={classes.task_list}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <Box className={classes.title}>{column.title}</Box>
                                    {column.items.map((item, index) => (
                                        <TaskCard key={item.id} item={item} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                    ))}
                </Box>
            </Box>
        </DragDropContext>
    );
};

export default Kanban;
