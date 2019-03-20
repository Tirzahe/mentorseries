import React, { Component } from 'react';
// import StringCount from './StringCount.js';
//This is where the consonant count function and result lives

class ConsonantCount extends Component {
    render() {
        return (
        <div className="ConsonantCount">
            <h2>
                Total Consonants:
            </h2>
            <h3>
                Total "other" characters:
            </h3>
        </div>
        );
    }
}

export default ConsonantCount;