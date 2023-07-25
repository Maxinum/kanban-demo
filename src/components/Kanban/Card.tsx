// import { ChangeEvent } from 'react';
// import {
//     Modal,
//     Select,
//     Button,
//     Input,
//     ModalOverlay,
//     ModalContent,
//     useDisclosure,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//     Textarea
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { useColumnsStore } from '../../store';
// import classes from './Modal.module.css';

// const BasicUsage = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const { addTask } = useColumnsStore();
//     const [formData, setFormData] = useState({
//         name: "",
//         date: "2023-07-23",
//         columnId: "1",
//         comment: "",
//         priority: "Medium"
//     });


//     return (
//         <>
//             <Button onClick={onOpen}>Add Task</Button>

//             <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader></ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody className={classes.container}>

//                     </ModalBody>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// };

// export default BasicUsage;
