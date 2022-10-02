import {
    Text, 
    Box,
    Grid,
    Heading,
    Image
} from '@chakra-ui/react';
import stepImage from './img/step_image.png';
import stepImage2 from './img/step_image2.png';
import { Container } from './App';

const stepDetails = [
    {
        id: 1,
        isInverse: false,
        heading: 'Step 1 - Download the App & Sign in',
        description: 'Get access to recorded lectures by qualified professionals. Download the app from the Web, Google Play, and the App Store to learn from qualified professionals. Sign up for the account with your email id and contact number.',
        image: stepImage
    },
    {
        id: 2,
        isInverse: true,
        heading: 'Step 2 - Choose your Course',
        description: 'Select your desired course and be a leading professional in the commerce field. Unlimited access to prominent commerce professional courses CA Foundation, CMA Foundation, and CSEET recorded sessions with 1-year validity.',
        image: stepImage2
    },
    {
        id: 3,
        isInverse: false,
        heading: 'Step 3 - 10 Days Free Trial & Learn Unlimited',
        description: 'Click on the 10 Days free trial and start learning your dream course anytime, anywhere with the Indian Institute of Commerce, Lakshya.',
        image: stepImage
    }
]

function StepText({heading, description}) {
    return (
        <Box>
            <Heading>   
                {heading}
            </Heading>
            <Text>
                {description}
            </Text>
        </Box>
    )
}

function StepImage({image}) {
    return (
        <Image src={image} alt='Dan Abramov' />
    )
}

function TwoEvenColumns({heading, description, image, isInverse}) {
    if (isInverse) {
        return (
            <Container bgColor='#F83D5C' h='100vh' display='flex' color='white'>
                <Grid gap={2} gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} gridAutoColumns='1fr' placeItems='center'>
                    <StepImage image={image}/>
                    <StepText heading={heading} description={description}/>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container h='100vh' display='flex'>
                <Grid gap={2} gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} gridAutoColumns='1fr' placeItems='center'>
                    <StepText heading={heading} description={description}/>
                    <StepImage image={image}/>
                </Grid>
            </Container>
        )
    }

}

export default function FinalSection() {
    let finalColumns = [];
    stepDetails.forEach((detail) => {
        finalColumns.push(
            <TwoEvenColumns 
                key={detail.id}
                heading={detail.heading} 
                description={detail.description} 
                image={detail.image} 
                isInverse={detail.isInverse}
            />
        )
    })
    return (
        <Box>
            {finalColumns}
        </Box>
    )
}