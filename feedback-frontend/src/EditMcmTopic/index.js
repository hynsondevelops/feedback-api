import React, { Component } from 'react';
import McmTopicForm from '../McmTopicForm';

class EditMcmTopic extends Component {
  render() {
    return (
      <div className="EditMcmTopic col-md-8 col-md-offset-2">
        <h2>Edit McmTopic</h2>
        <McmTopicForm 
          history={this.props.history} 
          match={this.props.match} />
      </div>
    );
  }
}

export default EditMcmTopic;