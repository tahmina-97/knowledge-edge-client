import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, rating, total_purchase, course_name, author, image_url, price } = course;
    return (
        <div>
            <div class="col">
                <div class="card border-info h-100">
                    <img src={image_url} class="card-img-top" height="230px" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{course_name}</h5>

                        <div>
                            <div className='d-flex justify-content-between'>
                                <p>Author: <span className='fw-semibold'>{author.name}</span></p>
                                <h5 className='card-title text-danger'>
                                    $<span className=" text-primary font-bold"> {price}</span></h5>

                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Ratings: <span className='fw-bold text-warning'>{rating}</span></p>
                                <p>Purchased: <span className='fw-semibold'>{total_purchase}</span> times</p>
                            </div>
                        </div>
                        <Link to={`/course/${id}`} className='btn btn-primary w-100'>Get Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;