# Payment App

This is a Single Page Application (SPA) developed using ReactJS and Material UI. The app allows users to initiate a payment by filling in the payment details through a dialog box.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Assumptions](#assumptions)
- [Possible Improvements](#possible-improvements)
- [License](#license)

## Features

- Clicking the "Payment Button" opens a dialog box for entering payment details.
- Payment details include:
  - Recipient email ("To")
  - Cryptocurrency selection ("From")
  - Payment amount
  - Optional description
- Submit button is disabled until all mandatory fields are filled.
- Mock API endpoints for testing different scenarios: success, bad request, unauthorized, and server error.

## Getting Started

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/payment-app.git
   cd payment-app
   npm install
   npm start
   
2. Running the App:

   ```sh
   npm install
   npm start

   
## Usage

Click the "Payment Button" to open the payment dialog.
Fill in the payment details:
Recipient email ("To")
Select a cryptocurrency ("From")
Enter the payment amount
Optionally, add a payment description
The "Submit" button will be enabled once all mandatory fields are filled.
Click the "Submit" button to initiate the payment.
Dialog messages will be displayed based on different scenarios (success, errors).

## Assumptions

The app focuses on frontend development using ReactJS and Material UI.
The mock API provides simulated responses and doesn't include a real implementation.
Error handling scenarios are handled in the React app based on HTTP status codes.

## Possible Improvements

Integration with a real backend for actual payment processing.
User authentication and authorization for secure payment initiation.
Validation for email format, cryptocurrency selection, and positive numeric fields.
Unit tests and integration tests for various components and scenarios.


## License

This project is licensed under the MIT License 