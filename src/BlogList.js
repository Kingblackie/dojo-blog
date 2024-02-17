import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const BlogList = ({ blogs }) => {
	const hist = useHistory()

	const handleClick = (id) => {
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: 'DELETE',
		}).then(() => {
			hist.push('/')
		})
	}

	return (
		<div className="blog-list">
			<h2 className="blogs-title">All blogs</h2>
			{blogs.map(blog => (
				<div className="blog-preview" key={blog.id}>
					<Link className='link' to={`/blogs/${blog.id}`}>
						<div>
							<h2>{blog.title}</h2>
							<p>Written by {blog.author}</p>
						</div>
						<button className='delete-btn' onClick={() => handleClick(blog.id)}>Delete Blog</button>
					</Link>
				</div>
			))}
		</div>
	)
}
 
export default BlogList