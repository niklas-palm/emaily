import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import FlexView from 'react-flexview';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			// return (
			// 	<div
			// 		className="sweet-loading"
			// 		style={{
			// 			display: 'inline-block',
			// 			verticalAlign: 'middle'
			// 		}}
			// 	>
			// 		<CircleLoader color={'#123abc'} loading size={50} />
			// 	</div>
			// );
			case false:
				return <a href="/auth/google">Login</a>;
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="3" style={{ margin: '0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}
	render() {
		return (
			// <nav>
			// 	<div
			// 		className="nav-wrapper"
			// 		style={{ display: 'flex', justifyContent: 'center' }}
			// 	>
			// 		<div style={{ flex: 1 }}>
			// 			<Link
			// 				to={this.props.auth ? '/surveys' : '/'}
			// 				className=" brand-logo"
			// 			>
			// 				Emaily
			// 			</Link>
			// 		</div>
			// 		<div
			// 			className="center hide-on-med-and-down"
			// 			style={{
			// 				flex: 9,
			// 				display: 'flex',
			// 				justifyContent: 'center',
			// 				alignItems: 'center'
			// 			}}
			// 		>
			// 			<ul
			// 				id="nav-mobile"
			// 				className="hide-on-med-and-down"
			// 				style={{
			// 					display: 'flex',
			// 					flexGrow: 0.2,
			// 					justifyContent: 'space-around'
			// 				}}
			// 			>
			// 				<li style={{ flex: 1 }}>
			// 					<a style={{ size: 20 }}>Djupvik</a>
			// 				</li>
			// 				<li style={{ flex: 1, size: 20 }}>
			// 					<a>Hotell</a>
			// 				</li>
			// 				<li style={{ flex: 1 }}>
			// 					<a>Niklas </a>
			// 				</li>
			// 			</ul>
			// 		</div>
			// 		<div style={{ flex: -1 }}>
			// 			<ul>
			// 				<li>{this.renderContent()}</li>
			// 			</ul>
			// 		</div>
			// 	</div>
			// </nav>

			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/surveys' : '/'} className=" brand-logo">
						Emaily
					</Link>
					<ul className="right">
						<li>{this.renderContent()}</li>
					</ul>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a>Djupvik</a>
						</li>
						<li>
							<a>Hotell</a>
						</li>
						<li>
							<a>Niklas</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
