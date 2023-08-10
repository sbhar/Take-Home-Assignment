import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Payment Button', () => {
  render(<App />);
  const paymentButton = screen.getByText('Payment Button');
  expect(paymentButton).toBeInTheDocument();
});

test('opens dialog on Payment Button click', () => {
  render(<App />);
  const paymentButton = screen.getByText('Payment Button');
  fireEvent.click(paymentButton);
  const dialogTitle = screen.getByText('Payment Details');
  expect(dialogTitle).toBeInTheDocument();
});

test('disables Submit Button when mandatory fields are empty', () => {
  render(<App />);
  const paymentButton = screen.getByText('Payment Button');
  fireEvent.click(paymentButton);
  const submitButton = screen.getByText('Submit');
  expect(submitButton).toBeDisabled();
});

test('enables Submit Button when mandatory fields are filled', () => {
  render(<App />);
  const paymentButton = screen.getByText('Payment Button');
  fireEvent.click(paymentButton);

  const toInput = screen.getByPlaceholderText('To');
  const fromSelect = screen.getByLabelText('From');
  const amountInput = screen.getByPlaceholderText('Amount');

  fireEvent.change(toInput, { target: { value: 'test@example.com' } });
  fireEvent.change(fromSelect, { target: { value: 'BTC' } });
  fireEvent.change(amountInput, { target: { value: '10' } });

  const submitButton = screen.getByText('Submit');
  expect(submitButton).not.toBeDisabled();
});

test('displays success dialog on successful payment', async () => {
  render(<App />);
  const paymentButton = screen.getByText('Payment Button');
  fireEvent.click(paymentButton);

  const toInput = screen.getByPlaceholderText('To');
  const fromSelect = screen.getByLabelText('From');
  const amountInput = screen.getByPlaceholderText('Amount');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(toInput, { target: { value: 'test@example.com' } });
  fireEvent.change(fromSelect, { target: { value: 'BTC' } });
  fireEvent.change(amountInput, { target: { value: '10' } });

  fireEvent.click(submitButton);

  const successDialog = await screen.findByText('Payment was successful.');
  expect(successDialog).toBeInTheDocument();
});
