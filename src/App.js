import React from "react";
import cookie from "./css/cookie.png";

import "./css/app.css";

class App extends React.Component {
  state = {
    score: 0,
    currentUpgrade: 1,
    currentLevel: 1,
    currentCost: 5,
    currentAuto: 1,
  };

  componentDidMount() {
    document.addEventListener("click", this.timerSum());
  }

  componentWillUnmount() {
    document.addEventListener("click", this.timerSum());
  }

  contador = () => {
    setTimeout(() => {
      const scores = { ...this.state };
      scores.score = scores.score + 1;
      this.setState(scores);
      this.contador();
    }, 1000);
  };
  sumCookie = () => {
    const scores = { ...this.state };
    scores.score = scores.score + scores.currentUpgrade;
    this.setState(scores);
  };

  Upgradefactory = () => {
    const scores = { ...this.state };
    if (scores.score >= scores.currentCost) {
      scores.score = scores.score - scores.currentCost;
      scores.currentUpgrade = scores.currentUpgrade * 3;
      scores.currentLevel++;
      scores.currentCost = scores.currentCost * 3;
      scores.currentAuto = scores.currentAuto * 2;
    }

    this.setState(scores);
  };

  timerSum = () => {
    setTimeout(() => {
      const scores = { ...this.state };

      scores.score = scores.score + scores.currentAuto;
      this.timerSum();
      this.setState(scores);
    }, 1000);
  };

  doubleCall = () => {
    this.sumCookie();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <a>
            <h3>Click the cookie</h3>
          </a>
          <div className="counter">
            <p>
              Count: <p className="cookieCount">{this.state.score}</p> cookies
              {this.state.score === 0}
            </p>
          </div>
          <img
            className="cookie"
            src={cookie}
            onClick={this.doubleCall}
            alt="cookie"
          />
        </div>

        <hr></hr>
        <div>
          <h2>Current Level: {this.state.currentLevel}</h2>
          <button onClick={this.Upgradefactory}> Upgrade Factory</button>
          <p>Cost: {this.state.currentCost} cookies</p>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
