import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = ({ course }) => {
    const { id, rating, total_purchase, course_name, author, image_url } = course;
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={image_url} class="card-img-top" height="250px" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{course_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;