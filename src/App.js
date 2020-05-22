import React from "react";
import { useState } from "react";
import "./App.css";
import Project from "./components/projects";
import Discover from "./components/discover";
import Artist from './components/artist';
function App() {
  const [display, setDisplay] = useState({projects: false, discover: false, engineer: false});
/**
 * 
 * Build the app so it has 2 dimensions, the first one tells the story of will simpson the software engineer
 * the second dimension is Will Simpson the Artist, displaying artistic achievements and story
 */
const handleProject = projects => {
  setDisplay({
    ...display,
    discover: false,
    projects
  });
};
const handleDiscover = discover => {
  setDisplay({
    ...display,
    projects: false,
    discover
  });
};
const handleEngineer = engineer => {
  console.log(engineer)
  setDisplay({
    ...display,
    engineer
  });
};
  return (
    <div className="monospace w3-text-dark-grey">
      <div className="w3-container w3-text-dark-grey">
        
        <h1>William Robert Simpson</h1>
        <div onClick={()=>handleEngineer(!display.engineer)}style={{ cursor: "pointer" }}> <p>Software Engineer | Musician-Artist   <i className="icofont-2x icofont-hand-drag1"></i></p></div>
      </div>
   {display.engineer ? 
   <div>
   
     <ul>
       <li>
  
       <h3 style={{ cursor: "pointer", textDecoration: "underline"}} onClick={()=>handleProject(!display.projects)}>Projects</h3>
      </li><li>
     

       <h3 style={{ cursor: "pointer" , textDecoration: "underline"}} onClick={()=>handleDiscover(!display.discover)}>Discover</h3>
      
       </li>
         
     
     </ul>
     <div className="w3-row-padding">{display.projects ? <Project /> : null}  {display.discover ? <Discover /> : null} </div>
  
   {display.discover || display.projects ? null : (
     <section className="w3-display-bottom">
       <div className="w3-third">
         <a target="_blank" rel="noopener noreferrer" href="https://github.com/WSINTRA/">
           <div className="contact-box" id="connect">
             <i className="contact-box__icon icofont-github"></i>
             <h3 className="heading-tertiary">WSINTRA</h3>
             <p className="contact-box__text"><i>"what the code looks like"</i></p>
           </div>
         </a>
       </div>
       <div className="w3-third">
         <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@will.simpson_">
           <div className="contact-box">
             <i className="contact-box__icon icofont-read-book"></i>
             <h3 className="heading-tertiary">will.simpson_</h3>
             <p className="contact-box__text"><i>"writings and ramblings"</i> </p>
           </div>
         </a>
       </div>
       <div className="w3-third">
         <a
           target="_blank"
           rel="noopener noreferrer"
           href="https://www.linkedin.com/in/william-robert-simpson/"
         >
           <div className="contact-box">
             <i className="contact-box__icon icofont-linkedin"></i>
             <h3 className="heading-tertiary">
               william-r-simpson
             </h3>
             <p className="contact-box__text"><i>"networking and career"</i> </p>
           </div>
         </a>
       </div>
     </section>
     )}
 </div>
 :
 //draw some cool as fuck artistic site here that expresses my artistic abilities
 <Artist/> }
      
    </div>
  );
}

export default App;
