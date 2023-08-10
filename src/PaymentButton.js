import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import styled from 'styled-components';

const StyledFormLabel = styled.label`
  &.Mui-focused {
    background-color: white;
  }
  display: ${({ showLabel }) => (showLabel ? 'block' : 'none')};
`;

function App() {
  const [showLabels, setShowLabels] = useState(true);
  const [open, setOpen] = useState(false);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowLabels(true);
    resetFields();
  };

  const resetFields = () => {
    setTo('');
    setFrom('BTC');
    setAmount('');
    setDescription('');
    setSubmitDisabled(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'to') {
      setTo(value);
    } else if (name === 'from') {
      setFrom(value);
      setShowLabels(value === '');
    } else if (name === 'amount') {
      setAmount(value);
    } else if (name === 'description') {
      setDescription(value);
    }

    validateForm();
  };

  const validateForm = () => {
    if (to && from && amount) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/mock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, from, amount, description }),
      });

      if (response.status === 200) {
        setOpen(false);
        alert('Payment was successful.');
        resetFields();
      } else if (response.status === 400) {
        setOpen(false);
        alert('Error: Bad Request');
      } else if (response.status === 401) {
        window.location.href = '/login';
      } else if (response.status >= 500 && response.status < 600) {
        setOpen(false);
        alert('Error: Server Error');
      }
    } catch (error) {
      setOpen(false);
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Payment Button
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the payment details:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="to"
            type="email"
            fullWidth
            placeholder="To"
            value={to}
            onChange={handleInputChange}
            onKeyUp={validateForm}
          />
          <FormControl fullWidth>
            <Select name="from" value={from} onChange={handleInputChange}>
              <MenuItem value="BTC">BTC</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            name="amount"
            type="number"
            fullWidth
            placeholder="Amount"
            value={amount}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: showLabels }}
            onKeyUp={validateForm}
          />
          <TextField
            margin="dense"
            name="description"
            fullWidth
            placeholder="Description"
            value={description}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: showLabels }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={submitDisabled}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
