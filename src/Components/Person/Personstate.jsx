import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./person.css";


export default class Personstate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			Person: {
				fullName: "Abidi wael",
				bio: "student at go my code",
				imgSrc: './me.jpg',
				profession: " Fullstack Devlopper",
			},
		};
		this.shownow = () => {
			this.setState({ show: true });
		};
	}
	render() {
		return (
			<main className="main">
				<div className='state'>
					<Button variant='success' onClick={this.shownow}>
						Show Profile 
					</Button>

					{this.state.show ? (
						<>
							{" "}
							<h2>{this.state.Person.fullName}</h2>
							<h2>{this.state.Person.bio}</h2>
							<h2>{this.state.Person.imgSrc}</h2> 
							<h2>{this.state.Person.profession}</h2>{" "}
						</>
					) : (
						<h2>Clik to activate the Show function </h2>
					)}

					
				</div>
			</main>
		);
	}
}
