import {
    Box,
    Grid,
    Text,
    Image,
    List,
    ListItem,
    ListIcon,
    Divider
} from '@chakra-ui/react';
import logo from './img/logo.png';

function FooterDescription() {
    return (
        <Box>
            <Text color='white'>
            With over a decade of educational excellence, we support students to become competent professionals nationally and globally. 
            We provide the finest coaching of leading commerce courses CA, ACCA, CMA USA, CMA India, CS, CAT, B Voc, and UG/PG thereby becoming a single-point destination for all aspirants.
            </Text>
        </Box>
    )
}

function FooterLogo() {
    return (
        <Box>
            <Image w='200px' src={logo} alt='Logo'/>
        </Box>
    )
}

function FooterAddress() {
    return (
        <List textAlign='right' spacing={3} color='white'>
            <ListItem>
                <List>
                    <ListItem>
                        LAKSHYA
                    </ListItem>
                    <ListItem>
                        Adv Easwara Iyer Rd, Pullepady, Kochi, Kerala
                    </ListItem>
                    <ListItem>
                        682035
                    </ListItem>
                </List>
            </ListItem>
            <ListItem>
                +91 9061277777 (IND), +971 568631499 (UAE)
            </ListItem>
            <ListItem>
                info@lakshyaca.com
            </ListItem>
        </List>
    )
}

export default function Footer() {
    return (
        <Box 
            px={['1rem', '2rem', '4rem', '4rem', '8rem']} 
            bgColor='#F83D5C'
        >
            <Divider/>
            <Grid
                gap={5} 
                gridAutoFlow={['row', 'row', 'column']} 
                gridAutoColumns='1fr' 
                placeItems='center'
                py={10}
            >
                <FooterDescription/>
                <FooterLogo/>
                <FooterAddress/>
            </Grid>
        </Box>
    )
}