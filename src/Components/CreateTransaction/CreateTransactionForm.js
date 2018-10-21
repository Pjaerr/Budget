import React from 'react';

import styles from './CreateTransactionForm.scss';

class CreateTransactionForm extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = { amount: '', date: '01-01-01', description: '' };
  }

  handleSubmit = () =>
  {
    const data = { ...this.state };

    data.amount = parseFloat(data.amount);

    this.props.createTransaction(data);

    this.setState({ amount: '', date: '01-01-01', description: '' });
  }

  handleChange = (event) =>
  {
    let formElementName = event.target.name;
    let value = event.target.value;

    this.setState({ [formElementName]: event.target.value });
  }

  render()
  {
    return (
      <form>
        <label>
          Amount:

          <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
        </label>

        <label>
          Description:

          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>

        <input type="button" value="Create Transaction" onClick={this.handleSubmit} />
      </form >
    );
  }
}

export default CreateTransactionForm;
