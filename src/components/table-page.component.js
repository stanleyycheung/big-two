import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table = props => (
    <tr>
        <td>{props.table.player1}</td>
        <td>{props.table.player2}</td>
        <td>{props.table.player3}</td>
        <td>{props.table.player4}</td>
        <td>{props.table.state}</td>
        <td>
            <Link to={"/edit/" + props.table._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTable(props.table._id) }}>delete</a>
        </td>
    </tr>
)
export default class TablePage extends Component {
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
            return <Table table={currenttable} deleteTable={this.deleteTable} key={currenttable._id} />;
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