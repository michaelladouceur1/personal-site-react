import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Section from "./components/Section";
import data from "./data";
import SideNav from "./components/SideNav";
import FeatureAppModal from "./components/FeatureAppModal";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

import { getGithubData } from "./utils";

function App() {
  AOS.init();
  const { career, education, portfolio, skills } = data;

  const [githubData, setGithubData] = useState({});
  const [featureApp, setFeatureApp] = useState(portfolio[0]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(async () => {
    setGithubData(await getGithubData());
  }, []);

  return (
    <>
      <SideNav />
      <FeatureAppModal
        visible={modalVisible}
        setVisible={setModalVisible}
        featureApp={featureApp}
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
