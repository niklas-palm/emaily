import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Example extends Component {
	render() {
		return (
			<div className="center container">
				<h2>Device Test!</h2>
				<MediaQuery query="(max-width: 799px)" className="row">
					<div className="col s6" style={{ background: 'blue' }}>
						hey 1
					</div>
					<div className="col s6" style={{ background: 'yellow' }}>
						hey 2
					</div>
					{/* <div>You are a desktop or laptop</div>
					<MediaQuery query="(min-device-width: 1824px)">
						<div>You also have a huge screen</div>
					</MediaQuery>
					<MediaQuery query="(max-width: 1224px)">
						<div>You are sized like a tablet or mobile phone though</div>
					</MediaQuery> */}
				</MediaQuery>
				<MediaQuery query="(min-width: 800px)" className="row">
					<div className="col m6" style={{ background: 'red' }}>
						hey 3
					</div>
					{/* <div className="col m6" style={{ background: 'green' }}>
						hey 4
					</div> */}
					{/* <div>You are a tablet or mobile phone</div>
				</MediaQuery>
				<MediaQuery query="(orientation: portrait)">
					<div>You are portrait</div>
				</MediaQuery>
				<MediaQuery query="(orientation: landscape)">
					<div>You are landscape</div>
				</MediaQuery>
				<MediaQuery query="(min-resolution: 2dppx)">
					<div>You are retina</div> */}
				</MediaQuery>
			</div>

			// <div>
			// 	<div>Device Test!</div>
			// 	<MediaQuery query="(min-device-width: 1224px)">
			// 		<div>You are a desktop or laptop</div>
			// 		<MediaQuery query="(min-device-width: 1824px)">
			// 			<div>You also have a huge screen</div>
			// 		</MediaQuery>
			// 		<MediaQuery query="(max-width: 1224px)">
			// 			<div>You are sized like a tablet or mobile phone though</div>
			// 		</MediaQuery>
			// 	</MediaQuery>
			// 	<MediaQuery query="(max-device-width: 1224px)">
			// 		<div>You are a tablet or mobile phone</div>
			// 	</MediaQuery>
			// 	<MediaQuery query="(orientation: portrait)">
			// 		<div>You are portrait</div>
			// 	</MediaQuery>
			// 	<MediaQuery query="(orientation: landscape)">
			// 		<div>You are landscape</div>
			// 	</MediaQuery>
			// 	<MediaQuery query="(min-resolution: 2dppx)">
			// 		<div>You are retina</div>
			// 	</MediaQuery>
			// </div>
		);
	}
}

export default Example;
