import React, { Component } from 'react';
import './style.css';
var SC = require('soundcloud');

SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://example.com/callback'
});

class Cards extends Component {

    render(){
        return(

            <div className="cards">
            </div>
        );
    }
}

export default Cards;