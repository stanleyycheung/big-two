import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTable(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)
export default class GamePage extends Component {
    constructor(props) {
        super(props);
        this.deleteTable = this.deleteTable.bind(this);
        this.state = { tables: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tables/')
            .then(response => {
                this.setState({ tables: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    tableList() {
        return this.state.tables.map(currenttable => {
            return <Exercise exercise={currenttable} deleteTable={this.deleteTable} key={currenttable._id} />;
        })
    }

    deleteTable(id) {
        axios.delete('http://localhost:5000/tables/' + id)
            .then(res => console.log(res.data));
        this.setState({
            tables: this.state.tables.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <div>
                <h3>Tables</h3>
                {this.tableList()}
            </div>
        )
    }
}