import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { details, id, course_name, image_url } = useLoaderData();
    return (
        <div>
            <p>{details}</p>

        </div>
    );
};

export default CourseDetails;