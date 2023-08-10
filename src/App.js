import React from 'react';
import PaymentButton from './PaymentButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can remove the logo and default text */}
        <p>
          Click the button below to make a payment:
        </p>
        <PaymentButton />
      </header>
    </div>
  );
}

export default App;
