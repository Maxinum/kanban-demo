import { Image, Box, Heading } from '@chakra-ui/react'
import Logo from "../../assets/react.svg";
import classes from './Header.module.css';

const Header = () => {
    return (
        <Box className={classes.header}>
            <Image
                src={Logo}
                width="50px"
                height="50px"
                alt='Logo'
            />
            <Heading size='xl'>Kanban Demo</Heading>
        </Box>
    )
}

export default Header;