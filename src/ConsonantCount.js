import React, { Component } from 'react';
// import StringCount from './StringCount.js';
//This is where the consonant count function and result lives

class ConsonantCount extends Component {
    render() {
        const { consonants, others, total } = this.props;

        return (
        <div className="ConsonantCount">
            <h3>
                Total Consonants: { consonants }
            </h3>
            <h3>
                Total "other" characters: { others }
            </h3>
            <h3>
                GRAND TOTAL - ALL characters: { total }
            </h3>
        </div>
        );
    }
}

export default ConsonantCount;