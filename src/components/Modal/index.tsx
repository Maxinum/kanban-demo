import { ChangeEvent } from 'react';
import {
    Modal,
    Select,
    Button,
    Input,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Textarea
} from '@chakra-ui/react';
import { useState } from 'react';
import { useColumnsStore } from '../../store';
import classes from './Modal.module.css';

const BasicUsage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { addTask } = useColumnsStore();
    const [formData, setFormData] = useState({
        name: "",
        date: "2023-07-23",
        columnId: "1",
        comment: "",
        priority: "Medium"
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleSubmit = () => {
        const { name, date, columnId } = formData;
        const newTask = {
            id: String(Date.now()),
            Task: name,
            Due_Date: date,
        };
        addTask(columnId, newTask);
        onClose();
    };
    const disabled = formData.name.trim() === '';

    return (
        <>
            <Button onClick={onOpen}>Add Task</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className={classes.container}>
                        <label htmlFor="taskName">Task Name</label>
                        <Input
                            id="taskName"
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                            placeholder="Enter task name"
                        />

                        <label htmlFor="dueDate">Due Date</label>
                        <Input
                            id="dueDate"
                            onChange={handleChange}
                            value={formData.date}
                            name="date"
                            placeholder="Select due date"
                            type="date"
                        />

                        <label htmlFor="priority">priority</label>
                        <Select
                            id="priority"
                            onChange={handleChange}
                            value={formData.priority}
                            name="priority"
                            placeholder='Select priority'
                        >
                            <option value='Height'>Height</option>
                            <option value='Medium'>Medium</option>
                            <option value='Low'>Low</option>

                        </Select>

                        <label htmlFor="column">Status</label>
                        <Select
                            id="column"
                            onChange={handleChange}
                            value={formData.columnId}
                            name="columnId"
                        >
                            <option value='1'>To-do</option>
                            <option value='2'>In Progress</option>
                            <option value='3'>QA</option>
                            <option value='4'>Done</option>
                        </Select>
                        <label htmlFor="comment">Comment</label>
                        <Textarea
                            id="comment"
                            onChange={handleChange}
                            value={formData.comment}
                            name="comment"
                            placeholder="comment..."
                            resize={false}
                            rows={4}
                        />
                    </ModalBody>

                    <ModalFooter className={classes.footer}>
                        <Button isLoading={disabled} colorScheme='green' onClick={handleSubmit} >Add Task</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BasicUsage;
