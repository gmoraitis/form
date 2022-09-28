


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

export default class App extends React.Component {
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
      case 'dateTime':
        errors.dateTime =
          value.min < 'T07:00' && value.max > 'T7:00'
            ? 'Time must be at least 07:00!'
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
    } else {
      console.error('Invalid Form')
    }
    this.setState({ event: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='App'>
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

            {/* Date and Time */}
            <div className='players'>
              <label>Choose a date and  time hourly for your appointment:</label>
              <input type="dateTime-local" name="dateTime" onChange={this.handleChange}
                min="2022-01-01T07:00" max="2023-12-01T7:00"
                step="3600"

                required />
              {errors.dateTime.length < 'T07:00' && errors.dateTime.length > 'T7:00' &&
                <span className='error'>{errors.dateTime}</span>}
            </div>


            <div className='submit'>
              <button >Submit</button>

            </div>
          </form>

        </div>
        <div className='footer'>
          <footer>
            <p>© 2022 LazerTag World</p>
            <div className='footer'>
            <p>😊 Open all week from 07:00 am - 7:00 pm</p>
              <p>📞 123-456-7890</p>
              <p> 📧 <a href="mailto:someEmail@service.com">Contact </a></p>
            </div>
          </footer>
        </div>
      </div >
    );
  }
}


// export default App;