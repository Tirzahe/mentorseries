import React, { Component } from 'react';
// import StringCount from './StringCount.js';
//This is where the consonant count function and result lives

class ConsonantCount extends Component {
    render() {
        const { consonants, others, total } = this.props;

        return (
        <div className="ConsonantCount">
            <h2>
                Total Consonants: { consonants }
            </h2>
            <h2>
                Total "other" characters: { others }
            </h2>
            <h2>
                GRAND TOTAL - ALL characters: { total }
            </h2>
        </div>
        );
    }
}

export default ConsonantCount;