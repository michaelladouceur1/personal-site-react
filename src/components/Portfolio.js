import React from "react";
import { useState } from "react";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

import Section from "./Section";
import PortfolioCard from "./PortfolioCard";

import "./css/Portfolio.scss";

function Portfolio(props) {
  const { portfolio, setModalVisible, setFeatureApp } = props;

  const [filterSelected, setFilterSelected] = useState([]);

  portfolio.sort((a, b) => {
    if (a.pinned > b.pinned) return -1;
    if (b.pinned > a.pinned) return 1;

    return 0;
  });

  function handleChange(event) {
    setFilterSelected(event.target.value);
  }

  return (
    <Section name="portfolio">
      <div className="section-header">
        <h1>Portfolio</h1>
        <Select
          id="portfolio-filter"
          multiple
          value={filterSelected}
          onChange={handleChange}
          input={<Input />}
        >
          {portfolio.map((project, idx) => {
            return (
              <MenuItem key={idx} value={project.title}>
                {project.title}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className="section-body">
        <div className="portfolio">
          {portfolio.map((project, idx) => {
            return (
              <PortfolioCard
                key={idx}
                project={project}
                setModalVisible={setModalVisible}
                setFeatureApp={setFeatureApp}
              />
            );
          })}
        </div>
      </div>
      {/* <iframe
        width="1000px"
        height="1000px"
        src="https://ticketmain.herokuapp.com/"
      ></iframe> */}
    </Section>
  );
}

export default Portfolio;
