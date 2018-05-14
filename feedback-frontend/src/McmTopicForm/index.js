import React, { Component } from 'react';
import axiosClient from '../axiosClient';

class McmTopicForm extends Component {
  render() {
    return (
      <div className="ProjectForm">
      	<p> HEY </p>
        <form>
          <button
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary">
            Save
          </button>
          <button
            onClick={e => this.handleCancel()}
            className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    );
  }

  handleCancel() {}
  handleFormSubmit() {}
}

export default McmTopicForm;