import React from 'react';
import { RentalAgreement } from '@/types';

type RentalAgreementProps = {
  agreement: RentalAgreement;
};

export default function RentalAgreement({ agreement }: RentalAgreementProps) {
  return (
    <div>
      <h3>Rental Agreement</h3>
      <p>Tool Code: {agreement.toolCode}</p>
      <p>Checkout Date: {agreement.checkoutDate}</p>
      <p>Return Date: {agreement.returnDate}</p>
      <p>Chargeable Days: {agreement.chargeableDays}</p>
      <p>Daily Charge: ${agreement.dailyCharge.toFixed(2)}</p>
      <p>Pre-Discount Amount: ${agreement.preDiscountAmount}</p>
      <p>Discount Percent: {agreement.discountPercent}%</p>
      <p>Discount Amount: ${agreement.discountAmount}</p>
      <p>Final Amount: ${agreement.finalAmount}</p>
    </div>
  );
}
