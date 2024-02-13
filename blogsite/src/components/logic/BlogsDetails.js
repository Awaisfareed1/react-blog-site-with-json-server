import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

export default function BlogsDetails() {
    const history = useNavigate();
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE",
        }).then(() => {
            history('/');
        });
    }
    return (
        <div className='container'>
            {isPending && <p className='display display-6 text-light text-center my-3'>Loading...</p>}
            {error && <p className='display display-6 text-light text-center my-3'>{error}</p>}
            {blog &&
                <article>
                    <p className='display display-6 text-light text-center my-3'>{blog.title}</p>
                    <p className='blog-author'>Written by: {blog.author}</p>
                    <div className='blog-body mb-3'>
                        <p className='text-light'>{blog.body}</p>
                    </div>
                    <div className="my-3 text-end">
                        <button className='btn btn-danger' onClick={handleDelete}>Delete Blog</button>
                    </div>
                </article>
            }
        </div>
    )
}
