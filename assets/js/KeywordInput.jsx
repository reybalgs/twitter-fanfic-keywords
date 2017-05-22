import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const hintStyle = {
  color: '#ddd'
};

export default class KeywordInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-input">
        <TextField fullWidth="true" hintStyle={hintStyle}
            hintText="Enter keyword here...">
        </TextField>
      </div>
    );
  }
}
