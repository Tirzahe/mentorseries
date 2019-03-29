import React, { Component } from 'react';
// import StringCount from './StringCount.js';
//This is where the vowel count function and result lives

class VowelCount extends Component {
    render() {
        return (
        <div className="VowelCount">
            <h2>Total Vowels: {this.props.count}</h2>
            {/* get string and do vowel count return vowel count here. */}
        </div>
        );
    }
}

export default VowelCount;
