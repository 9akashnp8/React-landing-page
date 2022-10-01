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

function CourseCard() {
    return (
        <Box bgColor='white'>
            <Image boxSize='200px' src={courseCardPlaceholder} alt='Dan Abramov' />
            <Heading>CA Foundation</Heading>
            <Text>400+ Hours Chartered Accountancy Foundation Course Recorded Lecture.</Text>
        </Box>
    )
}

export default function ThreeColumnCourses() {
    return (
      <Grid gap={5} gridAutoFlow={['row', 'row', 'column']} gridAutoColumns='1fr' placeItems='center' px={['1rem', '2rem', '4rem', '8rem']}
        bgColor={primaryColor}
      >
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </Grid>
    )
  }