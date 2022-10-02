import {
    Grid,
    Box,
    Image,
    Heading,
    Text
} from '@chakra-ui/react';
import courseCardPlaceholder from './img/course_card_placeholder.png';
import './App.css';

const primaryColor = "#F83D5C";

// const breakpoints = ['0em', <small> '30em', <mobile> '48em', <laptop> '62em', <desktop> '80em', <bigscreen> '96em']
//  [small, mobile, laptop, desktop, bigscreen]

const courseDatas = [
  {id: 1, title: 'CA Foundation', description: '400+ Hours Chartered Accountancy Foundation Course Recorded Lecture.'},
  {id: 2, title: 'CMA Foundation', description: '190+ Hours Cost and Management Accountant Recorded Lecture.'},
  {id: 3, title: 'CSEET', description: '140+ Hours CS Executive Entrance Test Recorded Lecture.'},
]

function CourseCard({course, description}) {
    return (
        <Box 
          bgColor='white' 
          p={8} 
          textAlign='center'
          borderRadius='1rem'
        >
            <Image w={['150px', '200px']} m='auto' src={courseCardPlaceholder} alt='' />
            <Heading>{course}</Heading>
            <Text>{description}</Text>
        </Box>
    )
}

export default function ThreeColumnCourses() {

  let courseCardList = []

  courseDatas.forEach((courseData) => {
    courseCardList.push(
      <CourseCard key={courseData.id} course={courseData.title} description={courseData.description}/>
    )
  })

  return (
    <Box bgColor={primaryColor} minH={['100%', '100%', '100vh']} display='flex' alignItems='center'>
      <Box className='container' py={[5, 5, 5, 0]} px={[ , , 10, 0]}>
        <Heading color='white' size='3xl' textAlign='center'>Our Courses</Heading>
        <Grid 
          gap={5} 
          gridAutoFlow={['row', 'row', 'row', 'column']} // Responsive
          gridAutoColumns='1fr'
          py={['1.5rem', '2rem', '3rem', '4rem']} // Responsive
        >
          {courseCardList}
        </Grid>
        <Text color='white' textAlign='center'>Get Up to 15% discount on fees.</Text>
        <Text color='white' textAlign='center'>Start your 10 Days free trial TODAY!</Text>
      </Box>
    </Box>
  )
}