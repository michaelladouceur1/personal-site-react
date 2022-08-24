import React from "react";
import ReactDOM from "react-dom";

// Local Imports - JS
import { UIContextProvider } from "./context/UIContext";
import App from "./App";

// Local Imports - CSS
import "./style.scss";

ReactDOM.render(
	<UIContextProvider>
		<App />
	</UIContextProvider>,
	document.getElementById("app")
);
