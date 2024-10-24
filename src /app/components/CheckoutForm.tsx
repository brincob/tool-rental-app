import React, { useState } from 'react';

interface CheckoutFormProps {
  toolCode: string;
  onSubmit: (checkoutData: { toolCode: string; checkoutDate: string; returnDate: string; discountPercent: number }) => void;
}

export default function CheckoutForm({ toolCode, onSubmit }: CheckoutFormProps) {
  const [checkoutDate, setCheckoutDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ toolCode, checkoutDate, returnDate, discountPercent });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Checkout Form</h3>
      <input type="date" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} required />
      <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
      <input type="number" value={discountPercent} onChange={(e) => setDiscountPercent(parseInt(e.target.value, 10))} min="0" max="100" />
      <button type="submit">Checkout</button>
    </form>
  );
}
