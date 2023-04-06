import './App.css';
import Nav from'./Nav';
import Home from "./Home";

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
  


function App(){

  return(
    <>
    {/*<Nav></Nav>*/  /*evabeo hobe aber self closing o kora jabe*/} 
    <Nav  />
    <Home />
    </>
   

  );
}













export default App;

// export default er por jei function ke index.js theke access kortyci seita return korbe ei jaiga theke.
// R ei page er main kaj e hocche akta default funciton run kore seita ke return kore deya
//first latter capital hobe sob somoi App , Joy , Exx etc.

// ei app er moddhe e sob file thakbe akta web site er
//likha hobe onno jaigai kintu import kore ei jaigai use kora hbe like Nav & Home