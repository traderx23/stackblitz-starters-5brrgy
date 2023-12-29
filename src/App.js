import React from 'react';
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
export default function App() {
  const upiId = 'pinubhati23@oksbi';
  const payeeName = 'Ajmal Ali';
  const amount = '1.00';
  const currency = 'INR';
  return (
    <div>
      <div>
        <h2>Scan the QR code to make a payment:</h2>
        <UPIQRCodeGenerator
          upiId={upiId}
          payeeName={payeeName}
          amount={amount}
          currency={currency}
        />
      </div>
    </div>
  );
}
