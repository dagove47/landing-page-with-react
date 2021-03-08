import React from "react";
import PropTypes from "prop-types";

export function CardBody(props) {
	return (
		<div className="col-sm-3">
			<div className="card cardWidth">
				<img src={props.imgURL} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.titleCard}</h5>
					<p className="card-text">{props.textCard}</p>
					<a href={props.buttonCard} className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}

CardBody.propTypes = {
	imgURL: PropTypes.string,
	titleCard: PropTypes.string,
	textCard: PropTypes.string,
	buttonCard: PropTypes.string
};
