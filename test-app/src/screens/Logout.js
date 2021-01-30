import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { setUserLoggedIn, setUserLoggedOut } from '../actions'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { compose } from "redux";


class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: 1000,
            height: 1000,

        }
    }
    logout = () => {
        this.props.logout_user();
        const { history } = this.props;
        if (history) history.push('/login');
    }

    render() {
        return (
            <div style={{ backgroundColor: 'red', height: '100vh', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={() => this.logout()}
                    style={{ margin: 20 }}>
                    Logout
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
        login_user: () => dispatch(setUserLoggedIn()),
        logout_user: () => dispatch(setUserLoggedOut()),
    };
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Logout);