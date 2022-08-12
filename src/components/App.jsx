import React, { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <section>
          <h1>Phonebook</h1>
          <AddContactForm></AddContactForm>
        </section>
      </>
    );
  }
}
