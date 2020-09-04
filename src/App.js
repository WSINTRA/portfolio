import React from "react";
import "./App.css";
import {ReactComponent as ReactLogo} from './logo.svg';

function App() {
/**
 * 
 * Build the app so it has 2 dimensions, the first one tells the story of will simpson the software engineer
 * the second dimension is Will Simpson the Artist, displaying artistic achievements and story
 */

  return (
    <div >
     
       <div >
        <div className="header-with-pic"><h2>My Story</h2><ReactLogo /></div>
        <p className="monospace">
          Life is a long and exciting journey, We leave school/education hoping to meet the 
          the world and find a place in it.<br/><br/> In my youth I was a nerdy
          teenager spending late nights on<a style={{ cursor: "pointer", textDecoration: "underline"}} target="_blank" rel="noopener noreferrer" href="https://www.hack3r.com/ClassicMoments"> IRC </a>
         hanging out with like minded technical tinkerers and
          learning the lingo and the history of phreaking and hobbyist computers. <br/>Whilst studying C/C++, on a home
          learning course. <br/><br/>I applied for an apprenticeship and joined BT (British Telecommunications) as an Advanced Network Engineering apprentice in 2004.
           I felt very fortunate to be
          in such a great program. <br/>Eventually transitioning from
          telecommunications engineering to youth work and education. <br/>A musician
          with a love for the community. 
          <i className="icofont-nerd-smile"></i>
          <br/><br/>Taking on new qualifications and
          shifting my focus. <br/>I jumped the Atlantic ocean and landed in New York City. <br/>
          Here I reconnected with my nerdy teenage self and became interested in the world of code
          and software development. <br/><br/>A lot of self study and some community
          volunteering kept me busy before beginning the in-campus
          Full-Stack Engineering bootcamp at the Flatiron School in Brooklyn DUMBO. 
          I love software development, discovering and thinking about how all the
          complex pieces of the system fit together. <br/><br/>I still keep to my community engagement work
          in the education sphere and enjoy being part of some really amazing
          projects in NYC. <br/><br/>With my new
          found love for Processing and p5js, I am building the bridge between
          creative artist and software development with live visual audio
          performances. Producing music on the fly with visuals created
          in processing! <br/><br/>Passions aside, professionally I am still learning in
          my work environment and finding ways I can bring my many experiences
          to the projects I am engaged in. Some of the newer technologies I am
          getting to grips with include GraphQL, Prisma, React Native and Apollo. <br/>Check out my github for the code.<br/><br/>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/WSINTRA/">
          <i className="icofont-3x icofont-brand-linux"></i></a>
        </p>
      </div>
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
    </div>
  );
}

export default App;
