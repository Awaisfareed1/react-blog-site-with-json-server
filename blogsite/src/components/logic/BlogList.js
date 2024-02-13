import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ blogs, title }) {

    return (
        <div className="blog-list">
            <div className="display display-6 text-light text-center my-3">{title}</div>
            {
                blogs.map((blog) => (
                    <div className="row justify-content-center justify-content-center g-2 " key={blog.id}>

                        <div className="col-md-8 col-lg-6 my-3">
                            <Link to={`/blogs/${blog.id}`}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        Featured
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{blog.title}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <p className='text-danger'>Written By: {blog.author} </p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
