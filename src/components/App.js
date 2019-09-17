import React, { Component } from 'react';
import HomePage from './HomePage';
import Form from './Form';
import ShorterURL from './ShorterURL';
import $ from 'jquery';

class App extends Component {
  state = {
    givenURL: "",
    result: ""
  }

  // This is a handy way of updating state, given that state is named the same as
  // the name of an input field it will update them all at once. This saves you having
  // to write this function For each field, even though in this case these is only one.
  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.ShortLinkBitly(this.state.givenURL)
    this.setState({ givenURL: ""})
  }
  
  ShortLinkBitly(longUrl) {
	  if ( !longUrl.match(/(ftp|http|https):\/\//i) ) {
      return "Error: Link must start with a protocol (e.g.: http or https).";
    }
    let that = this
    let apiKey = 'R_dde325c90a014f31a0c98e0cc9cec107'
    let username = 'dwakeling1'

    $.ajax({
      url: 'https://api-ssl.bitly.com/v3/shorten?login=' + username + '&apiKey=' + apiKey + '&format=json&longUrl=' + encodeURIComponent(longUrl),
      dataType: 'jsonp',
  
      success: function( response ) {
        if ( response.status_code === 500) {
          return "Error: Invalid link.";
        } else if ( response.status_code !== 200) {           
          return "Error: Service unavailable.";
        } else {
          that.setState({result: response.data.url}) 
        }  
      },
      contentType: 'application/json'
    })
  }

  render() {
    return (
      <div>
        <HomePage />
        <div className="main ">
          <Form ShortLinkBitly={this.ShortLinkBitly} updateState={this.updateState} handleSubmit={this.handleSubmit}/>
          {this.state.result ? <ShorterURL result={this.state.result}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
