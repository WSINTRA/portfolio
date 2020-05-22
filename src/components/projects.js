import React from "react";

export default function projects() {
  return (
    <div className="w3-display-container">
      <div className="w3-animate-left w3-container">
        <div className="contact-box w3-text-dark-grey">
          <h2><b> Global Warming VR experience</b></h2> - React360 -{" "}<b>
          <a style={{ cursor: "pointer", textDecoration: "underline"}} target="_" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=v5OAtACUmhg">
            DEMO
          </a>
          -
          <a style={{ cursor: "pointer", textDecoration: "underline"}} target="_" rel="noopener noreferrer" href="https://github.com/WSINTRA/globalWarming_v1">
            GH
          </a></b>
          <p>
            An educational VR experience, built to encourage engagement with
            students using VR in the classroom to learn about issues around
            Global Warming
          </p>
        </div>

        <div className="contact-box w3-text-dark-grey">
        <h2><b> Little Dutch Coffee Shop</b></h2>- React Redux SASS Ruby on
          Rails PostGreSQL -{" "}<b>
          <a style={{ cursor: "pointer", textDecoration: "underline"}} target="_" rel="noopener noreferrer" href="https://youtu.be/TBqfQ2GGsnM">
            DEMO
          </a>
          -
          <a style={{ cursor: "pointer", textDecoration: "underline"}} 
            target="_"
            rel="noopener noreferrer"
             href="https://github.com/WSINTRA/little-dutch-coffee-shop-remake"
          >
            GH
          </a></b>
          <p>
            A demo eccomerce site built for freelance work, has product review
            functionality and staff login. Users can buy products and leave
            reviews. Admin can add new products and create new customers and
            staff.
          </p>
        </div>

        <div className="contact-box w3-text-dark-grey">
        <h2><b>  DrumMashN </b></h2>- JavaScript HTML/CSS Ruby on Rails PostGreSQL -{" "}<b>
          <a style={{ cursor: "pointer", textDecoration: "underline"}} target="_" rel="noopener noreferrer"
          href="https://wsintra.github.io/drumMachineFrontEnd/">
            DEMO
          </a>
          -
          <a style={{ cursor: "pointer", textDecoration: "underline"}} target="_" rel="noopener noreferrer"
          href="https://github.com/WSINTRA/drumMachineFrontEnd">
            GH
          </a></b>
          <p>
            Visually stimulating drum sample machine, user can select existing
            kits or create there own. Drum pads interact with the background
            spheres. A user can also build a kit using the built in sounds.
          </p>
        </div>
      </div>
    </div>
  );
}
