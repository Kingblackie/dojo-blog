import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('')
	const [isPending, setIsPending] = useState(false)
	const hist = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (title === '' || body === '') return
		let blog = { title, body, author }
		setIsPending(true)

		setTimeout(() => {
			fetch('http://localhost:8000/blogs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(blog),
			}).then(() => {
					console.log('New blog added')
					setIsPending(false)
					hist.push('/')
				})
		}, 1000)

	}

	return (
		<div className='create'>
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input 
					value={title} 
					type="text" 
					required
					onChange={e => setTitle(e.target.value)}	
				/>

				<label>Blog body:</label>
				<textarea
					required
					onChange={e => setBody(e.target.value)}
				/>

				<label>Blog author</label>
				<input 
					value={author} 
					type="text" 
					required
					onChange={e => setAuthor(e.target.value)}	
				/>

				{isPending ? <button disabled>Adding Blog...</button> : <button>Add Blog</button>}
			</form>
		</div>
	)
}

export default CreateBlog