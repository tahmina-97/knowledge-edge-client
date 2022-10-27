import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { id, course_name, author } = useLoaderData;
    return (
        <div>
            <h1>{course_name}</h1>
            <h2>Author: {author.name}</h2>
            <img src={author.img} alt="" />

        </div>
    );
};

export default Checkout;