import React from "react";

// Local Imports - JS
import Section from "./Section";
import GithubPreview from "./GithubPreview";

// Local Imports - CSS
import "./css/Profile.scss";

function Profile(props) {
  return (
    <Section name="profile">
      <div className="section-header">
        <h1>Michael LaDouceur</h1>
        <h3>
          A former mechanical engineer finding his passion in software
          development
        </h3>
      </div>
      <div className="section-body">
        <div className="profile">
          <div className="profile-content">
            <p>
              I am a full stack software developer with an appetite for
              learning. In my free time I enjoy travelling, wood working,
              exercise, camping, and anything science & design related. Also
              enjoy taking pictures with sqirrels.
            </p>
          </div>
          <img src="./assets/portrait-2.JPG" alt="" />
          <div className="profile-content">
            <div>
              <h3>Name:</h3>
              <h4>Michael LaDouceur</h4>
            </div>
            <div>
              <h3>Age:</h3>
              <h4>28</h4>
            </div>
            <div>
              <h3>Location:</h3>
              <h4>Chicago, IL</h4>
            </div>
            <div>
              <h3>Favorite Food:</h3>
              <h4>Sushi</h4>
            </div>
          </div>
        </div>
      </div>
      <GithubPreview githubData={githubData} />
    </Section>
  );
}

export default Profile;
