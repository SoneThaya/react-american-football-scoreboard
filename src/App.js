//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  const [ballOn, setBallOn] = useState(0)
  

  const homeTouchdown = event => {
    setHomeScore(homeScore + 7)
  }
  const homeFieldGoal = event => {
    setHomeScore(homeScore + 3)
  }

  const awayTouchdown = event => {
    setAwayScore(awayScore + 7)
  }
  const awayFieldGoal = event => {
    setAwayScore(homeScore + 3)
  }

  const addQuarter = event => {
    setQuarter(quarter + 1)
  }

  


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>

        <div className="quarters">
          <button onClick={addQuarter} className="awayButtons__fieldGoal">Change Quarter</button>
          
        </div>

        <div className="quarters">
          <input type='text'   />
          <button className="awayButtons__fieldGoal">Ball On</button>
          
        </div>


        
      </section>
    </div>
  );
}

export default App;
