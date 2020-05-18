import React from 'react';
import { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
      <div>Register Form</div>
      <form onSubmit = {this.handleSubmit}>
      <label>First Name</label>
      <input type="" value=""/>
      <label>Last Name</label>
      <input/>
      <label>Company Name</label>
      <select>
        <option value="">Simba Logistics</option>
        <option value="">Goldman Sachs</option>
        <option value="">Morgan Stanley</option>
      </select>
      <label>Test Result</label>
      <select>
        <option value="negative">Positive</option>
        <option value="positive">Negative</option>
      </select>
      <button>Save</button>
      </form>
      </div>
    );
  }
}
export default Form;