import React, { useState } from 'react';
import ToolSelection from '@/app/components/ToolSelection';
import CheckoutForm from '@/app/components/CheckoutForm';
import RentalAgreement from '@/app/components/RentalAgreement';
import { RentalAgreement as RentalAgreementType } from '@/types';

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [rentalAgreement, setRentalAgreement] = useState<RentalAgreementType | null>(null);

  const handleToolSelect = (toolCode: string) => {
    setSelectedTool(toolCode);
  };

  const handleCheckoutSubmit = async (checkoutData: { toolCode: string; checkoutDate: string; returnDate: string; discountPercent: number }) => {
    const response = await fetch('/api/rentals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(checkoutData),
    });
    const agreement = await response.json();
    setRentalAgreement(agreement);
  };

  return (
    <div>
      <h1>Tool Rental Application</h1>
      {!selectedTool && <ToolSelection onSelect={handleToolSelect} />}
      {selectedTool && !rentalAgreement && (
        <CheckoutForm toolCode={selectedTool} onSubmit={handleCheckoutSubmit} />
      )}
      {rentalAgreement && <RentalAgreement agreement={rentalAgreement} />}
    </div>
  );
}
