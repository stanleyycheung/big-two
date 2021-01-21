import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTable extends Component {
	constructor(props) {
		super(props);
		this.onChangePlayer1 = this.onChangePlayer1.bind(this);
		this.onChangePlayer2 = this.onChangePlayer2.bind(this);
		this.onChangePlayer3 = this.onChangePlayer3.bind(this);
		this.onChangePlayer4 = this.onChangePlayer4.bind(this);
		this.onChangeState = this.onChangeState.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.player1Ref = React.createRef();
		this.player2Ref = React.createRef();
		this.player3Ref = React.createRef();
		this.player4Ref = React.createRef();
		this.stateRef = React.createRef();
		this.state = {
			player1: '',
			player2: '',
			player3: '',
			player4: '',
			state: {},
			users: [],
			username: '',
		}
	}
	componentDidMount() {
		axios.get('http://localhost:5000/players/')
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username),
						username: response.data[0].username
					});
				}
			})
			.catch((error) => {
				console.log(error);
			})
	}
	onChangePlayer1(e) {
		this.setState({
			player1: e.target.value
		});
	}

	onChangePlayer2(e) {
		this.setState({
			player1: e.target.value
		});
	}

	onChangePlayer3(e) {
		this.setState({
			player1: e.target.value
		});
	}

	onChangePlayer4(e) {
		this.setState({
			player1: e.target.value
		});
	}

	onChangeState(e) {
		this.setState({
			state: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const table = {
			player1: this.state.player1,
			player2: this.state.player2,
			player3: this.state.player3,
			player4: this.state.player4,
			state: this.state.state,
		};
		console.log(table);
		axios.post('http://localhost:5000/tables/add', table).then(res => console.log(res.data));
		// window.location = '/';
	}

	render() {
		return (
			<div>
				<h3>Create New Table</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Player1: </label>
						<select ref={this.player1Ref}
							required
							className="form-control"
							value={this.state.player1}
							onChange={this.onChangePlayer1}>
							{
								this.state.users.map(function (user) {
									return <option
										key={user}
										value={user}>{user}
									</option>;
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label>Player2: </label>
						<select ref={this.player2Ref}
							required
							className="form-control"
							value={this.state.player2}
							onChange={this.onChangePlayer2}>
							{
								this.state.users.map(function (user) {
									return <option
										key={user}
										value={user}>{user}
									</option>;
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label>Player3: </label>
						<select ref={this.player3Ref}
							required
							className="form-control"
							value={this.state.player3}
							onChange={this.onChangePlayer3}>
							{
								this.state.users.map(function (user) {
									return <option
										key={user}
										value={user}>{user}
									</option>;
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label>Player4: </label>
						<select ref={this.player4Ref}
							required
							className="form-control"
							value={this.state.player4}
							onChange={this.onChangePlayer4}>
							{
								this.state.users.map(function (user) {
									return <option
										key={user}
										value={user}>{user}
									</option>;
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label>State: </label>
						<input type="text"
							required
							placeholder="state of game"
							className="form-control"
							value={this.state.state}
							onChange={this.onChangeState}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create Table" className="btn btn-primary" />
					</div>
				</form>
			</div>
		)
	}
}