import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
	const [scrollProgress, setScrollProgress] = useState(0);

	window.onscroll = () => {
		setScrollProgress(checkScrollProgress());
	};

	function checkScrollProgress() {
		console.log("scrolled");
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let scrolled = Math.floor((winScroll / height) * 100);
		return scrolled;
	}

	return <UIContext.Provider value={{ scrollProgress }}>{children}</UIContext.Provider>;
};
