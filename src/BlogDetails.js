import { useParams } from "react-router-dom";
import { useState } from "react";
const BlogDetails = () => {

  const { id } = useParams();
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "joy", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "joy", id: 3 },
  ]);
 
  return (

    <div className="blog-details">
      <h2>Hey its Blog {id} </h2>
    
    </div>

  );
};

export default BlogDetails;


// routing parameter process:
// import { useParams } from "react-router-dom ";
// import useFetch  from './Custom_Hook'

// const BlogDetails =() =>{
//     const {id} =useParams();
//     const {data : blog ,error, isPending } = useFatch('http://localhost:8000/blogs')

//  return (
//     <div className ="blog-details"> 
//     {isPending && <div>Loading...</div>}
//     {error && <div>{error}</div>}
//     {isPending && (
//         <article>
//         <h2> {blog.title} </h2>
//         <div>{blog.body}</div>
//         </article>
//     )}
//     </div>
//  );

// }
// export default BlogDetails; 