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
        <div className="header-with-pic"><h2>Will Simpson - Professional Software Engineer & Creative Artist</h2><ReactLogo /></div>
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
          with a love for the community. <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=tdypEb6D1vE&list=PLJqqlHbgjmByeY1vowjwcqFQTw_ORH40I">Check out a playlist of the work I have been involved in </a>
          <i className="icofont-nerd-smile"></i>
          <br/><br/>Taking on new qualifications and
          shifting my focus. <br/>I crossed the Atlantic ocean and landed in New York City. <br/>
          Here I reconnected with my nerdy teenage self and re-introduced myself into a world of technology
          and software development. <br/><br/>A lot of self study and some community
          volunteering kept me busy before beginning the in-campus
          Full-Stack Engineering bootcamp at the Flatiron School in Brooklyn DUMBO. 
          I love software development, discovering and thinking about how all the
          complex pieces of the system fit together. <br/><br/>I still kept to my community engagement work
          in the education sphere and enjoyed being part of some really amazing
          projects in NYC & the UK. <br/><br/>In my creative pursuits, building the bridge between
          creative artist and software development with live visual audio
          performances. Producing original music and mixing with visual media. <br/><br/>Professionally I am always learning and finding ways I can bring my many experiences
          to the projects I am engaged in. Some of the newer technologies I am
          getting to grips with include GoLang, GraphQL, Prisma, React Native and Apollo. <br/>Check out my personal github for any projects I may be working on.<br/><br/>
          <br/>
          
        </p>
      </div>
      
      <div className="w3-quarter">
         <a target="_blank" rel="noopener noreferrer" href="https://github.com/WSINTRA/">
           <div className="contact-box" id="connect">
           <i className="icofont-3x icofont-brand-linux"></i>
             <h3 className="heading-tertiary">WSINTRA - GitHub</h3>
             <p className="contact-box__text"><i>"what the code looks like"</i></p>
           </div>
         </a>
       </div>

       <div className="w3-quarter">
         <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC_5ewFaJi2NtUuPvJa4bLQw">
           <div className="contact-box" id="connect">
             <i className="contact-box__icon icofont-youtube"></i>
             <h3 className="heading-tertiary">Will S - YouTube</h3>
             <p className="contact-box__text"><i>"Meet my artistic side"</i></p>
           </div>
         </a>
       </div>
       <div className="w3-quarter">
         <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@will.simpson_">
           <div className="contact-box">
             <i className="contact-box__icon icofont-read-book"></i>
             <h3 className="heading-tertiary">will.simpson_ - Medium</h3>
             <p className="contact-box__text"><i>"writings and ramblings"</i> </p>
           </div>
         </a>
       </div>
       <div className="w3-quarter">
         <a
           target="_blank"
           rel="noopener noreferrer"
           href="https://www.linkedin.com/in/william-robert-simpson/"
         >
           <div className="contact-box">
             <i className="contact-box__icon icofont-linkedin"></i>
             <h3 className="heading-tertiary">
               william-r-simpson - LinkedIn
             </h3>
             <p className="contact-box__text"><i>"networking and career"</i> </p>
           </div>
         </a>
         
       </div>
    </div>
  );
}

export default App;
