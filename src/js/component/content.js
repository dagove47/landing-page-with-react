import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";

export function Content() {
	return (
		<div className="container">
			<Jumbotron />
			<Cards />
		</div>
	);
}
