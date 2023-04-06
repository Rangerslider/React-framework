
// 01. use state using rules 01:
/*ekhane first e ekta function create korsi jeta auto show korbe den button er modde r 
ekta function creat kore return e call  korsi jate button click korle oita show kore 
onekta ek page thewke onno page e jite gele button click kore jaite hoi omn gele  */


// import { useState } from "react";
// const Home = () => {
//     const[name,setName]= useState('nuri');
//     const[age,setAge]= useState('23');
//     const handleclick =() =>{
//         setName('joy');
//         setAge('24');
//     }
//     return ( 
//         <div className="home">
//         <p>{name} is {age} years old</p>
//         <button onClick={handleclick}>Click me</button>
//         </div>
//      );
// }
 
// export default Home;


// 02.use state using rules 02:

// import { useState } from "react";
// const Home = () => {


//     const[blogs, setBlogs]= useState([
//         { title: "My new website", body: "lorem ipsum...", author: "nuri", id: 1 },
//         { title: "Welcome party!", body: "lorem ipsum...", author: "joy", id: 2 },
//         { title: "Web dev top tips", body: "lorem ipsum...", author: "nuri", id: 3 },

//     ]);

//     return ( 
//         <div className="home">
//          {blogs.map((blog) =>(
//             <div className="blog-preview" key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <p> writen by {blog.author} </p>
//                 </div>
//          ))}
//           </div>
//      );
// }
 
// export default Home;






//03.props working  :

// ekhane  propos  kaj korer jonne parent function ready korbo & child function 
// BlogList page e create kore props dia call korbo 


// import { useState } from "react";
// import BlogList from "./BlogList";
// const Home = () => {


//     const[blogs, setBlogs]= useState([
//         { title: "My new website", body: "lorem ipsum...", author: "nuri", id: 1 },
//         { title: "Welcome party!", body: "lorem ipsum...", author: "joy", id: 2 },
//         { title: "Web dev top tips", body: "lorem ipsum...", author: "nuri", id: 3 },

//     ]);

//     return ( 
//         <div className="home">
//          <BlogList blogs ={blogs} title="all blog!" />
//           </div>
//      );
// }
 
// export default Home;



// 04.reusing props  onekta if else er moto but dinamaclly:

// import { useState } from "react";
// import BlogList from "./BlogList";
// const Home = () => {


//     const[blogs, setBlogs]= useState([
//         { title: "My new website", body: "lorem ipsum...", author: "nuri", id: 1 },
//         { title: "Welcome party!", body: "lorem ipsum...", author: "joy", id: 2 },
//         { title: "Web dev top tips", body: "lorem ipsum...", author: "nuri", id: 3 },

//     ]);

//     return ( 
//         <div className="home">
//         <BlogList blogs ={blogs} title="all blog!" />
//         {/*just here is the different*/}
//         <BlogList blogs ={blogs.filter((blog)=> blog.author === 'nuri')} title="nuri's blog!" />
//         </div>

//     );
// }
 
// export default Home;



//05.props delete:

// child component bloglist page e seta call ekhan e kora hoise
// import { useState } from "react";
// import BlogList from "./BlogList";
// const Home = () => {


//     const[blogs, setBlogs]= useState([
//         { title: "My new website", body: "lorem ipsum...", author: "nuri", id: 1 },
//         { title: "Welcome party!", body: "lorem ipsum...", author: "joy", id: 2 },
//         { title: "Web dev top tips", body: "lorem ipsum...", author: "nuri", id: 3 },

//     ]);

//     const handleDelete = (id) => {
//         const newblogs = blogs.filter(blog => blog.id !== id);
//         setBlogs(newblogs);
//     }

//     return ( 
//         <div className="home">
//         <BlogList blogs ={blogs} title="nuri's blog!" handleDelete = {handleDelete} />
//         </div>

//     );
// }
 
// export default Home;



//06.UseEffect hooks :


import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {


    const[blogs, setBlogs]= useState([
        { title: "My new website", body: "lorem ipsum...", author: "nuri", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "joy", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "nuri", id: 3 },

    ]);

    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }

    useEffect(() =>{
        console.log('ishmoth ura nuri');
        console.log(blogs);
    });

    return ( 
        <div className="home">
        <BlogList blogs ={blogs} title="nuri's blog!" handleDelete = {handleDelete} />
        </div>

    );
}
 
export default Home;
