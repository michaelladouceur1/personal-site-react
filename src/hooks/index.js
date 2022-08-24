import { useState, useEffect } from "react";

export const useFadeIn = (delay, duration) => {
	const [style, setStyle] = useState({ opacity: 0 });

	useEffect(() => {
		setTimeout(() => {
			setStyle({ opacity: 1, transition: `${duration}ms` });
		}, delay);
	}, []);

	return [style, setStyle];
};

export const useScrollProgress = () => {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = Math.floor((winScroll / height) * 100);
	return scrolled;
};
