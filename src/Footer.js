import {
    Box,
    Grid,
    Text,
    Image,
    List,
    ListItem,
    Flex,
    Heading,
    Divider
} from '@chakra-ui/react';
import logo from './img/logo.png';
import googlePlayImage from './img/google.png'
import './App.css';

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
        <List textAlign={['left', 'left', 'right']} spacing={3} color='white'>
            <ListItem>
                <List>
                    <ListItem>
                        Indian Institute of Commerce - Lakshya
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
        <Box bgColor='#F83D5C'>
            <Box className='container'>
                <Flex align='center' justify='center' direction='column'>
                    <Box>
                        <Heading color='white' textAlign='center' p={[5, 5, 10]} size='xl'>Download Now!</Heading>
                        <Flex direction={['column', 'column', 'row']}>
                            <Image src={googlePlayImage} alt='' p={[5, 5, 10]} />
                            <Image src={googlePlayImage} alt='' p={[5, 5, 10]} />
                        </Flex>
                    </Box>
                </Flex>
                <Divider/>
                <Grid
                    gap={[10, 10, 5]} 
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
        </Box>
    )
}