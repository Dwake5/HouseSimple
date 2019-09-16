import React, { Component } from 'react';

class ShorterURL extends Component {


    render() {
        return (
            <div>
                <p>Your new shorter URL is:</p>
                <p> {this.props.ShorterURL} </p>
            </div>
        );
    }
}

export default ShorterURL;