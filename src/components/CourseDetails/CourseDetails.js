import React from 'react';
import Pdf from "react-to-pdf";
import './CourseDetails.css'
import { Card, Container } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ref = React.createRef();

const CourseDetails = () => {

    const { details, id, course_name } = useLoaderData();

    return (
        <Container className='mt-5'>

            <div class="card" ref={ref}>

                <h5 class="card-header">Detail Information About <span className='text-info'>{course_name}</span>
                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <button className='border-0 btn-down-style' onClick={toPdf}><FaDownload></FaDownload></button>}
                    </Pdf>
                </h5>

                <div class="card-body">
                    <h5 class="card-title">Course: {course_name}</h5>
                    <p class="card-text">{details}</p>
                    <Link className='btn btn-primary' to={`/course/${id}`}>Get Premium Access</Link>
                </div>
            </div>
        </Container>
    );
};

export default CourseDetails;