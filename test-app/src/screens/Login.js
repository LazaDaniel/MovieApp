import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: 1000,
            height: 1000,

        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'green', height: '100vh', width: '100%' }}>

            </div>
        )
    }
}


export default withRouter(Login);