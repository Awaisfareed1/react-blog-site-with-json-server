import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history('/');
        })
    }
    return (
        <div className='container'>
            <p className='display display-6 text-light text-center my-3'>Create a new Blog</p>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 my-3">
                    <div className='bg-light p-3 rounder rounded-2'>
                        <form onSubmit={handleSubmit}>
                            <div className='my-3'>
                                <label className='form-label'>Blog Title: </label>
                                <input
                                    type="text"
                                    className='form-control'
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className='my-3'>
                                <label className='form-label'>Blog Text: </label>
                                <textarea
                                    className='form-control'
                                    value={body}
                                    onChange={(e) => { setBody(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className='my-3'>
                                <label className='form-label'>Blog Author: </label>
                                <input
                                    type="text"
                                    className='form-control'
                                    value={author}
                                    onChange={(e) => { setAuthor(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className='mt-4 text-center'>
                                {!isPending && <button className='btn btn-primary'>Add Blog</button>}
                                {isPending && <button className='btn btn-danger'>Adding Blog...</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
