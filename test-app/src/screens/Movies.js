import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            width: 1000,
            height: 1000,

        }
    }
    componentDidMount() {
        fetch('https://api.tvmaze.com/shows')
            .then(response => response.json())
            .then(data => this.setState({ data }));

    };

    render() {
        console.log(this.state.data)
        return (
            <div style={{ backgroundColor: 'purple', height: '100vh', width: '100%' }}>
                {this.state.data ?
                    <TableContainer component={Paper}>
                        <Table className='table' aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Genre</TableCell>
                                    <TableCell align="right">Language</TableCell>
                                    <TableCell align="right">Average Rating</TableCell>
                                    <TableCell align="right">Premiered</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map((entry, index) => (
                                    <TableRow key={index}>
                                        {console.log(entry)}
                                        <TableCell >
                                            {entry.id}
                                        </TableCell>
                                        <TableCell align="right">{entry.name}</TableCell>
                                        <TableCell align="right">{entry.genres ? entry.genres[0] : 'Not defined'}</TableCell>
                                        <TableCell align="right">{entry.language}</TableCell>
                                        <TableCell align="right">{entry.rating.average}</TableCell>
                                        <TableCell align="right">{entry.premiered}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> :
                    'No data available'}
            </div>
        )
    }
}


export default withRouter(Movies);