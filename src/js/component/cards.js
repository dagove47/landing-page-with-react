import React from "react";
import { CardBody } from "./cardBody.js";

export function Cards() {
	return (
		<div className="row">
			<CardBody
				imgURL="https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1916&q=80"
				titleCard="Card title"
				textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis nisi non ex lacinia porttitor."
				buttonCard="#"
			/>
			<CardBody
				imgURL="https://images.unsplash.com/photo-1551353471-1975b91e445b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				titleCard="Card title"
				textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis nisi non ex lacinia porttitor."
				buttonCard="#"
			/>
			<CardBody
				imgURL="https://images.unsplash.com/photo-1555354874-4d88b19fb972?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				titleCard="Card title"
				textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis nisi non ex lacinia porttitor."
				buttonCard="#"
			/>
			<CardBody
				imgURL="https://images.unsplash.com/photo-1473615695634-d284ec918736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
				titleCard="Card title"
				textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis nisi non ex lacinia porttitor."
				buttonCard="#"
			/>
		</div>
	);
}
