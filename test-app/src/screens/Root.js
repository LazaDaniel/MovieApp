import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { compose } from "redux";
import { connect } from 'react-redux';


class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: 1000,
            height: 1000,

        }
    }
    goToForm = () => {
        const { history } = this.props;
        if (history) history.push('/form');
    }


    render() {
        console.log(this.props.store)
        return (
            <div style={{ backgroundColor: 'yellow', height: '100vh', width: '100%', textAlign: 'center' }}>
                {this.props.store.data ?  
                <TableContainer component={Paper}>
                    <Table className='table' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell align="right">Birth Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.store.data.map((entry, index) => (
                                <TableRow key={index}>
                                    {console.log(entry)}
                                    <TableCell component="th" scope="row">
                                        {entry.email}
                                    </TableCell>
                                    <TableCell align="right">{entry.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : 
                'No data available'}
                <Button variant="contained" color="primary" onClick={() => this.goToForm()}
                    style={{ margin: 20 }}>
                    Go to form
                    </Button>
            </div>
        )
    }
}

const mapStateToProps = (appState) => {
    const store = appState;
    return { store };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Root);