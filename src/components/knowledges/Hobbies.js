import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>

      <ul>
        <li className="hobby">
          <i className="fas fa-dice"></i>
          <span>Jeux de société en club</span>
        </li>
        <li className="hobby">
          <i className="fab fa-battle-net"></i>
          <span>Jeux Blizzard</span>
        </li>
        <li className="hobby">
          <i className="fas fa-chalkboard-teacher"></i>
          <span>E-learning</span>
        </li>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
