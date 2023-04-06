//props creating : child  function part

// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

//     console.log(props,blogs)
//     return ( 
//         <div className ="BlogList">
//         {blogs.map((blog) =>(
//             <div className="blog-preview" key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <p> writen by {blog.author} </p>
//                 </div>
//         ))}
//         </div>
//     );
// }
 
// export default BlogList;


//props deleting  : 

const BlogList = (blogs,handleDelete) => {
    
    return ( 
        <div className ="bloglist">
        {blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p> writen by {blog.author} </p>
                <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
        ))}
        </div>
    );
}
 
export default BlogList;