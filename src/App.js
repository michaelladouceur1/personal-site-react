import React from "react";
import { useState } from "react";
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

function App() {
  AOS.init();
  const { portfolio } = data;

  const [featureApp, setFeatureApp] = useState(portfolio[0]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SideNav />
      <FeatureAppModal
        visible={modalVisible}
        setVisible={setModalVisible}
        featureApp={featureApp}
      />
      <Profile />
      <Education />
      <Career />
      <Skills />
      <Portfolio
        portfolio={portfolio}
        setModalVisible={setModalVisible}
        setFeatureApp={setFeatureApp}
      />
    </>
  );
}

export default App;
