import React from "react";
import P5Wrapper from "react-p5-wrapper";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

const sketch = (p) => {
  var mass = [];
  var positionX = [];
  var positionY = [];
  var velocityX = [];
  var velocityY = [];

  p.setup = function () {
    p.createCanvas(vw, vh - 300, p.WEBGL);
    p.noStroke();
    p.fill(64, 255, 255, 192);
  };

  p.draw = function () {
    p.background(32);

    for (var particleA = 0; particleA < mass.length; particleA++) {
      var accelerationX = 0;
      var accelerationY = 0;

      for (var particleB = 0; particleB < mass.length; particleB++) {
        if (particleA !== particleB) {
          var distanceX = positionX[particleB] - positionX[particleA];
          var distanceY = positionY[particleB] - positionY[particleA];

          var distance = p.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (distance < 1) distance = 1;

          var force = ((distance - 220) * mass[particleB]) / distance;
          accelerationX += force * distanceX;
          accelerationY += force * distanceY;
        }
      }

      velocityX[particleA] =
        velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
      velocityY[particleA] =
        velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
    }
    for (var particle = 0; particle < mass.length; particle++) {
      positionX[particle] += velocityX[particle];
      positionY[particle] += velocityY[particle];
      p.ellipse(
        positionX[particle] - 185,
        positionY[particle] - 295,
        mass[particle] * 1000,
        mass[particle] * 1000
      );
    
    }
   
  };
  function addNewParticle() {
    mass.push(p.random(0.003, 0.03));
    positionX.push(p.mouseX);
    positionY.push(p.mouseY);
    velocityX.push(0);
    velocityY.push(0);
  }
  p.mouseClicked = function () {
    addNewParticle();
  };
  p.mouseDragged = function () {
    addNewParticle();
  };
};
export default function Artist() {
  return (
    <div>
      <P5Wrapper sketch={sketch} />
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/artist/0OzVaBNTq5I0FW4AvraSYU"
          >
            <i className="icofont-spotify icofont-3x"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UC_5ewFaJi2NtUuPvJa4bLQw"
          >
            <i className="icofont-3x icofont-youtube"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PLJqqlHbgjmByeY1vowjwcqFQTw_ORH40I"
          >
            <i className="icofont-3x icofont-film"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://willsimpson85.wixsite.com/musicsavestheworld/"
          >
            <i className="icofont-3x icofont-disc"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
