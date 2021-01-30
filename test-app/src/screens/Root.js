import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { Button } from '@material-ui/core';
import {compose} from "redux";
import { connect } from 'react-redux';


class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: 1000,
            height: 1000,

        }
    }
    logout = () => {
        const { history } = this.props;
        if (history) history.push('/logout');
    }

    render() {
        return (
            <div style={{ backgroundColor: 'yellow', height: '100vh', width: '100%' }}>
                <Button variant="contained" color="primary" onClick={() => this.logout()}>Go to logout</Button>
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