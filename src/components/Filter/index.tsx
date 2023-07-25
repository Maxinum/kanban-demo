import { Input, Box, InputGroup, InputLeftElement } from '@chakra-ui/react'
import classes from './Filter.module.css';
import { SearchIcon } from '@chakra-ui/icons'
import BasicUsage from '../Modal';
import { useState } from 'react';
import { useColumnsStore } from '../../store';

const Filter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { filter } = useColumnsStore();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchQuery(value);
        filter(value);
    };

    return (
        <Box className={classes.filter}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                >
                    <SearchIcon color='gray.300' />
                </InputLeftElement>

                <Input value={searchQuery} onChange={handleChange} placeholder='Search...' />
            </InputGroup>
            <BasicUsage />
        </Box>
    )
}

export default Filter;