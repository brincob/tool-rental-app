import { isWeekend, isHoliday } from '@/utils/dateUtils';
import { RentalAgreement } from '@/types';

const toolRates = {
  ladder: { dailyCharge: 1.99, weekendCharge: true, holidayCharge: false },
  chainsaw: { dailyCharge: 1.49, weekendCharge: false, holidayCharge: true },
  jackhammer: { dailyCharge: 2.99, weekendCharge: false, holidayCharge: false },
};

export function calculateRentalCharges(toolCode: string, checkoutDate: string, returnDate: string, discountPercent: number): RentalAgreement {
  const toolType = getToolType(toolCode);
  const { dailyCharge, weekendCharge, holidayCharge } = toolRates[toolType];
  let chargeableDays = 0;
  let currentDate = new Date(checkoutDate);

  while (currentDate < new Date(returnDate)) {
    const isChargeableDay = (!isWeekend(currentDate) || weekendCharge) &&
                            (!isHoliday(currentDate) || holidayCharge);
    if (isChargeableDay) {
      chargeableDays++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const preDiscountAmount = chargeableDays * dailyCharge;
  const discountAmount = (discountPercent / 100) * preDiscountAmount;
  const finalAmount = preDiscountAmount - discountAmount;

  return {
    toolCode,
    checkoutDate,
    returnDate,
    discountPercent,
    chargeableDays,
    dailyCharge,
    preDiscountAmount: parseFloat(preDiscountAmount.toFixed(2)),
    discountAmount: parseFloat(discountAmount.toFixed(2)),
    finalAmount: parseFloat(finalAmount.toFixed(2)),
  };
}

function getToolType(toolCode: string): string {
  const toolMap: Record<string, string> = {
    CHNS: 'chainsaw',
    LADW: 'ladder',
    JAKD: 'jackhammer',
    JAKR: 'jackhammer',
  };
  return toolMap[toolCode] || '';
}
