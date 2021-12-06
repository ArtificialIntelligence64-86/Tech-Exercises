import React from "react";
import "./Titlepage.css";

function Homepage() {
  return (
    <div>
      <div class="topnav">
        <div>
          <button class="home" onClick="window.location.href='/index.html'">
            Home
          </button>

          <button class="events" onClick="window.location.href='/events.html'">
            Events
          </button>

          <button class="login" onClick="window.location.href='/login.html'">
            Login
          </button>
        </div>
      </div>

      <h1 id="title">Science Olympiad</h1>
      <img
        src="https://www.illinoisolympiad.org/uploads/5/6/0/1/56012869/editor/state-tourney-cropped.jpg?1602899430"
        alt="Science Olympiad"
        id="picture"
      ></img>

      <h2>Illinois State Science Olympiad</h2>

      <strong>
        Founded in 1984, Science Olympiad is one of the premier science
        competitions in the nation, providing standards-based challenges to
        nearly 5,000 teams at 375 live and remote tournaments in all 50 states
        last year. There are 23 events ranging from core knowledge, builds,
        labs, and hybrids.
      </strong>

      <h3></h3>
    </div>
  );
}

export default Homepage;
