import { NextApiRequest, NextApiResponse } from 'next';
import { calculateRentalCharges } from '@/lib/rentalCalculation';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { toolCode, checkoutDate, returnDate, discountPercent } = req.body;

    if (new Date(checkoutDate) >= new Date(returnDate)) {
      return res.status(400).json({ error: 'Checkout date must be before return date.' });
    }
    if (discountPercent < 0 || discountPercent > 100) {
      return res.status(400).json({ error: 'Discount percent must be between 0 and 100.' });
    }

    const rentalAgreement = calculateRentalCharges(toolCode, checkoutDate, returnDate, discountPercent);
    res.status(200).json(rentalAgreement);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
