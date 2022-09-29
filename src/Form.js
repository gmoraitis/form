


import React from 'react';
import './App.css';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
// or /^[a-z ,.'-]+$/i
const validNameRegex = RegExp(/^[a-z ,.'-]+$/i);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            players: null,
            dateTime: null,
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                players: '',
                dateTime: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;


        switch (name) {
            case 'firstName':
                errors.firstName = value.length > 3 && validNameRegex.test(value)
                    ? ''
                    : 'First name is not valid! Must be at least 3 letters long!';
                break;
            case 'lastName':
                errors.lastName = value.length > 3 && validNameRegex.test(value)
                    ? ''
                    : 'Last name is not valid! Must be at least 3 letters long!';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'players':
                errors.players =
                    value < 1
                        ? 'Type least 1 person!'
                        : '';
                break;
            case 'date':
                errors.dateTime =
                    value.min < '08:00' && value.max > '18:00'
                        ? 'Time must be at least 08:00!'
                        : '';
                break;
            case 'time':
                errors.dateTime =
                    value.min < '08:00' && value.max > '18:00'
                        ? 'Time must be at least 08:00!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
            console.log(this)
            this.handlePrint();
        } else {
            console.error('Invalid Form')
        }

    }

    handlePrint = () => {
        console.log(this.state);

    }


    render() {
        const { errors } = this.state;
        return (
            <div>

                <div className='form'>
                    <h2>LazerTag World 🔫</h2>
                    <form onSubmit={this.handleSubmit}>

                        {/* First Name */}
                        <div className='firstLastName'>
                            <label>First Name</label>
                            <input type='text' name='firstName' onChange={this.handleChange} required />
                            {errors.firstName.length > 0 &&
                                <span className='error'>{errors.firstName}</span>}
                        </div>

                        {/* Last Name */}
                        <div className='firstLastName'>
                            <label>Last Name</label>
                            <input type='text' name='lastName' onChange={this.handleChange} required />
                            {errors.lastName.length > 0 &&
                                <span className='error'>{errors.lastName}</span>}
                        </div>
                        {/* Email */}
                        <div className='email'>
                            <label>Email</label>
                            <input type='email' name='email' onChange={this.handleChange} required />
                            {errors.email.length > 0 &&
                                <span className='error'>{errors.email}</span>}
                        </div>

                        {/* Players */}
                        <div className='players'>
                            <label>Players</label>
                            <input type="number" min="0" max="25" name="players" onChange={this.handleChange} required />
                            {errors.players.length > 0 &&
                                <span className='error'>{errors.players}</span>}
                        </div>

                        {/* Date*/}
                        <div className='players'>
                            <label>Choose a date :</label>
                            <input type="date" name="date" onChange={this.handleChange}
                                min="2022-1-01" max="2023-12-31"

                                required />

                            {errors.dateTime.valueOf < 'T07:00' && errors.dateTime.valueOf > 'T7:00' &&
                                <span className='error'>{errors.dateTime}</span>}
                        </div>

                        {/* Time */}
                        <div className='players'>
                            <label>Choose an hourly session : </label>
                            <input type="time" name="time" onChange={this.handleChange}
                                min="08:00" max="18:00"
                                step="3600"

                                required />
                            {errors.dateTime < '08:00' && errors.dateTime > '18:00' &&
                                <span className='error'>{errors.dateTime}</span>}
                        </div>


                        <div className='submit'>
                            <button>Submit</button>
                        </div >



                    </form >
                </div >
            </div >

        );
    }
}


