import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML/CSS", xp: 0.9 },
      { id: 2, value: "Javascript", xp: 0.9 },
      { id: 3, value: "Sass", xp: 0.1 },
      { id: 4, value: "Typescript", xp: 0.1 },
    ],
    stack: [
      { id: 1, value: "MERN", xp: 0.6 },
      { id: 2, value: "Redux / Nextjs", xp: 0.1 },
      { id: 3, value: "Expo", xp: 0.1 },
      { id: 4, value: "Vuejs 3", xp: 0.1 },
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
