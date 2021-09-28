import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 0.9 },
      { id: 2, value: "CSS", xp: 0.9 },
      { id: 3, value: "Sass", xp: 0.1 },
      { id: 4, value: "Javascript", xp: 0.9 },
      { id: 5, value: "Typescript", xp: 0.1 },
    ],
    stack: [
      { id: 1, value: "MongoDB", xp: 0.6 },
      { id: 2, value: "Express", xp: 0.6 },
      { id: 3, value: "React", xp: 0.6 },
      { id: 4, value: "Nodejs", xp: 0.6 },
      { id: 5, value: "Expo", xp: 0.1 },
      { id: 6, value: "Vuejs 3", xp: 0.1 },
    ],
  };
  render() {
    let { languages, stack } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          title="languages"
          className="languagesDisplay"
          languages={languages}
        />
        <ProgressBar
          title="stack"
          className="languagesDisplay"
          languages={stack}
        />
      </div>
    );
  }
}
export default Languages;
