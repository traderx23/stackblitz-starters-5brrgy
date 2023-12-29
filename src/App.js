import React, { useState } from 'react';
import './style.css';
import QRCode from 'qrcode.react';

const UPIQRCodeGenerator = ({ upiId, payeeName, amount, currency }) => {
  const upiLink = encodeURI(
    `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=${currency}`
  );

  return (
    <div>
      <QRCode
        value={upiLink}
        size={200}
        level={'H'}
        includeMargin={true}
        renderAs={'svg'}
        fgColor="#009E82"
      />
    </div>
  );
};

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [paymentReceived, setPaymentReceived] = useState(false);

  const handlePaymentStatus = () => {
    // Simulating payment confirmation, this logic should be replaced with actual payment confirmation logic.
    // For demonstration purposes, it sets the paymentReceived state to true after 2 seconds.
    setTimeout(() => {
      setPaymentReceived(true);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePaymentStatus();
  };

  const upiId = '7300411602@ibl';
  const payeeName = 'GreenStox';
  const currency = 'INR';

  return (
    <div>
      <div>
        <h2>Enter the amount to generate QR code:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter amount"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <button type="submit">Generate QR Code</button>
        </form>
        {inputAmount && (
          <div>
            <h3>Generated QR code for {inputAmount} INR:</h3>
            <UPIQRCodeGenerator
              upiId={upiId}
              payeeName={payeeName}
              amount={inputAmount}
              currency={currency}
            />
            {paymentReceived && <p>Payment received!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
