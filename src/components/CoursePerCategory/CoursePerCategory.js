import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const CoursePerCategory = () => {
    const courses = useLoaderData();
    return (
        <Container className='row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto'>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                >
                </Course>)
            }

        </Container>
    );
};

export default CoursePerCategory;