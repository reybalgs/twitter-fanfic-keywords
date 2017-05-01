var React = require('react');
var ReactDOM = require('react-dom');

var person = {
  name: 'Azu-nyan'
};

var Hello = React.createClass ({
  render: function() {
    return (
      <h1>
      Goodbye, {person.name}!
      </h1>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('container'));
