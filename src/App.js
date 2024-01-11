import React from "react";
import "./App.css";
import { ReactComponent as HeadShot } from "./logo.svg";

function App() {
  /**
   *
   * Build the app so it has 2 dimensions, the first one tells the story of will simpson the software engineer
   * the second dimension is Will Simpson the Artist, displaying artistic achievements and story
   */

  return (
    <>
      <div>
        <div className="header-with-pic">
          <h2>
            Will Simpson - Professional Software Crafter & Digital Creative
          </h2>
          <HeadShot />
        </div>
        <div className="w3-threequarter">
          <p
            style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
            className="monospace"
          >
            Life is a long and exciting journey, We leave school/education
            hoping to meet the the world and find a place in it.
            <br />
            <br /> In my youth I was a nerdy teenager spending late nights on
            <a
              style={{ cursor: "pointer", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hack3r.com/ClassicMoments"
            >
              {" "}
              IRC{" "}
            </a>
            hanging out with like minded technical tinkerers and learning the
            lingo and the history of phreaking and hobbyist computers. <br />
            Whilst studying C/C++, on a home learning course. (2003) <br />
            <br />I applied for an apprenticeship and joined BT (British
            Telecommunications) as an Advanced Network Engineering apprentice.
            I felt very fortunate to be in such a great program. <br />
            Eventually transitioning from telecommunications engineering to
            youth work and education.(2011) <br />A musician with a love for the
            community. Music Saves the world was founded in 2015.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=tdypEb6D1vE&list=PLJqqlHbgjmByeY1vowjwcqFQTw_ORH40I"
            >
              Check out a playlist of the work I have been involved in{" "}
            </a>
            <i className="icofont-nerd-smile"></i>
            <br />
            <br />
            Taking on new qualifications and shifting my focus. <br />I crossed
            the Atlantic ocean and landed in New York City. This was in 2017. <br />
            Here I reconnected with my nerdy teenage self and re-introduced
            myself into a world of technology and software development. <br />
            <br />A lot of self study and some community volunteering kept me
            busy before beginning the in-campus Full-Stack Engineering bootcamp
            at the Flatiron School in Brooklyn DUMBO.
              <br />
            <br />
            In my creative pursuits, building the bridge between creative artist
            and software development with live visual audio performances.
            Producing original music and mixing with visual media. <br />
            <br />
            Professionally I am always learning and finding ways I can bring my
            many experiences to the projects I am engaged in. 
            Check out my personal github for any projects I may be working on.
            <br />
          </p>
        </div>
      </div>

      <div className="w3-quarter" style={{ borderLeft: "solid" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/WSINTRA/"
        >
          <div className="contact-box" id="connect">
            <i className="icofont-3x icofont-brand-linux"></i>
            <h3 className="heading-tertiary">WSINTRA - GitHub</h3>
            <p className="contact-box__text">
              <i>"what the code looks like"</i>
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/william-robert-simpson/"
        >
          <div className="contact-box">
            <i className="contact-box__icon icofont-linkedin"></i>
            <h3 className="heading-tertiary">william-r-simpson - LinkedIn</h3>
            <p className="contact-box__text">
              <i>"networking and career"</i>{" "}
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://willsimpson85.wixsite.com/musicsavestheworld"
        >
          <div className="contact-box" id="connect">
            <i class="icofont-3x icofont-music-notes"></i>
            <h3 className="heading-tertiary">Music Saves the World</h3>
            <p className="contact-box__text">
              <i>"Archived Community Music project I started in 2015"</i>
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://books2all.co.uk/"
        >
          <div className="contact-box">
            <i className="contact-box__icon icofont-read-book"></i>
            <h3 className="heading-tertiary">Books2all</h3>
            <p className="contact-box__text">
              <i>"UK based charity I am involved with"</i>
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC_5ewFaJi2NtUuPvJa4bLQw"
        >
          <div className="contact-box" id="connect">
            <i className="contact-box__icon icofont-youtube"></i>
            <h3 className="heading-tertiary">Will S - YouTube</h3>
            <p className="contact-box__text">
              <i>"Meet my artistic side"</i>
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UClyDhZY0NhOPf_Ey6iDvEsg"
        >
          <div className="contact-box" id="connect">
            <i className="contact-box__icon icofont-youtube"></i>
            <h3 className="heading-tertiary">MSTW - YouTube</h3>
            <p className="contact-box__text">
              <i>
                "Music Saves The World YouTube channel (projects I worked on)"
              </i>
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@will.simpson_"
        >
          <div className="contact-box">
            <i className="contact-box__icon icofont-read-book"></i>
            <h3 className="heading-tertiary">will.simpson_ - Medium</h3>
            <p className="contact-box__text">
              <i>"Writing and ramblings"</i>{" "}
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.abctales.com/user/willsimpson"
        >
          <div className="contact-box">
            <i className="contact-box__icon icofont-read-book"></i>
            <h3 className="heading-tertiary">WillSimpson - ABCTaless</h3>
            <p className="contact-box__text">
              <i>"More writings and ramblings"</i>{" "}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
