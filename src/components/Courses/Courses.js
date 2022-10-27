import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategorySection from '../CategorySection/CategorySection';
import CourseSection from '../CourseSection/CourseSection';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <CategorySection></CategorySection>
                </Col>
                <Col>
                    <CourseSection
                        courses={courses}
                    ></CourseSection>
                </Col>

            </Row>
        </Container>
    );
};

export default Courses;