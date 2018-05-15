import React, { Component } from 'react';
import McmTopicForm from '../McmTopicForm';

class EditMcmTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_token: this.props.location.pathname.slice(16)

    };
  }

  render() {
    return (
      <div className="EditMcmTopic col-md-8 col-md-offset-2">
        <h2>Edit McmTopic</h2>
        <McmTopicForm 
          history={this.props.history} 
          match={this.props.match}
          auth_token={this.state.auth_token} />
      </div>
    );
  }
}

export default EditMcmTopic;