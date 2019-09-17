import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ShorterURL extends Component {
    state = {
        copied: false
    }

    onCopy = () => {
        this.setState({copied: true});
    };

    render() {
        return (
            <div className="borderTop">
                <p>Your new, shorter URL is:</p>
                <p>{this.props.result}</p>
                <CopyToClipboard onCopy={this.onCopy} text={this.props.result}>
                    <button className="btn">Copy to clipboard</button>
                </CopyToClipboard>
                {this.state.copied 
                 ? <p>{this.props.result} has been copied to clipboard!</p>
                 : null
                }
            </div>
        );
    }
}

export default ShorterURL;