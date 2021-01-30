import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";

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

            </div>
        )
    }
}


export default withRouter(Movies);