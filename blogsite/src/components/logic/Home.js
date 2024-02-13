import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (
        <div className='container'>
            {error && <div className='display display-6 text-light text-center my-3'>{error}</div>}
            {isPending && <div className='display display-6 text-light text-center my-3'>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div >
    )
}
