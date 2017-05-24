import Rect, { Component } from 'react';
import { connect } from 'react-redux';
import Line from './components/Line';

class Console extends Component {
  constructor(props) {
    super(props);
    this._hide = this._hide.bind(this);
    this._content = this._content.bind(this);

    this.state = {hide: false};
  }

  _hide() {
    this.setState({ hide: !this.state.hide });
  }

  _content() {
    if(this.state.hide){
      return null;
    }

    const lines = this.props.content.map((e, i) => <Line text={e}  key={i} />);
    return (
      <div>
        {lines}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h5 className="label" onClick={this._hide}>
          Console
        </h5>
        {this._content()}
      </div>
    );
  }
}

Console.defaultProps = {
  content: []
};

const mapStateToProps = state => ({
  content: state.console.content  
});

export default connect(mapStateToProps)(Console);