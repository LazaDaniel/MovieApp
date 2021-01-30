import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { setUserLoggedIn, setUserLoggedOut } from '../actions'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { compose } from "redux";




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: 1000,
            height: 1000,

        }
    }

    loginAction = () => {
        // console.log(this.props)
        this.props.login_user();
        setTimeout(()=> {
            const { history } = this.props;
            if (history) history.push('/');
        }, 500);
       
    }

    render() {
        return (
            <div style={{ backgroundColor: 'green', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                <Button variant="contained" color="primary" onClick={() => this.loginAction()}>Login</Button>
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
)(Login);