import React from 'react';
import Course from '../Course/Course';

const CourseSection = ({ courses }) => {
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-5'>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                >
                </Course>)
            }

        </div>
    );
};

export default CourseSection;