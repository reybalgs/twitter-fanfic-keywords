import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import KeywordsAppBar from './KeywordsAppBar';

export default class KeywordsApp extends Component {
  constructor(props) {
    super(props);
    this.person = { name: 'Azu-nyan' };
  }

  render() {
    return (
      <div>
        <KeywordsAppBar></KeywordsAppBar>
        <div className="container">
          <h1>
          Goodbye, {this.person.name}!
          </h1>
        </div>
      </div>
    )
  };
}
