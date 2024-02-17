import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

	return (
		<div className="home">
			{isPending && <p className="pending">Loading...</p>}
			{error && <h4>Error! {error}</h4>}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	)
}
 
export default Home