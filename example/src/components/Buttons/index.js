import React, { Component } from 'react';
import { Button, Card } from 'flawwwless-library'


class Buttons extends Component {
	state = {
		isLoading: false,
	}

	toggleLoading = (e) => {
		this.setState(prevState => ({
			isLoading: !prevState.isLoading,
		}))
	}

	fakeLoading = () => {
		this.toggleLoading();
		setTimeout(() => {
			this.toggleLoading();
		}, 1000);
	}


	render(){
		return (
			<div className="container">
				<div className="componentBlock">
					<h3 className="componentTitle">Button</h3>
					<p className="componentDescr">To trigger an operation.</p>
					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<Button onClick={ () => alert("Button clicked!") }>Default</Button>
							<Button
								onClick={ this.fakeLoading }
								loading={ this.state.isLoading }
								type="primary">Primary</Button>
							<Button
								type="success">Success</Button>
							<Button type="danger">Danger</Button>
						  <Button type="primary" loading>Loading</Button>
						</div>
					</Card>

					<p style={{ marginTop: "3rem"}} className="componentDescr">Rounded buttons.</p>
					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<Button
								onClick={ () => alert("Button clicked!") } round>Default</Button>
							<Button type="primary" round>Primary</Button>
							<Button type="success" round>Success</Button>
							<Button type="danger" round>Danger</Button>
						</div>
					</Card>

					<p style={{ marginTop: "3rem"}} className="componentDescr">Outlined buttons.</p>
					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<Button outlined >Default</Button>
							<Button loading outlined type="primary">Primary</Button>
							<Button outlined type="success" round>Success</Button>
							<Button outlined type="danger" round>Danger</Button>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Buttons;