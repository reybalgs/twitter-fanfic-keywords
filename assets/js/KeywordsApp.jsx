import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import KeywordsAppBar from './KeywordsAppBar';
import KeywordInput from './KeywordInput';

export default class KeywordsApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <KeywordsAppBar></KeywordsAppBar>
        <div className="hero-area">
          <div className="container">
            <h2 className="hero-title">Start Generating!</h2>
            <KeywordInput></KeywordInput>
          </div>
        </div>
        <div className="container">
          <h2>What is this?</h2>
          <p>
            This app is a small demonstration of a Twitter bot that generates
            keywords (from multiple sources) that people can use for fan
            fiction (or generally just any kind of prose really) material.
          </p>
        </div>
      </div>
    )
  };
}
