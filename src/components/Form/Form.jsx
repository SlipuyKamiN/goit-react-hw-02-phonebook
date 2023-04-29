import PropTypes from 'prop-types';
import { NameInput, NumberInput } from 'components/Inputs/index';
import { Form, SubmitButton } from './Form.styled';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetState();
  };

  resetState() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit} autoComplete="off">
        <NameInput value={name} handleInputChange={this.handleInputChange} />
        <NumberInput
          value={number}
          handleInputChange={this.handleInputChange}
        />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
