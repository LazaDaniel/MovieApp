import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { Button } from '@material-ui/core';
import { addUser } from "../actions";
import { connect } from 'react-redux';
import { compose } from "redux";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
// import DatePicker from '@material-ui/lab/DatePicker';
// import NumberInput from 'material-ui-number-input';
import DateFnsUtils from '@date-io/date-fns';

import {
    DatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';



class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                age: '2017-05-15',
            },
            width: 1000,
            height: 1000,

        }
    }
    logout = () => {
        const { history } = this.props;
        if (history) history.push('/logout');
    }
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
        // console.log(this.state)
    }
    submit = () => {
        this.props.addUser(this.state.formData);
        const { history } = this.props;
        if (history) history.push('/');
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white', height: '100vh', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                <ValidatorForm
                    ref="form"
                    onSubmit={() => this.submit()}
                >
                    <h2>Add user</h2>
                    <TextValidator
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.formData.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <br />
                    <TextField
                        id="date"
                        label="Birth date"
                        type="date"
                        onChange={this.handleChange}
                        name="age"  
                        defaultValue={'2017-05-15'}
                        className={'textField'}
                        validators={'required'}
                        errorMessages={'this field is required'}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary"
                        style={{ margin: 20 }}>
                        Add User
                    </Button>
                </ValidatorForm>
                {/* </MuiPickersUtilsProvider> */}

                <Button variant="contained" color="primary" onClick={() => this.logout()}
                    style={{ margin: 20 }}>
                    Go to logout
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
        addUser: (user) => dispatch(addUser(user))
    };
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Form);