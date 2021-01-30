import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {

            width: 1000,
            height: 1000,

        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'red', height: '100vh', width: '100%' }}>

            </div>
        )
    }
}


export default withRouter(Logout);