import React, { Component } from 'react';

class ConsonantCount extends Component {
    render() {
        return (
        <div className="ConsonantCount">
            <h3>Total Consonants: { this.props.consonants }</h3>
        </div>
        );
    }
}

export default ConsonantCount;