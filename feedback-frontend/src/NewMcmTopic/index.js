import React, { Component } from 'react';
import McmTopicForm from '../McmTopicForm';

class NewMcmTopic extends Component {
  render() {
    return (
      <div className="NewMcmTopic col-md-8 col-md-offset-2">
        <h2>New McmTopic</h2>
        <McmTopicForm
          history={this.props.history}
          match={this.props.match} />
      </div>
    );
  }
}

export default NewMcmTopic;