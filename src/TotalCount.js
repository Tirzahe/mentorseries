import React, { Component } from 'react';

class TotalCount extends Component {
    render() {
        return (
            <h3>
            GRAND TOTAL - ALL characters: { this.props.total }
        </h3>
        );
    }
}

export default TotalCount;