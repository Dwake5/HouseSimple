import React, { Component } from 'react';

class form extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Paste Long URL:
                        <br />
                        <input type="url" name="givenURL" onChange={this.props.updateState} value={this.props.givenURL} placeholder="URL.." />
                    </label>
                    <br />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default form;