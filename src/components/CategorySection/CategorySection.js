import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://knowledge-dot-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mt-5'>
            {/* <h1>All category: {categories.length}</h1> */}
            {
                categories.map(category =>
                    <p key={category.id}>
                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
            }


        </div>
    );
};

export default CategorySection;