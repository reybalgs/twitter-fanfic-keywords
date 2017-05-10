import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar';

export default class KeywordsAppBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar title="Fanfic Keywords"
         iconClassNameRight="muidocs-icon-navigation-expand-more">
      </AppBar>
    )
  };
}
