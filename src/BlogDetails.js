import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { useHistory } from 'react-router-dom'


const BlogDetails = () => {
	const { id } = useParams()
	const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)
	const hist = useHistory()

	const handleClick = () => {
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: 'DELETE',
		}).then(() => {
			hist.push('/')
		})
	}

	return (
		<div className='blog-details'>
			{isPending && <p className="pending">Loading...</p>}
			{error && <h4>Error! {error}</h4>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<p>{blog.body}</p>
					<button onClick={handleClick}>Delete Blog</button>
				</article>
			)}
		</div>
	)
}

export default BlogDetails