import React from 'react';
import './App.css';


export default class Footer extends React.Component {

  render() {
    return (
    

        <div className='footer'>
          <footer>
            <br></br>
            <p>© 2022 LazerTag World</p>
            <div className='footer'>
            <p>😊 Open all week from 08:00 AM - 7:00 PM</p>
              <p>📞 123-456-7890</p>
              <p> 📧 <a href="mailto:someEmail@service.com">Contact </a></p>
            </div>
          </footer>
        </div>
    );
  }
}


