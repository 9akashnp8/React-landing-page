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
// import Section4 from './Section4';
import Footer from './Footer';
import logo from './img/logo.png'
import playstore from './img/playstore.png';
import appstore from './img/appstore.png';
import './App.css';

const primaryColor = "#F83D5C";

function Header() {
  return (
    <Box className='container' py={5}>
      <Flex align='center' justify='space-between'>
        <Image htmlWidth='160px' src={logo} alt='Lakshya Logo' />
        <Button bgColor='#F83D5C' color='white' size='lg'>
          +91 9061277777
        </Button>
      </Flex>
    </Box>
  )
}

function RegistrationForm() {
  return (
    <Flex 
      align='center' 
      direction='column'
      gap='1rem' 
      w='100%' 
      bgColor={primaryColor} 
      p={6} 
      borderRadius='1em'
    >
      <Heading textAlign='center' color='white'>Or Get In Touch with our Experts!</Heading>
      <Input placeholder='full name' variant='filled' />
      <Input placeholder='email address' variant='filled' />
      <Input placeholder='phone' variant='filled' />
      <Select placeholder='interested course' variant='filled'>
        <option value='1'>CA Foundation</option>
        <option value='2'>CMA Foundation</option>
        <option value='3'>CSEET</option>
      </Select>
      <Button>Register</Button>
    </Flex>
  )
}

function HeroHeading() {
  return (
    <Box textAlign={['center', 'center', 'center', 'left']}>
      <Heading as='h1' size={['xl', 'xl', 'xl', '2xl']}>
          Learn Unlimited with Lakshya Recorded Classes.
      </Heading>
      <Text as='h3' fontSize={['1.1rem']} py={5}>
        <Highlight
          query='Download the App'
          styles={{ px: '2', py: '1', rounded: '0.5rem', bg: '#F83D5C', color: 'white' }}
        >
          Start Learning Now! Download the App & Get access to unlimited sessions.
        </Highlight>
      </Text>
      <Flex 
        mx={['auto', 'auto', 'auto', '0']}
        gap={10}
        border='2px solid #F83D5C'
        borderRadius='1rem'
        p={5}
        w='max-content'>
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
    <Box 
      className='container' 
      minH={['100vh', '100vh', 'calc(100vh - 450px)', 'calc(100vh - 850px)', 'calc(100vh - 120px)']} 
      display='flex'
      mb={[5, 10, 10, 2]}
    >
      <Box display='flex'>
        <Grid 
          gap={[5, 10, 10,  2]} 
          gridAutoFlow={['row', 'row', 'row', 'column', 'column', 'column']} 
          gridAutoColumns='1fr' 
          justifyItems='end'
          alignItems='center'
          minHh={['100vh', '100vh', 'calc(100vh - 450px)', 'calc(100vh - 850px)', 'calc(100vh - 120px)']}
        >
          <HeroHeading/>
          <RegistrationForm/>
        </Grid>
      </Box>
    </Box>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Hero/>
      <Section2/>
      <Section3/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
