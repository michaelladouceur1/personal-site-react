import { useState, useEffect, useRef } from "react";

import "./Canvas.scss";

const Circle = ({ x, y, radius }) => {};

const Canvas = () => {
	const canvasRef = useRef();

	const [mousePosition, setMousePosition] = useState({ x: undefined, y: undefined });

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		context.fillStyle = "#333";
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);
	}, []);

	const updateMousePosition = (x, y) => {
		setMousePosition({ x: x, y: y });
	};

	return <canvas ref={canvasRef} onMouseMove={({ clientX, clientY }) => updateMousePosition(clientX, clientY)} />;
};

export default Canvas;
