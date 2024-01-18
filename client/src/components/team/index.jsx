import React from "react";
import "./style.css";
const Team = () => {
  return (
    <div className="team container">
      <h4>TEAM</h4>
      <h1>Leadership</h1>
      <div className="team_cards row">
        <div className="team_card col-4">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
            alt=""
          />
          <h1>John Rooster</h1>
          <h2>Co-Founder, President</h2>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
