import {
    Box,
    Image,
    Flex,
    Heading
} from '@chakra-ui/react';
import googlePlayImage from './img/google.png'
import { Container } from './App';

function VideoPlayer() {
    return (
        <Container bgColor='#F83D5C'>
            <Flex align='center' justify='center' direction='column' h='100vh'>
                <Box p={10}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aETNYyrqNYE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Box>
                <Box>
                    <Heading color='white' textAlign='center'>Download Now!</Heading>
                    <Flex>
                        <Image src={googlePlayImage} alt='' p={10} />
                        <Image src={googlePlayImage} alt='' p={10} />
                    </Flex>
                    
                </Box>
            </Flex>
        </Container>
    )
}

export default function VideoAndDownloadSection() {
    return (
        <VideoPlayer/>
    )
}