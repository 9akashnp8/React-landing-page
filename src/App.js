import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  Heading,
  Highlight,
  Input,
  theme,
  Select,
  Text,
  Image
} from '@chakra-ui/react';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from './Footer';
import logo from './img/logo.png'
import playstore from './img/playstore.png';
import appstore from './img/appstore.png';

const primaryColor = "#F83D5C";

export function Container({children, bgColor, color, h, display}) {
  return (
    <Box 
      px={['1rem', '2rem', '4rem', '6rem', '8rem']} 
      py="2rem"
      bgColor={bgColor}
      color={color}
      h={h}
      display={display}
    >
      {children}
    </Box>
  )
}

function Header() {
  return (
    <Container>
      <Flex align='center' justify='space-between'>
        <Image htmlWidth='160px' src={logo} alt='Lakshya Logo' />
        <Button colorScheme='orange' size='lg'>
          +91 9061277777
        </Button>
      </Flex>
    </Container>
  )
}

function RegistrationForm() {
  return (
    <Flex align='center' direction='column' gap='1rem' w={['100%', '100%', '100%', '75%']} bgColor={primaryColor} p={6} borderRadius='1em'>
      <Heading color='white'>Register Now!</Heading>
      <Input placeholder='full name' variant='filled' />
      <Input placeholder='email address' variant='filled' />
      <Input placeholder='phone' variant='filled' />
      <Select placeholder='interested course' variant='filled'>
        <option value='option1'>CA Foundation</option>
        <option value='option1'>CMA Foundation</option>
        <option value='option1'>CSEET</option>
      </Select>
      <Button>Register</Button>
    </Flex>
  )
}

function HeroHeading() {
  return (
    <Box>
      <Heading as='h1' size='2xl' lineHeight='tall'>
          Learn Unlimited with Lakshya Recorded Classes.
      </Heading>
      <Text as='h3' fontSize='xl' py={5}>
        <Highlight
          query='Download the App'
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
        >
          Start Learning Now! Download the App & Get access to unlimited sessions.
        </Highlight>
      </Text>
      <Flex gap={10} textAlign='center'>
        <Box>
          <Image src={playstore}/>
          <Text>Android</Text>
        </Box>
        <Box>
          <Image src={appstore}/>
          <Text>iOS</Text>
        </Box>
      </Flex>
    </Box>
  )
}

function Hero() {
  return (
    <Container>
      <Grid 
        gap={2} 
        gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} 
        gridAutoColumns='1fr' 
        justifyItems='end'
        alignItems='center'
        h='calc(100vh - 190px)'
      >
        <HeroHeading/>
        <RegistrationForm/>
      </Grid>
    </Container>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
