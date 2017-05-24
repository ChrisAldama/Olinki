import React, {Component} from 'react';

class Line extends Component {
    render() {
      return(<p>{this.props.text}</p>);
    }
}

Line.defaultProps = {
    text: ''
};

export default Line;