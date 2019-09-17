import React, { Component } from 'react';

class form extends Component {

    render() {
        return (
            <div className="borderTop spaceELs">
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Paste Long URL:
                        <br />
                        <input className="inputBox" type="url" name="givenURL" onChange={this.props.updateState} value={this.props.givenURL} placeholder="URL.." />
                    </label>
                    <br />
                    <input className="btn" type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default form;