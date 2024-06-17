export const categoriseData = (data, mainType) =>
  data.reduce((groups, item) => {
    const group = groups.find((group) => group.category === item[mainType]);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({
        category: item[mainType],
        items: [item],
      });
    }
    return groups;
  }, []);

export const formatTitle = (title) => {
  const temp = title.split("-").join(" ");
  return temp.charAt(0).toUpperCase() + temp.slice(1);
};

export const calculateExperience = (startDate, endDate) => {
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

/**
 *
 * @param {date} startDate
 * @param {date} endDate
 * @returns {string}
 */

export const getFormattedDateAndExperience = (startDate, endDate) => {
  const opts = { year: "numeric", month: "short" };
  const startTimeStamp = new Date(startDate);
  const endTimeStamp = new Date(endDate);

  const currentOrg = startDate === endDate;

  const formattedDate = `${startTimeStamp.toLocaleDateString(
    "en-US",
    opts
  )} - ${
    currentOrg ? "present" : endTimeStamp.toLocaleDateString("en-US", opts)
  }`;

  const duration = calculateExperience(
    startTimeStamp,
    currentOrg ? new Date() : endTimeStamp
  );

  return {
    formattedDate,
    duration,
  };
};
