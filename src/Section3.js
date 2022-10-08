import {
    Text, 
    Box,
    Grid,
    Heading,
    Image
} from '@chakra-ui/react';
// import stepImage from './img/step_image.png';
import stepImage from './img/01.png';
import stepImage2 from './img/02.png';
import stepImage3 from './img/03.png';
import './App.css';

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
        image: stepImage3
    }
]

function StepText({heading, description}) {
    return (
        <Box>
            <Heading size='3xl' lineHeight={1.3}>   
                {heading}
            </Heading>
            <Text pt={5}>
                {description}
            </Text>
        </Box>
    )
}

function StepImage({image}) {
    return (
        <Image src={image} w='100%' alt='Dan Abramov' />
    )
}

function TwoEvenColumns({heading, description, image, isInverse}) {
    if (isInverse) {
        return (
            <Box bg='linear-gradient(to right, #F83D5C, #FD4B2F)' h='100vh' display='flex' alignItems='center' color='white' textAlign={['center', 'center', 'center', 'right']}>
                <Box className='container'>
                    <Grid gap={5} gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} gridAutoColumns='1fr' placeItems='center'>
                        <StepImage image={image}/>
                        <StepText heading={heading} description={description}/>
                    </Grid>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box h='100vh' display='flex' alignItems='center' textAlign={['center', 'center', 'center', 'left']}>
                <Box className='container'>
                    <Grid gap={5} gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} gridAutoColumns='1fr' placeItems='center'>
                        <StepText heading={heading} description={description}/>
                        <StepImage image={image}/>
                    </Grid>
                </Box>
            </Box>
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