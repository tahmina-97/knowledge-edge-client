import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div className='text-center'>
            <h1>{course.course_name}</h1>
            <h2>Author: {course.author.name}</h2>
            <img src={course.author.img} alt="" />
            <button className='btn btn-primary d-block mx-auto my-4'>Buy now</button>


        </div>
    );
};

export default Checkout;