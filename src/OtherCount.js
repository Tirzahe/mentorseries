import React, { Component } from 'react';

class OtherCount extends Component {
    render() {
        return (
        <div>
            <h3>Total "other" characters: { this.props.others }</h3>
        </div>
        );
    }
}

export default OtherCount;