import { useState, useEffect, useRef } from "react";

import { useFadeIn } from "../hooks";
import "./css/Section.scss";

function Section(props) {
	const sectionRef = useRef();
	const [sectionStyle, setSectionStyle] = useState({ opacity: 0 });

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries[0].isIntersecting ? setSectionStyle({ opacity: 1, transition: "opacity 1.5s" }) : setSectionStyle({ opacity: 0, transition: "1s" });
		});

		observer.observe(sectionRef.current);
	}, []);

	return (
		<section className="section" style={sectionStyle} id={props.name}>
			<div ref={sectionRef} className="content">
				{props.children}
			</div>
		</section>
	);
}

export default Section;
