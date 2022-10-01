import {
    Text, 
    Box,
    Grid,
    Heading,
    Image
} from '@chakra-ui/react';
import stepImage from './img/step_image.png';

function StepTitle() {
    return (
        <Box>
            <Heading>   
                Step 1 - Download the App & Sign in
            </Heading>
            <Text>
                Get access to recorded lectures by qualified professionals. 
                Download the app from the Web, Google Play, and the App Store to learn from qualified professionals.  
                Sign up for the account with your email id and contact number.
            </Text>
        </Box>
    )
}

function StepImage() {
    return (
        <Image src={stepImage} alt='Dan Abramov' />
    )
}

export default function TwoEvenColumns() {
    return (
        <Box px={['1rem', '2rem', '4rem', '4rem', '8rem']} my={['0', '1rem']}>
            <Grid gap={2} gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} gridAutoColumns='1fr' placeItems='center'>
                <StepTitle/>
                <StepImage/>
            </Grid>
        </Box>
    )
}