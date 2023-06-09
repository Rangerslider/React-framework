import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
// function App() {
//        ei jaigai javascript code likhty hobe

//   const title = "welcome to the joy's blog";

//   let owner = {
//     name: "nuri",
//   };
//   const link = "https://github.com/Rangerslider/";

//   return (
//     <div className="App">
//       <h1>{title}</h1> //react e {} use korer lage
//       {/*javascript use korty caile ei jaigai { } use korty hobe */}
//       <div className="Content">
//         <p>Owner name is : {owner.name}</p>
//         <a href={link}>this one is dynamic link</a>
//       </div>
//     </div>
//   );
// }
                                  //example:
// function App() {
//   const title ='Ishmoth Ura Nuri'; 
//   const likes = 100;
//   const link = "https://github.com/Rangerslider/";
  
//   return ( 
//     <div className="App"> 
//     <div className="content">
//       <h1>{title}</h1> {/*dinamic value call kora hosse ejonno {} reat e alwase use hobe*/}
//       <a href={link}>this one is dynamic link</a>
//     <p>Blog liked {likes} times</p> {/* ekhane funcction app theke call kora + auto pragaraph show korsi  */}
//     </div>
//     </div>
//   );
// }
  
function App() {
  //js code part

  return (
    <Router>
      <div className="App">
        <Nav />{" "}
        {/* navbar ami sob somoi dekhbo ajonno nav er age route use kori nai  */}
        <div className="Content">
          <Switch>
            <Route exact path="/">
              {/* baper ta holo exact nah dile sob somoi e ei ./ path a jabe karon react sob somoi frist theke match kore r jeita firts a match pai hok seita akta part like ./ oita tei niye jabe   */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              {/*<BlogDetails />*/}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;

// export default er por jei function ke index.js theke access kortyci seita return korbe ei jaiga theke.
// R ei page er main kaj e hocche akta default funciton run kore seita ke return kore deya
//first latter capital hobe sob somoi App , Nuri  etc.

// ei app er moddhe e sob file thakbe akta web site er
//likha hobe onno jaigai kintu import kore ei jaigai use kora hbe like Nav & Home
