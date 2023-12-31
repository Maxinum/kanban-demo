import { useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ITask from '../../interfaces/ITask';
import { Box, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useColumnsStore } from '../../store';
import classes from './Kanban.module.css';
import Card from './Card';

const TaskCard = ({ item, index }: { item: ITask; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const { removeTask } = useColumnsStore();
    const onCloseAlert = () => setIsAlertOpen(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cancelRef = useRef<HTMLButtonElement>(null);

    const handleRemoveTask = () => {
        removeTask(item.id);
        setIsAlertOpen(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Box className={classes.task_info} onClick={handleOpenModal}>
                            <p>{item.Task}</p>
                            <Box className={classes.secondary_details}>
                                <span>
                                    {item.priority} priority
                                </span>
                                <p>
                                    <span>
                                        {new Date(item.Due_Date).toLocaleDateString('en-us', {
                                            month: 'short',
                                            day: '2-digit',
                                        })}
                                    </span>
                                </p>
                            </Box>
                            {isHovered && (
                                <>
                                    <Box className={classes.close_icon} onClick={() => setIsAlertOpen(true)}>
                                        <CloseIcon />
                                    </Box>
                                    <AlertDialog
                                        isOpen={isAlertOpen}
                                        leastDestructiveRef={cancelRef}
                                        onClose={onCloseAlert}
                                    >
                                        <AlertDialogOverlay>
                                            <AlertDialogContent>
                                                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                                    Delete Task
                                                </AlertDialogHeader>

                                                <AlertDialogBody>
                                                    Are you sure you want to delete this task?
                                                </AlertDialogBody>

                                                <AlertDialogFooter>
                                                    <Button ref={cancelRef} onClick={onCloseAlert}>
                                                        Cancel
                                                    </Button>
                                                    <Button colorScheme="red" onClick={handleRemoveTask} ml={3}>
                                                        Delete
                                                    </Button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialogOverlay>
                                    </AlertDialog>
                                </>
                            )}
                        </Box>
                    </div>
                )}
            </Draggable>
            <Card isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={item} />
        </>
    );

};

export default TaskCard;
