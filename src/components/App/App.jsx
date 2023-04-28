import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AppWrapper } from './App.styled';
import { AppForm } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = event.currentTarget;

    this.setState(prevState => {
      return {
        contacts: [
          { id: nanoid(), name: name.value, number: number.value },
          ...prevState.contacts,
        ],
      };
    });
  };

  render() {
    return (
      <AppWrapper>
        <AppForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          nameValue={this.state.name}
          numberValue={this.state.number}
        />
        <Contacts contacts={this.state.contacts} />
      </AppWrapper>
    );
  }
}
