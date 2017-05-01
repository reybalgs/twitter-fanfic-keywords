import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.person = { name: 'Azu-nyan' };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <h1>
        Goodbye, {this.person.name}!
        </h1>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
