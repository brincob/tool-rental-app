export interface RentalAgreement {
  toolCode: string;
  checkoutDate: string;
  returnDate: string;
  discountPercent: number;
  chargeableDays: number;
  dailyCharge: number;
  preDiscountAmount: number;
  discountAmount: number;
  finalAmount: number;
}
