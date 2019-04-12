import React, { Component } from 'react';

class VowelCount extends Component {
    render() {
        return (
        <div className="VowelCount">
            <h3>Total Vowels: {this.props.count}</h3>
        </div>
        );
    }
}

export default VowelCount;
