export const calculateExperience = (startDate: Date, endDate: Date): string => {
  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
  const monthInterval = endMonth - startMonth;

  const years = Math.floor(monthInterval / 12);
  const months = monthInterval % 12;
  let exp = "";
  if (years >= 1) {
    exp += `${years > 1 ? `${years} yrs` : `${years} yr`}`;
  }
  if (months >= 1) {
    exp += ` ${months > 1 ? `${months} mos` : `${months} mo`}`;
  }

  return exp;
};
