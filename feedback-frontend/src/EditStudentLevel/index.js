import React, { Component } from 'react';
import StudentLevelForm from '../StudentLevelForm';

class EditStudentLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_token: this.props.location.pathname.slice(16)

    };
  }

  render() {
    return (
      <div className="EditStudentLevel col-md-8 col-md-offset-2">
        <h2>Edit StudentLevel</h2>
        <StudentLevelForm 
          history={this.props.history} 
          match={this.props.match}
          auth_token={this.state.auth_token} />
      </div>
    );
  }
}

export default EditStudentLevel;