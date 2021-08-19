import React from "react";
import { useState, useEffect } from "react";

import Section from "./components/Section";
import data from "./data";
import SideNav from "./components/SideNav";
import FeatureAppModal from "./components/FeatureAppModal";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import axios from "axios";

function App() {
  const { career, education, portfolio, skills } = data;

  const [featureApp, setFeatureApp] = useState(portfolio[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [githubData, setGithubData] = useState({});

  useEffect(async () => {
    const {
      data: { viewer },
    } = await axios.get("/api/github");
    setGithubData(viewer);
  }, []);

  return (
    <>
      {modalVisible ? <></> : <SideNav />}
      <FeatureAppModal
        visible={modalVisible}
        setVisible={setModalVisible}
        featureApp={featureApp}
        skills={skills}
      />
      <Profile githubData={githubData} />
      <Portfolio
        portfolio={portfolio}
        setModalVisible={setModalVisible}
        setFeatureApp={setFeatureApp}
      />
      <Skills skills={skills} />
      <Career career={career} />
      <Education education={education} />
    </>
  );
}

export default App;
