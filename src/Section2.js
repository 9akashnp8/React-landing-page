import {
    Grid,
    Box,
    Image,
    Heading,
    Text
} from '@chakra-ui/react';
import courseCardPlaceholder from './img/course_card_placeholder.png'

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
        <Box bgColor='white'>
            <Image boxSize='200px' src={courseCardPlaceholder} alt='' />
            <Heading>{course}</Heading>
            <Text>{description}</Text>
        </Box>
    )
}

export default function ThreeColumnCourses() {

  let courseCardList = []

  courseDatas.forEach((courseData) => {
    courseCardList.push(
      <CourseCard course={courseData.title} description={courseData.description}/>
    )
  })

  return (
    <Grid gap={5} gridAutoFlow={['row', 'row', 'column']} gridAutoColumns='1fr' placeItems='center' px={['1rem', '2rem', '4rem', '8rem']}
      bgColor={primaryColor}
    >
      {courseCardList}
    </Grid>
  )
}