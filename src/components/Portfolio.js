import { useState, useEffect, useRef } from "react";

import Section from "./Section";
import PortfolioCard from "./PortfolioCard";

import "./css/Portfolio.scss";

function Portfolio(props) {
	const { portfolio, setModalVisible, setFeatureApp } = props;

	const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);

	filteredPortfolio.sort((a, b) => {
		if (a.pinned > b.pinned) return -1;
		if (b.pinned > a.pinned) return 1;

		return 0;
	});

	return (
		<Section name="portfolio">
			<div className="section-header">
				<h1>Portfolio</h1>
			</div>
			<div className="section-body">
				<div className="portfolio">
					{filteredPortfolio.map((project, idx) => {
						return <PortfolioCard key={idx} project={project} setModalVisible={setModalVisible} setFeatureApp={setFeatureApp} />;
					})}
				</div>
			</div>
		</Section>
	);
}

export default Portfolio;
