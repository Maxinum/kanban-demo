import { ChangeEvent } from 'react';
import {
    Modal,
    Select,
    Input,
    Box,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Textarea
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useColumnsStore } from '../../store';
import classes from './Kanban.module.css';
import ITask from '../../interfaces/ITask';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    data: ITask
}

const Card = ({ isOpen, onClose, data }: IProps) => {
    const { updateTask } = useColumnsStore();
    const [formData, setFormData] = useState(data);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    
    useEffect(() => {
        updateTask(formData.id, formData)
    }, [formData])

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{formData.Task}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className={classes.modal_container}>
                        <Box>
                            <Textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                placeholder="Comment..."
                                rows={10}
                            />
                            created date: {formData.created_Date}
                        </Box>
                        <Box>
                            <label htmlFor="priority">Priority</label>
                            <Select
                                id="priority"
                                onChange={handleChange}
                                value={formData.priority}
                                name="priority"
                                placeholder='Select priority'
                            >
                                <option value='High'>High</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </Select>
                            <label htmlFor="dueDate">Due date</label>
                            <Input
                                id="dueDate"
                                onChange={handleChange}
                                value={formData.Due_Date}
                                name="Due_Date"
                                placeholder="Select due date"
                                type="date"
                            />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Card;
