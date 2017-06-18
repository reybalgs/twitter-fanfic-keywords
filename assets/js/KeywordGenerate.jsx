import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const buttonStyle = {
  'width': '96px',
  'display': 'block',
  'margin-left': 'auto',
  'margin-right': 'auto'
};

const inputStyle = {
  'color': '#fff'
};

export default class KeywordGenerate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-generator">
        <TextField fullWidth={true} inputStyle={inputStyle}>
        </TextField>
        <RaisedButton label="Generate" primary={true} style={buttonStyle}>
        </RaisedButton>
      </div>
    )
  }
}
